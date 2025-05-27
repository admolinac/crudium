const SectionHeading = (title: string, iconClass: string, buttonText: string, modalTargetId: string): HTMLElement => {
    const container = document.createElement("div");
    container.className = "d-flex";
    container.innerHTML = `
        <div class="me-auto">
            <h3 class="fw-bold">${title} <span> <i class="${iconClass}"></i> </span> </h3>
        </div>
        <div class="p-2">
            <button class="btn btn-outline-secondary" data-bs-toggle="modal" id="add-btn" data-bs-target="#${modalTargetId}">
                <i class="bi bi-plus"></i> ${buttonText}
            </button>
        </div>
    `;
    return container;
}

export default SectionHeading;