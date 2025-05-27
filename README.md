# Crudium 🚀

**Crudium** es una Single Page Application (SPA) desarrollada en Vanilla TypeScript con Vite. Su objetivo es brindar una interfaz intuitiva para realizar operaciones CRUD sobre dos recursos principales: **Usuarios** y **Productos**.

Este proyecto fue mejorado respecto a su versión inicial, incorporando un **sistema de enrutamiento**, manejo de **vistas de error**.

---

## ⚡ Tecnologías y Librerías Usadas

- [Vite](https://vitejs.dev/) - Empaquetador moderno para desarrollo rápido en frontend
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/) - Validación de esquemas
- [Bootstrap](https://getbootstrap.com/) - Estilos rápidos y responsivos
- [DataTables](https://datatables.net/) - Tablas interactivas

---

## 📁 Estructura del Proyecto

```
crudium/
├── public/
└── src/
    ├── api/
    │   ├── datasource/
    │   ├── factory/
    │   └── repository/
    ├── components/
    ├── router/
    ├── templates/
    ├── types/
    ├── utils/
    ├── views/
    │   ├── Errors/
    │   ├── Product/
    │   └── User/
    ├── index.html
    ├── style.css
    └── main.ts
````

---

## 🧠 Arquitectura

Crudium se basa en patrones de diseño para facilitar la mantenibilidad y escalabilidad del código:

### 🌐 Datasource Pattern

Encapsula el acceso a la API de [MockAPI](https://mockapi.io/).

### 🧩 Repository Pattern

Define una interfaz intermedia entre la lógica de negocio y la fuente de datos. 

### 🏭 Factory Pattern

Utilizado para crear instancias de repositorios, facilitando la centralización de la lógica de construcción y permitiendo inyección de dependencias.

---

## 🔗 Enrutamiento

La SPA cuenta con un **router personalizado** que gestiona la navegación entre:

- `/users` – Página principal de gestión de usuarios
- `/products` – Página de gestión de productos
- Rutas no válidas redirigen a una página de error (`404`)

---

## 🔧 CRUD sobre Usuarios y Productos

### Recursos en MockAPI

- [User Resource](https://6823f16c65ba058033985469.mockapi.io/api/v1/users)  
- [Product Resource](https://6823f16c65ba058033985469.mockapi.io/api/v1/products)

Cada recurso incluye operaciones de:
- Crear
- Leer
- Actualizar
- Eliminar

El acceso a estos recursos está centralizado en los `repositories` usando validaciones con `zod` para garantizar integridad de los datos.

---

## 🧩 Componentes y Plantillas

- [Modales](src/components/FormModal.ts)
- [Tablas](src/components/Table.ts)
- [Header](src/templates/Header.ts)
- [Footer](src/templates/Footer.ts)

---

## 📄 Tipos y Validaciones

Los tipos se definen en la carpeta `types` y los esquemas de validación con `zod` para garantizar consistencia en los datos intercambiados con la API.

---

## ▶️ Inicio Rápido

1. Clona el repositorio:

```bash
git clone [https://github.com/tuusuario/crudium.git](https://github.com/admolinac/crudium.git)
cd crudium
````

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta en desarrollo:

```bash
npm run dev
```

4. Accede en el navegador:

```
http://localhost:5173
```

---

## 📦 Build para Producción

```bash
npm run build
```

---

## 🛠 Futuras Mejoras

* Tests unitarios con Vitest
* Uso de librería para alertas
* Autenticación y autorización
* Ampliar documentación

---
