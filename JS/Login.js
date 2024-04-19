document.addEventListener('DOMContentLoaded', function() {
  // Event listener for form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      // Get values from form inputs
      var email = document.getElementById('floatingInput').value;
      var password = document.getElementById('floatingPassword').value;

      // Cargar los datos del registro del almacenamiento local
      getCaracteres(function(userData) {
          // Verificar si los datos del registro existen y coinciden con los datos ingresados
          var found = false;
          for (var key in userData) {
              if (userData[key].email === email && userData[key].password === password) {
                  found = true;
                  break;
              }
          }
          if (found) {
              window.open("http://127.0.0.1:3000/HTML/main.html");
              // Aquí podrías redirigir al usuario a otra página
          } else {
              alert('Email o contraseña incorrectos');
          }
      });
  });
});

function getCaracteres(callback) {
  // Hacemos una solicitud HTTP para obtener el archivo JSON local
  fetch('/Datos/usuario.json')
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
