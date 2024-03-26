import { html, nothing } from "lit";
export class ModalTemplate {
    constructor() { }
    render(data) {
        return html `<div id="${data.id}" class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title">${data.options.header.title}</h6>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    ${'body' in data.options ?
            html `<div class="modal-body">
                        ${data.options.body}
                    </div>` : nothing}
                    <div class="modal-footer border-0">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" id="modal-action-x" class="btn btn-primary">label</button>
                    </div>
                </div>
            </div>
        </div>`;
    }
}
//# sourceMappingURL=modal.template.js.map