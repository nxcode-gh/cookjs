export class FormValidator {
    constructor(formEl, validator) {
        this.formEl = formEl;
        this.validator = validator;
        this.validatorError = {};
        this.isValid = false;
    }
    checkValidity() {
        Object.keys(this.validator).forEach((key) => {
            const inputEl = this.formEl.querySelector(`#${key}`);
            this.validator[key].forEach((fn) => {
                if (fn(inputEl) === true) {
                    // do nothing
                }
                else {
                    this.validatorError[key] = fn(inputEl);
                }
            });
        });
        if (Object.keys(this.validatorError).length > 0) {
            this.showValidatorError(Object.keys(this.validatorError));
            return false;
        }
        else {
            return true;
        }
    }
    resetValidity() {
        this.formEl.querySelectorAll('.validator-error').forEach((el) => {
            el.classList.remove('d-block');
            el.classList.add('d-none');
        });
    }
    showValidatorError(inputIds) {
        inputIds.forEach((inputId) => {
            var _a, _b, _c, _d, _e, _f;
            ((_b = (_a = this.formEl.querySelector(`#${inputId}`)) === null || _a === void 0 ? void 0 : _a.closest('.input-group')) === null || _b === void 0 ? void 0 : _b.nextElementSibling).textContent = this.validatorError[inputId];
            ((_d = (_c = this.formEl.querySelector(`#${inputId}`)) === null || _c === void 0 ? void 0 : _c.closest('.input-group')) === null || _d === void 0 ? void 0 : _d.nextElementSibling).classList.remove('d-none');
            ((_f = (_e = this.formEl.querySelector(`#${inputId}`)) === null || _e === void 0 ? void 0 : _e.closest('.input-group')) === null || _f === void 0 ? void 0 : _f.nextElementSibling).classList.remove('d-block');
        });
    }
}
//# sourceMappingURL=FormValidator.js.map