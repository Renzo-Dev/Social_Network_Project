'use strict'

import {toRef} from "vue";

export class Validator {
    // variables
    emailError = "Некорректный формат почты";
    passwordError = {
        incorrectCharacter: "Некорректные символы",
        smallLength: "Мин.кол символов ( 4 )",
        bigLength: "Макс.кол символов ( 64 )"
    };

    // валидация почты
    validationEmail(email, validator) {
        // если у нас пришла пустая строка
        // выкидываем допустимая почта , что бы не было ошибка валидации
        if (!email) {
            return {
                isValid: true // Если email пустой, считаем его допустимым
            };
        }

        // паттерн проверки регулярного выражения для почты
        const emailRegPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        // Проверяем email на соответствие регулярному выражению
        const isValid = emailRegPattern.test(email);
        return {
            isValid: isValid,
            text: isValid ? '' : validator.emailError // Если email не прошел проверку, возвращаем текст ошибки
        };
    }

    validationPassword(password, validator) {

        if (!password) {
            return {
                isValid: true // Если пароль пустой, считаем его допустимым
            };
        }

        const minLength = 4;
        const maxLength = 64;

        if (password.length < minLength) {
            return {
                isValid: false,
                text: validator.passwordError.smallLength // Возвращаем текст ошибки, если длина пароля слишком короткая
            };
        }

        if (password.length > maxLength) {
            return {
                isValid: false,
                text: validator.passwordError.bigLength // Возвращаем текст ошибки, если длина пароля слишком длинная
            };
        }

        // Проверка регулярного выражения для пароля
        const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_\-+=.]+$/;
        const isValid = passwordRegex.test(password);

        return {
            isValid: isValid,
            text: isValid ? '' : validator.passwordError.incorrectCharacter // Возвращаем текст ошибки, если пароль не соответствует регулярному выражению
        };
    }

    checkPasswordStrength = (password) => {
        // Проверка сложности пароля
        let strength = 0;

        if (password.match(/[a-z]+/)) {
            strength += 1;
        }

        if (password.match(/[A-Z]+/)) {
            strength += 1;
        }

        if (password.match(/[0-9]+/)) {
            strength += 1;
        }

        if (password.match(/[$@#&!]+/)) {
            strength += 1;
        }

        return strength;
    }
}