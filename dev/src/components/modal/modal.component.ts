import { TemplateResult } from "lit";
import { CustomElement } from "../CustomElement";
import { ModalTemplate } from "./modal.template";

export interface ModalData {
    id:string
    options: {
        header: {
            title: TemplateResult
        },
        body: TemplateResult,
        footer: {
            buttonClose:boolean
            buttonActionX:boolean
            buttonActionXLabel:string
            buttonActionY:boolean
            buttonActionYLabel:string
        }
    }
}

export class ModalComponent extends CustomElement {
    
    data:ModalData | {}
    template:ModalTemplate

    constructor(){
        super()
        this.template = new ModalTemplate()
        this.data = {1:false}
    }

    render():TemplateResult{
        return this.template.render(<ModalData>this.data)
    }
}