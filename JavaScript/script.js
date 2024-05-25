//manejar el formulario
document.getElementById("miFormulario").addEventListener("submit",
function(event){
    event.preventDefault();


    //obtener los datos del formulario

    let nombre = document.getElementById("nombre").value;

    let modelo = document.getElementById("modelo-vehiculo").value;   

    let email = document.getElementById("email").value;

    let fecha = document.getElementById("fecha").value;

    let comentarios = document.getElementById("comentarios").value; 
    
    let calificacion = document.getElementById('calificacion').value;

    let checkboxValue = document.getElementById('radioAcepto').checked;

    

    // crear objeto de los datos del formulario

    let datosFormulario = {
        nombre: nombre,
        modelo: modelo,
        email: email,
        fecha: fecha,        
        comentarios: comentarios,
        calificacion: calificacion,
        
        radioAcepto: checkboxValue
    };

    //mostrar datos recibidos en el div creado

    let datosEnviadosContenedor = document.getElementById("datosEnviados");

    datosEnviadosContenedor.innerHTML = "<h2> Esto son los datos del formulario</h2>";
    datosEnviadosContenedor.innerHTML += "<p> Nombre: " + datosFormulario.nombre + "</p>"; 
    datosEnviadosContenedor.innerHTML += "<p> Contraseña: " + datosFormulario.modelo + "</p>"; 
    datosEnviadosContenedor.innerHTML += "<p> Email: " + datosFormulario.email + "</p>"; 
    datosEnviadosContenedor.innerHTML += "<p> Fecha: " + datosFormulario.fecha + "</p>";
    datosEnviadosContenedor.innerHTML += "<p>Comentarios: " + datosFormulario.comentarios + "</p>";
    datosEnviadosContenedor.innerHTML += "<p>Calificación del vehículo: " +datosFormulario.calificacion + "</p>"

    if (checkboxValue) {
        datosEnviadosContenedor.innerHTML +="<p>Has aceptado la suscripción</p>"
    } else {
        datosEnviadosContenedor.innerHTML += "<p>No has aceptado la suscripción</p>"
    }
});