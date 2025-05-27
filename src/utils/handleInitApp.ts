import router from "../router";

// 🧩 Manejar la navegación y el enrutamiento de la aplicación sin recargar la página.
const handleNavigation = (url: string): void => {
    history.pushState(null, '', url);
    router();
};

// 🧩 Intercepta los clics en enlaces para manejar la navegación sin recargar la página
const interceptLinkClicks = (): void => {
    document.body.addEventListener("click", (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        if (target.matches("[data-link]")) {
            e.preventDefault();
            const anchor = target as HTMLAnchorElement;
            handleNavigation(anchor.href);
        } else if (target.closest("[data-link]")) {
            e.preventDefault();
            const anchor = target.closest("a") as HTMLAnchorElement;
            handleNavigation(anchor.href);
        }
    });
};

// 🧩 Inicializa la aplicación, configurando el enrutamiento y los eventos necesarios.
const initApp = (): void => {
    interceptLinkClicks();
    window.addEventListener("popstate", router);
    window.addEventListener("hashchange", router);
    router();
};

export default initApp;