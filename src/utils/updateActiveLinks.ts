// 🧩 Utilitario para actualizar los enlaces activos en la navegación según la ruta actual.

const updateActiveLinks = (path: string) : void => {
    const links = document.querySelectorAll<HTMLAnchorElement>("a[data-link]");
    if (!links) return;

    links.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === path) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
};

export default updateActiveLinks;