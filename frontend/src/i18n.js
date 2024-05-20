import { createI18n } from 'vue-i18n';

const loadedLanguages = [];

function setI18nLanguage(i18n, lang) {
    i18n.global.locale.value = lang;
    document.querySelector('html').setAttribute('lang', lang);
    return lang;
}

function loadLocaleMessages(i18n, lang) {
    // Если язык уже загружен
    if (loadedLanguages.includes(lang)) {
        return Promise.resolve(setI18nLanguage(i18n, lang));
    }

    // Загружаем язык динамически
    return import(`./locales/${lang}.json`).then(messages => {
        i18n.global.setLocaleMessage(lang, messages.default);
        loadedLanguages.push(lang);
        return setI18nLanguage(i18n, lang);
    });
}

const i18n = createI18n({
    legacy: false,
    locale: 'ru', // начальный язык
    fallbackLocale: 'ru',
    messages: {} // начальные сообщения пустые, так как мы будем загружать их лениво
});

export function changeLanguage(lang) {
    return loadLocaleMessages(i18n, lang);
}

export function getPreferredLanguage() {
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
        return storedLang;
    }
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['en', 'ru'];
    if (supportedLangs.includes(browserLang)) {
        return browserLang;
    }
    return 'en';
}

export default i18n;
