import {ready} from './Funcionalidades.js';

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}


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
        .then(data => {
            callback(data);
            // Luego de cargar los datos, llamamos la función para inicializar las funcionalidades del carrito
            ready();
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}

// Llamamos a la función getCaracteres y pasamos una función de callback
getCaracteres(data => {
    data.forEach(item => {
        const galleryItem = document.createRange().createContextualFragment(`
            <div class="item">
                <span class="titulo-item">${item.titulo}</span>
                <img src="${item.imagen}" alt="" class="img-item">
                <span class="precio-item">${item.precio}</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
        `);

        const galleryContainer = document.querySelector(".contenedor-items");
        galleryContainer.append(galleryItem);
    });
});