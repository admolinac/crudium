import type { ActionButtons } from "../types/actionButtonsType";

// 🧩 Botones de acción para editar y eliminar una entidad desde el datatable.

export function ActionButtons <T extends ActionButtons> (entity: T) : string {
    return `
        <button class="edit-btn btn btn-outline-primary rounded-circle" data-id="${entity.id}"> 
            <i class="bi bi-pencil-fill"></i>
        </button>
        <button class="delete-btn btn btn-outline-danger rounded-circle" data-id="${entity.id}">
            <i class="bi bi-trash-fill"></i>
        </button>
    `;
}

export default ActionButtons;