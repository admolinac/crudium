// 🧩 Parámetros genéricos para la configuración de datatables

const getLanguageConfig = () => {
    return {
        lengthMenu: "Mostrar _MENU_ registros por página",
        emptyTable: "Lo sentimos, no se encontró nada",
        info: "Mostrando páginas _PAGE_ de _PAGES_",
        infoEmpty: "No hay registros disponibles",
        search: "Buscar:",
        infoFiltered: "(Filtrado from _MAX_ del registro total)",
        paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior",
        },
        processing: "Cargando información",
    }
}

const getLengthConfig = (): (string | number)[][] => {
    return [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "Todos"],
    ]
}

export const getGenericConfig = () => {
    return {
        responsive: true,
        lengthChange: true,
        lengthMenu: getLengthConfig(),
        language: getLanguageConfig(),
    }
}