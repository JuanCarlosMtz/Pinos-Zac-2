function mensaje(){
    email = document.getElementById("email").value;
    nombre = document.getElementById("nombre").value;
    if(confirm("¿El email " + email + " es correcto?")){
        alert("¡Gracias por suscribirte, " + nombre + "!");
    }
}