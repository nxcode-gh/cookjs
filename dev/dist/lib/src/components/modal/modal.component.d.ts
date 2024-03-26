import { TemplateResult } from "lit";
import { CustomElement } from "../CustomElement";
import { ModalTemplate } from "./modal.template";
export interface ModalData {
    id: string;
    options: {
        header: {
            title: TemplateResult;
        };
        body: TemplateResult;
        footer: {
            buttonClose: boolean;
            buttonActionX: boolean;
            buttonActionXLabel: string;
            buttonActionY: boolean;
            buttonActionYLabel: string;
        };
    };
}
export declare class ModalComponent extends CustomElement {
    data: ModalData | {};
    template: ModalTemplate;
    constructor();
    render(): TemplateResult;
}
//# sourceMappingURL=modal.component.d.ts.map