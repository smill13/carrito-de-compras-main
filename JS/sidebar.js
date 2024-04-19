document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.getElementById("sidebar");
    var toggleBtn = document.getElementById("toggle-btn");

    // Función para cerrar la barra lateral
    function cerrarSidebar() {
        sidebar.style.left = "-250px";
    }

    // Evento de clic en el botón de alternancia
    toggleBtn.addEventListener("click", function() {
        if (sidebar.style.left === "-250px") {
            sidebar.style.left = "0";
        } else {
            cerrarSidebar();
        }
    });

    // Evento de clic en cualquier lugar fuera del sidebar
    document.addEventListener("click", function(event) {
        if (!sidebar.contains(event.target) && event.target !== toggleBtn) {
            cerrarSidebar();
        }
    });
});
