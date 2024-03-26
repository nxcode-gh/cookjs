
export class FormValidator {

    formEl:HTMLFormElement
    validator:{[key:string]:any}
    validatorError:{[key:string]:string}
    isValid:boolean


    constructor(formEl:HTMLFormElement,validator:{[key:string]:any}){
        this.formEl = formEl
        this.validator = validator
        this.validatorError = {}
        this.isValid = false

    }

    checkValidity(): boolean {

        Object.keys(this.validator).forEach((key:string)=>{
            const inputEl:HTMLElement = (<HTMLElement>this.formEl.querySelector(`#${key}`));
            
            (<Array<any>>this.validator[key]).forEach((fn:any)=>{
                
                if(fn(inputEl) === true){
                    // do nothing
                }else{
                    this.validatorError[key] = fn(inputEl)
                }
            });
        });

        if(Object.keys(this.validatorError).length > 0){
            this.showValidatorError(Object.keys(this.validatorError))
            return false
        }
        else{
            return true
        }
    }

    resetValidity(){
        this.formEl.querySelectorAll('.validator-error').forEach((el:Element)=>{
            el.classList.remove('d-block')
            el.classList.add('d-none')
        })
    }

    showValidatorError(inputIds:Array<string>){
        
        inputIds.forEach((inputId:string)=>{
            (<HTMLElement>this.formEl.querySelector(`#${inputId}`)?.closest('.input-group')?.nextElementSibling).textContent = this.validatorError[inputId];
            (<HTMLElement>this.formEl.querySelector(`#${inputId}`)?.closest('.input-group')?.nextElementSibling).classList.remove('d-none');
            (<HTMLElement>this.formEl.querySelector(`#${inputId}`)?.closest('.input-group')?.nextElementSibling).classList.remove('d-block');
           });

    }


}