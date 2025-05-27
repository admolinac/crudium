const Error500 = (): HTMLElement => {
    const container = document.createElement("div");
    container.className = "py-4 text-center";
    container.innerHTML = `
        <h1 class="fw-bold">500 Internal Server Error ⚠️</h1>
        <p class="lead text-muted">Lo sentimos, error al cargar la página.</p>
        <a href="/">Volver a la página de inicio</a>
    `;
    return container;
};

export default Error500;