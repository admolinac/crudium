
import type { Route } from "../types/routeType";
import Product from "../views/Product";
import User from "../views/User";

// 🧩 Definición de las rutas de la aplicación.

export const routes: Route = {
    "/": User,
    "/product": Product
};