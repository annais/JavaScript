(function(){
	window.addEventListener('load',function(){
		var READY_STATE_UNINITIALIZED=0; 
		var READY_STATE_LOADING=1; 
		var READY_STATE_LOADED=2;
		var READY_STATE_INTERACTIVE=3; 
		var READY_STATE_COMPLETE=4;
		 
		var peticion_http;
		var estadosPosibles = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completado'];

		var contenido = document.getElementById('contenidos');
		var recursos = document.getElementById('recurso');
		var cabeceras = document.getElementById('cabeceras');
		var codigo = document.getElementById('codigo');
		var estados = document.getElementById('estados');

		recursos.value = window.location.href;
		cargaContenido(recursos.value,"GET",muestraContenido);

		document.getElementById('enviar').addEventListener('click',function(){
			cargaContenido(recursos.value,"GET",muestraContenido);
			
		});

		document.getElementById('limpiar').addEventListener('click',function(){
			estados.innerHTML= '';
		});
		
		function cargaContenido(url, metodo, funcion) {
		  peticion_http = new XMLHttpRequest();
		 
		  if(peticion_http) {
		    peticion_http.onreadystatechange = funcion;
		    peticion_http.open(metodo, url, true);
		    peticion_http.send(null);
		  }
		}
		 
		function muestraContenido() {
		    estados.innerHTML += peticion_http.readyState + ' --> ' + estadosPosibles[peticion_http.readyState] + '</br>';
		  if(peticion_http.readyState == READY_STATE_COMPLETE) {
		    if(peticion_http.status == 200) {
		      contenido.innerHTML = peticion_http.responseText;
		    }
		 
		    cabeceras.innerHTML = peticion_http.getAllResponseHeaders();
		    codigo.innerHTML = peticion_http.status+'</br>';
		    codigo.innerHTML += peticion_http.statusText;
		  }
		}


	});
		 
})();