const Error404 = (): HTMLElement => {
    const container = document.createElement("div");
    container.className = "py-4 text-center";
    container.innerHTML = `
        <h1 class="fw-bold">404 Not Found ⚠️</h1>
        <p class="lead text-muted">Lo sentimos, la página que buscas no existe.</p>
        <a href="/">Volver a la página de inicio</a>
    `;
    return container;
};

export default Error404;