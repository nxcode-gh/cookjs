import { TemplateResult } from "lit";
import { IRoot } from "../../lib/Router";
import { CustomElement } from "../CustomElement"
import { html } from "lit";
import { AppTemplate } from "./app.template";

export interface AppData {
    root: IRoot
}

export class AppComponent extends CustomElement {

    data:AppData | {}
    template:AppTemplate

    static get properties(){
        return {
            data:{type:Object}
        }
    }

    constructor(){
        super()
        this.template = new AppTemplate()
        this.data = {}
    }

    render():TemplateResult {
        return html`${this.template.render(<AppData>this.data)}`
    }
}