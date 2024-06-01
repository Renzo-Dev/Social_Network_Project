import { createI18n } from 'vue-i18n';

const supportedLanguages = ['en', 'ru'];
const loadedLanguages = [];

function setI18nLanguage(i18n, lang) {
    i18n.global.locale.value = lang;
    document.querySelector('html').setAttribute('lang', lang);
    return lang;
}

async function loadLocaleMessages(i18n, lang) {
    if (loadedLanguages.includes(lang)) {
        return Promise.resolve(setI18nLanguage(i18n, lang));
    }

    try {
        const messages = await import(`./locales/${lang}.json`);
        i18n.global.setLocaleMessage(lang, messages.default);
        loadedLanguages.push(lang);
        return setI18nLanguage(i18n, lang);
    } catch (error) {
        console.error(`Failed to load locale messages for ${lang}:`, error);
        return Promise.reject(error);
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'ru',
    messages: {}
});

export async function changeLanguage(lang) {
    if (!supportedLanguages.includes(lang)) {
        console.warn(`Unsupported language: ${lang}`);
        return;
    }
    await loadLocaleMessages(i18n, lang);
    localStorage.setItem('preferredLanguage', lang);
}

export function getPreferredLanguage() {
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang && supportedLanguages.includes(storedLang)) {
        return storedLang;
    }

    const browserLang = navigator.language.split('-')[0];
    if (supportedLanguages.includes(browserLang)) {
        return browserLang;
    }
    return 'en';
}

export default i18n;
