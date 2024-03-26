import { LitElement } from "lit";

export class CustomElement extends LitElement {

    constructor(){
        super()
    }

    // No shadowDOM
    protected createRenderRoot(): HTMLElement | DocumentFragment {
        if(!this.shadowRoot){
        return this   }
        else{
            return super.createRenderRoot()
        }
    }

    static shadowDOM:boolean = false
}