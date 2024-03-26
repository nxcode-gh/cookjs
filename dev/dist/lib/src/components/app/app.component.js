import { CustomElement } from "../CustomElement";
import { html } from "lit";
import { AppTemplate } from "./app.template";
export class AppComponent extends CustomElement {
    static get properties() {
        return {
            data: { type: Object }
        };
    }
    constructor() {
        super();
        this.template = new AppTemplate();
        this.data = {};
    }
    render() {
        return html `${this.template.render(this.data)}`;
    }
}
//# sourceMappingURL=app.component.js.map