function validar() {
    var nombre, apellidos, edad, telefono, email, expresion;
        nombre = document.getElementById("nombre").value;
        apellidos = document.getElementById("apellidos").value;
        edad = document.getElementById("edad").value;
        telefono = document.getElementById("telefono").value;
        email = document.getElementById("email").value;
        
        expresion = /\w+@\w+\.+[a-z]/; /*Valido la combinacion que tiene un email*/

        if(nombre === "" || apellidos=== "" || edad=== "" || telefono=== ""|| email=== "" ){
            alert("Todos los campos son obligatorios");
            return false;}
       else if(nombre.length > 10){
           alert("Nombre muy largo");
           return false;}
       else if(apellidos.length > 15){
        alert("Apellidos muy largo");
        return false;}
        else if(edad.length > 3){
            alert("Usted es muy grande para viajar!");
             return false;}
        else if(isNaN(telefono) ||telefono.length > 10){
            alert("El telefono ingresado es muy largo, ingresar solo numeros");
        return false;}
        else if(email.length > 30){
            alert("Email muy largo");
            return false;}
        else if(!expresion.test(email)){
            alert("El formato de correo no es válido");
        return false;}
        
}