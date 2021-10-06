function validar_nombreUsuario(string){

var nombreUsuario=document.getElementById('in_usuario').value
var patron=/^[A-Za-z0-9]{3,9]}$/;
	if(nombreUsuario.search(patron))
	{
		return true
	}
	else
	{
		return false
	}

}

function validar_contrasena(string){

var contrasena=document.getElementById('in_usuario').value
var patron1=/^[A-Za-z0-9]{3,9]}$/;
	if(contrasena.search(patron1))
	{
		return true
	}
	else
	{
		return false
	}


}

module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;