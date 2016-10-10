window.addEventListener("load",function(){
    var mensaje = document.getElementById('mensajes');
    mensajes.addEventListener('keypress', function(e) {
        var tecla = e.keyCode;
        if ( tecla == 13) {
            var conversacion = document.getElementById("conversacion");
            var contenedor = document.createElement("div");
                contenedor.classList.add("w-message", "w-message-out");
                conversacion.appendChild(contenedor);
            var segundContenedor = document.createElement("div");
                segundContenedor.classList.add("w-message-text");
                contenedor.appendChild(segundContenedor);
            var parrafo = document.createElement("p");


        }
    });
});


