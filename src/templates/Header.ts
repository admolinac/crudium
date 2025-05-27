export const Header = (): HTMLElement => {
    const container = document.createElement("div");
    container.className = "navbar navbar-expand-lg bg-light py-2 mb-2 border-bottom"
    container.innerHTML = `
        <div class="container px-4 px-sm-0">
            <a href="/" class="navbar-brand d-flex align-items-center">
                <img src="/dev.svg" alt="Logo Crudium" width="40" height="34" class="me-2">
                <span class="d-none d-md-inline logo__text">
                Crudium
                </span>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDropdown"
                aria-controls="navbarDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarDropdown">
                <ul class="nav nav-pills d-flex">
                <li class="nav-item">
                    <a href="/" data-link class="nav-link" aria-current="page">Usuarios</a>
                </li>
                <li class="nav-item">
                    <a href="/product" data-link class="nav-link">Productos</a>
                </li>
                </ul>
            </div>
        </div>
    `;
    return container;
};

export default Header;