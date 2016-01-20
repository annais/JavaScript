(function (){
	window.addEventListener("load", function (){
		var usuario = document.getElementById("user");
		var contrasena = document.getElementById("key");
		var info = document.getElementById("info");
		var button = document.getElementById("boton").addEventListener("click", validarCampos);
		
		function validarCampos(){
			localStorage.setItem("usuario", usuario.value);
			localStorage.setItem("contrasena", contrasena.value);

			info.innerHTML = localStorage.getItem("usuario")+"</br>";
			info.innerHTML += localStorage.getItem("contrasena")+"</br>";
			info.innerHTML += "Has enviado: "+contarClick();+" veces.";
		}

		function contarClick(){

			if (localStorage.clickcount) {
	    		localStorage.clickcount = Number(localStorage.clickcount) + 1;
			} else {
	    		localStorage.clickcount = 1;
			}
		
			return localStorage.clickcount;
		}
	});
})();