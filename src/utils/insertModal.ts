// 🧩 Utilitario para insertar un modal en el DOM.

export function insertModal(modal: HTMLElement) : void {
    
    const modalRoot = document.getElementById("modal-root") as HTMLElement;

    if (!modalRoot) {
        console.warn("No se encontró #modal-root en el DOM.");
        return;
    }

    const existing = modalRoot.querySelector(`#${modal.id}`);
    if (existing) {
        existing.remove();
    }

    modalRoot.appendChild(modal);
}
