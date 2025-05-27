const Table = (tableId: string): HTMLElement => {
    const table = document.createElement("table");
    table.id = tableId;
    table.className = "table table-bordered";

    return table;
};

export default Table;