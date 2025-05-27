const Footer = (): HTMLElement => {
    const container = document.createElement("div");
    container.className = "bg-light py-2 border-top mt-auto"
    container.innerHTML = `
        <p class="text-center text-body-secondary">
        © 2025 Crudium. Creado por AM - 
        <span class="d-none d-md-inline">
            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"></i>
            </a>
        </span>

        </p>
    `;
    return container;
};

export default Footer;