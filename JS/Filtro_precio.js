// Función para filtrar y ordenar los datos
export function OrdernarPrecioMayor(data) {
    return data.sort((a, b) => {
        const precioA = Number(a.precio.replace(/[^0-9.-]+/g, ""));
        const precioB = Number(b.precio.replace(/[^0-9.-]+/g, ""));
        return precioB - precioA;
    });
}

export function OrdernarPrecioMenor(data) {
    return data.sort((a, b) => {
        const precioA = Number(a.precio.replace(/[^0-9.-]+/g, ""));
        const precioB = Number(b.precio.replace(/[^0-9.-]+/g, ""));
        return precioA - precioB;
    });
}
