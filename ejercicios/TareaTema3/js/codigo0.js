
window.addEventListener("load", function(){
	url();
	protocolo();
	navegadorName();
	navegadorUse();

	window.open("pag1.html");
});

function url(){
	document.getElementById("url").innerHTML =  location.href;
}

function protocolo(){
	document.getElementById("prot").innerHTML =  location.protocol;
}

function navegadorName(){
	document.getElementById("navname").innerHTML =  navigator.appCodeName;
}

function navegadorUse(){
	if (navigator.javaEnabled()) {
		document.getElementById("nav").innerHTML = "Java SÍ está disponible en esta ventana.";
	}else{ 
		document.getElementById("nav").innerHTML = "Java NO está disponible en esta ventana.";
	}
}