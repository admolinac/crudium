import type { ModalConfig, ModalField } from "../types/modalType";

const getFormFields = (fields: ModalField[]): string => {

    const formFields = fields.map((field: ModalField) => {
        if (field.type === "select" && field.options) {
            const options = field.options.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join("");
            return `
            <div class="mb-3">
                <label for="${field.id}" class="col-form-label">${field.label}:</label>
                <select 
                    class="form-select" 
                    id="${field.id}" 
                    name="${field.name}" 
                    ${field.required !== false ? "required" : ""}
                >
                    ${options}
                </select>
            </div>
      `;
        }

        if (field.type === "checkbox") {
            return `
            <div class="pt-3 mb-3 form-check">
                <input 
                    class="form-check-input" 
                    type="checkbox" 
                    name="${field.name}" 
                    value="" 
                    id="${field.id}"
                    ${field.required !== false ? "required" : ""}
                >
                    <label class="form-check-label" for="${field.id}">
                        ${field.label}
                    </label>
            </div>
            `;
        }

        return `
            <div class="mb-3">
                <label for="${field.id}" class="col-form-label">${field.label}:</label>
                <input 
                    type="${field.type}" 
                    name="${field.name}" 
                    class="form-control" 
                    id="${field.id}" 
                    autocomplete="off"
                    ${field.required !== false ? "required" : ""}
                    ${field.step ? `step="${field.step}"` : ""}
                    ${field.min !== undefined ? `min="${field.min}"` : ""} 
                />
            </div>
        `;
    });

    return formFields.join("");
}

const FormModal = (config: ModalConfig): HTMLElement => {
    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = config.id;
    modal.tabIndex = -1;
    modal.setAttribute("aria-hidden", "true");

    const formFields = getFormFields(config.fields);

    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">${config.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <form id="${config.formId}">
                    <div class="modal-body">
                        ${formFields}
                    </div>
                    <div class="modal-footer text-center">
                        <button type="submit" class="btn btn-primary w-100">${config.submit}</button>
                    </div>
                </form>
            </div>
        </div>
    `;

    return modal;
}

export default FormModal;