'use strict'

export class Validator {
    // variables
    emailError = "Некорректный формат почты";

    #validator_str = "";

    constructor(validatorStr) {
    }

    // return true - если почта корректна
    // возвращает строку с ошибкой если почта не корректна
    validationEmail(email) {
        if (!email) {
            return {
                isValid: true // Если email пустой, считаем его допустимым
            };
        }

        const emailRegPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        // Проверяем email на соответствие регулярному выражению
        const isValid = emailRegPattern.test(email);

        return {
            isValid: isValid,
            text: isValid ? '' : this.emailError // Если email не прошел проверку, возвращаем текст ошибки
        };
    }
}