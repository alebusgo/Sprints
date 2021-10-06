let registros = [];

function agregarRegistros(){

	let nombreUsuario = document.getElementById("in_usuario").value;
    let contrasena = document.getElementById("in_contrasena").value;

    registros.push({usuario: nombreUsuario, password: contrasena})

}

function filtrarPorContrasena(arreglo, filtro){

 let filtrado = arreglo.filter(elemento=>elemento.password.length <= filtro)

 console.log(filtrado)

 return filtrado 

}

module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistros = agregarRegistros;