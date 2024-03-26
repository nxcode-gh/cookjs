import { TemplateResult } from "lit";
import { IRoot } from "../../lib/Router";
import { CustomElement } from "../CustomElement";
import { AppTemplate } from "./app.template";
export interface AppData {
    root: IRoot;
}
export declare class AppComponent extends CustomElement {
    data: AppData | {};
    template: AppTemplate;
    static get properties(): {
        data: {
            type: ObjectConstructor;
        };
    };
    constructor();
    render(): TemplateResult;
}
//# sourceMappingURL=app.component.d.ts.map