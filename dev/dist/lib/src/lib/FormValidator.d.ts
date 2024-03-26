export declare class FormValidator {
    formEl: HTMLFormElement;
    validator: {
        [key: string]: any;
    };
    validatorError: {
        [key: string]: string;
    };
    isValid: boolean;
    constructor(formEl: HTMLFormElement, validator: {
        [key: string]: any;
    });
    checkValidity(): boolean;
    resetValidity(): void;
    showValidatorError(inputIds: Array<string>): void;
}
//# sourceMappingURL=FormValidator.d.ts.map