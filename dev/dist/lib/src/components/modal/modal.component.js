import { CustomElement } from "../CustomElement";
import { ModalTemplate } from "./modal.template";
export class ModalComponent extends CustomElement {
    constructor() {
        super();
        this.template = new ModalTemplate();
        this.data = { 1: false };
    }
    render() {
        return this.template.render(this.data);
    }
}
//# sourceMappingURL=modal.component.js.map