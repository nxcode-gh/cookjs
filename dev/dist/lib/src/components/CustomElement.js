import { LitElement } from "lit";
export class CustomElement extends LitElement {
    constructor() {
        super();
    }
    // No shadowDOM
    createRenderRoot() {
        if (!this.shadowRoot) {
            return this;
        }
        else {
            return super.createRenderRoot();
        }
    }
}
CustomElement.shadowDOM = false;
//# sourceMappingURL=CustomElement.js.map