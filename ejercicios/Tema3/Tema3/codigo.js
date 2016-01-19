window.onload = function(){
	var datos = document.getElementById("datos");
	url();
	protocolo();
	navegadorName();
	navegadorUse();

	window.open("http://www.iesgrancapitan.org/portal/","",800, 600);
	window.open("pagina1.html");
};

function url(){
	datos.innerHTML +=  "URL Completa: "+location.href+"</br>";
}

function protocolo(){
	datos.innerHTML +=  "Protocolo utilizado:"+ location.protocol+"</br>";
}

function navegadorName(){
	datos.innerHTML += "Nombre en código del navegador:"+ navigator.userAgent+"</br>";
}

function navegadorUse(){
	if (navigator.javaEnabled()) {
		datos.innerHTML += "Que detecte si está JAVA disponible en esa ventana del navegador y si es así que escriba: Java SÍ está disponible en esta ventana.";
	}else{ 
		datos.innerHTML += "Que detecte si está JAVA disponible en esa ventana del navegador y si es así que escriba: Java NO está disponible en esta ventana.";
	}
}