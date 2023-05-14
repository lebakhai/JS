const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function Validator(options) {
    const formElemet = $(options.form);
    const enableInputs = formElemet.querySelectorAll('[name]:not([disabled])');
    const isValid = Array.from(enableInputs).map(() => true);

    formElemet.onsubmit = (e) => {
        e.preventDefault();
        let isFormValid = true;

        options.rules.forEach((rule, index) => {
            const inputElement = formElemet.querySelector(rule.selector);
            const inputMsg = inputElement.parentElement.querySelector('.form-msg');

            if (inputElement) {
                function validate(element, isTyping) {
                    const errorMsg = rule.test(element, isTyping);
                    inputElement.parentElement.classList.toggle('invalid', Boolean(errorMsg));
                    inputMsg.textContent = errorMsg || '';

                    isValid[index] = !errorMsg;
                }

                validate(inputElement);
            }
        });

        if (isValid.includes(false)) {
            isFormValid = false;
            console.log('Có lỗi');
        } else {
            isFormValid = true;
            console.log('Không có lỗi');
        }

        if (isFormValid) {
            if (typeof options.onSubmit === 'function') {
                const formValues = Array.from(enableInputs).reduce((values, input) => {
                    values[input.name] = input.value;
                    return values;
                }, {});
                options.onSubmit(formValues);
            } else {
                formElemet.submit();
            }
        }
    };

    if (formElemet) {
        options.rules.forEach((rule) => {
            const inputElement = formElemet.querySelector(rule.selector);
            const inputMsg = inputElement.parentElement.querySelector('.form-msg');

            if (inputElement) {
                function validate(element, isTyping) {
                    const errorMsg = rule.test(element, isTyping);
                    inputElement.parentElement.classList.toggle('invalid', Boolean(errorMsg));
                    inputMsg.textContent = errorMsg || '';
                }

                inputElement.onblur = () => {
                    validate(inputElement);
                };

                inputElement.oninput = () => {
                    validate(inputElement, true);
                };
            }
        });
    }
}

Validator.isRequired = (selector, min = 1, message = `Please enter at least ${min} characters`) => {
    return {
        selector: selector,
        test: (element, isTyping) => {
            return (element.value.trim().length < min && !isTyping) ? message : undefined;
        }
    };
};

Validator.isEmail = (selector, min = 1, message = `Email only`) => {
    return {
        selector: selector,
        test: (element, isTyping) => {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return (regex.test(element.value) && !(element.value.trim().length < min)) ? undefined : (!isTyping ? message : undefined);
        }
    };
};

Validator.isConfirm = (selector, getConfirmValue, message = `Text does not match`) => {
    return {
        selector: selector,
        test: (element, isTyping) => {
            return (element.value === getConfirmValue()) ? undefined : (!isTyping ? message : undefined);
        }
    };
};
