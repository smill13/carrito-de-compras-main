import { ready } from './Funcionalidades.js';
import { OrdernarPrecioMayor } from './Filtro_precio.js';
import { OrdernarPrecioMenor } from './Filtro_precio.js';

// Verificar el estado del documento
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
} else {
    start();
}

// Función principal para iniciar el proceso
function start() {
    // Llamamos a la función getCaracteres y pasamos una función de callback
    getCaracteres(data => {
        // Función para mostrar datos en el DOM
        const mostrarDatosEnDOM = (datos) => {
            // Mostrar los datos en el DOM
            mostrarDatos(datos);

            // Inicializar las funcionalidades del carrito
            ready();
        };

        // Función para ordenar los datos de mayor a menor
        const ordenarMayorMenor = () => {
            const datosOrdenados = OrdernarPrecioMayor(data);
            mostrarDatosEnDOM(datosOrdenados);
        };

        // Función para ordenar los datos de menor a mayor
        const ordenarMenorMayor = () => {
            const datosOrdenados = OrdernarPrecioMenor(data);
            mostrarDatosEnDOM(datosOrdenados);
        };

        // Asignar evento de clic al botón "Mayor a menor"
        document.getElementById("btnMayorMenor").addEventListener("click", ordenarMayorMenor);

        // Asignar evento de clic al botón "Menor a mayor"
        document.getElementById("btnMenorMayor").addEventListener("click", ordenarMenorMayor);

        // Mostrar los datos sin ordenar por defecto
        mostrarDatosEnDOM(data);
    });
}


// Función para obtener los datos y llamar al callback
function getCaracteres(callback) {
    // Hacemos una solicitud HTTP para obtener el archivo JSON local
    fetch('/Datos/Data.json')
        .then(response => {
            // Verificamos si la solicitud fue exitosa
            if (!response.ok) {
                throw new Error('No se pudo obtener el archivo JSON');
            }
            // Parseamos la respuesta como JSON y llamamos a la función de callback con los datos
            return response.json();
        })
        .then(callback)
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}


// Función para mostrar los datos en el DOM
function mostrarDatos(data) {
    const galleryContainer = document.querySelector(".contenedor-items");
    galleryContainer.innerHTML = ''; // Limpiamos el contenedor antes de agregar los nuevos elementos
    data.forEach(item => {
        const galleryItem = document.createRange().createContextualFragment(`
            <div class="item">
                <span class="titulo-item">${item.titulo}</span>
                <img src="${item.imagen}" alt="" class="img-item">
                <span class="precio-item">${item.precio}</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
        `);
        galleryContainer.append(galleryItem);
    });
}
