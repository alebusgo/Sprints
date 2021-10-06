let registros = []

function agregarRegistro(){

    let nombreUsuario = document.getElementById("in_usuario").value;
    let password = document.getElementById("in_contrasena").value;

    registros.push({"usuario":nombreUsuario, "contrasena": password}) //Solucion 2: crear diccionarios (maps) por cada registro
    console.log (registros) //console log de pruebas
}


function filtrarPorContrasena(arreglo, filtro){
    
    let filtrado = arreglo.filter(elemento=>elemento.contrasena.length <= filtro) //Solucion 2: filtrar los diccionarios (maps) con base en la longitud de la contraseña

    console.log(filtrado)
    return filtrado
    
}

module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;