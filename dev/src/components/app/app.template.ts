import { TemplateResult, html } from "lit";
import { Appx } from "../../lib/App";
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { AppData } from "./app.component";

export class AppTemplate {

    constructor(){}

    render(data:AppData):TemplateResult {
        
        if(data.root && Appx.config.router[data.root.name]){
            // Render the root component
            const template = `<${Appx.config.router[data.root.name].customElement}>`
            return html`${unsafeHTML(template)}`
        }
        else {
            console.error(`Template not found ${data.root.name}`)
            return html``
        }
    }
}
