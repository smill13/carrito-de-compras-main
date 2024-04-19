function descargarArchivo(datos, nombreArchivo) {
    // Convertir el objeto a una cadena JSON
    var jsonString = JSON.stringify(datos);

    // Crear un Blob con los datos en formato JSON
    var blob = new Blob([jsonString], { type: 'application/json' });

    // Crear un enlace para la descarga
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.download = nombreArchivo; // Nombre del archivo a descargar
    a.href = url;

    // Simular un clic en el enlace para iniciar la descarga
    a.click();

    // Limpiar el objeto URL
    URL.revokeObjectURL(url);
}

function registrar() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('floatingName').value;
    var email = document.getElementById('floatingInput').value;
    var password = document.getElementById('floatingPassword').value;

    // Crear un objeto con los datos del usuario
    var usuario = {
        nombre: nombre,
        email: email,
        password: password
    };

    window.open("http://127.0.0.1:3000/HTML/Login", "_blank");
    // Descargar el archivo JSON con los datos del usuario
    descargarArchivo(usuario, 'usuario.json');
}

// Event listener para el formulario de registro
document.getElementById('registroform').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar la acción predeterminada del formulario
    registrar(); // Llamar a la función registrar al enviar el formulario
});
