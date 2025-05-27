import type { User } from "../../../types/userType";
import { ActionButtons } from "../../../components/ActionButtons";

export function getUserTableColumns() {
  
  return [
    { title: "Nombre", data: "name" },
    { title: "Edad", data: "age" },
    { title: "Email", data: "email", className: "d-none d-sm-table-cell" },
    {
      title: "Estado",
      data: null,
      render: (user: User) => `
          ${user.status === "active" ? "🟢 Activo" : "🔴 Inactivo"}
        `,
      className: "d-none d-sm-table-cell",
    },
    {
      title: "Acciones",
      data: null,
      render: (user: User) => ActionButtons(user),
    },
  ];
}
