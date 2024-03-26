import { Appx, App } from "./App";
import { html, render } from "lit";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
export function Nav(root, pushState = true, container = null) {
    try {
        // Save root params
        Object.keys(root.params).forEach((key) => {
            Appx.config.router[root.name].params[key] = root.params[key];
        });
        // Update the App root prop
        if (!container) {
            const app = App();
            if (app) {
                app.data.root = root;
                app.requestUpdate();
            }
        }
        else {
            // Else render the template in the container
            render(html `${unsafeHTML(`<${Appx.config.router[root.name].customElement}></${Appx.config.router[root.name].customElement}>`)}`, container);
        }
        const params = '';
        if (pushState)
            history.pushState({}, '', `#${root.name}` + '/' + params);
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
}
//# sourceMappingURL=Nav.js.map