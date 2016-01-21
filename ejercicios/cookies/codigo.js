(function (){
	window.addEventListener("load", function (){
		var usuario = document.getElementById("user");
		var contrasena = document.getElementById("key");
		var info = document.getElementById("info");
		var button = document.getElementById("boton").addEventListener("click", validarCampos);
		var btnelim = document.getElementById("btnelim").addEventListener("click", eliminarCampos);
		
		function validarCampos(){
			setCookie("usuario",usuario.value,50);
			setCookie("contrasena",contrasena.value,50);
			info.innerHTML = getCookie("usuario")+"<br>";
			info.innerHTML += getCookie("contrasena")+"<br>";
		}

		function eliminarCampos(){
			eliminarCookie("usuario");
			eliminarCookie("contrasena");
			info.innerHTML = "";
		}

		function setCookie(name, value, exdays) {
		    var d = new Date();
		    d.setTime(d.getTime() + (exdays*24*60*60*1000));
		    var expires = "expires="+d.toUTCString();
		    document.cookie = name + "=" + value + "; " + expires;
		}

		function getCookie(dato) {
		    var name = dato + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0; i<ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') {
		        	c = c.substring(1);
		        }
		        if (c.indexOf(name) == 0){
		        	return (name+c.substring(name.length, c.length));
		        } 
		    }
		    return "";
		}

		function eliminarCookie(dato){
			document.cookie = dato+"=; expires=Thu, 18 Dec 2013 12:00:00 UTC";
		}


	});
})();