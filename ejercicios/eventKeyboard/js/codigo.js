window.addEventListener("keypress", function(){
	teclado(event,false);
});

window.addEventListener("keydown", function(){
	teclado(event,true);
});

window.addEventListener("keyup", function(){
	teclado(event,false);
});

function teclado(event, borrar){
	var info = document.getElementById("info");
	if(borrar){
		info.innerHTML = "";
	}

	info.innerHTML += "Tipo de evento: " + event.type + "</br>" +
                "Propiedad keyCode: " + event.keyCode + "</br>" +
                "Propiedad charCode: " + event.charCode + "</br>" +
                "Carácter pulsado: " + String.fromCharCode(event.charCode) +
                "</br>----------------------------------------------</br>";
}





