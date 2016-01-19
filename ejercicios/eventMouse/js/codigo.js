window.addEventListener("dblclick", raton);

window.addEventListener("click", raton);

window.addEventListener("mousedown", raton);

window.addEventListener("mousemove", raton);

window.addEventListener("mouseout", raton);

window.addEventListener("mouseover", raton);

window.addEventListener("mouseup", raton);

function raton(event){
	var info = document.getElementById("info");

	info.innerHTML = "Tipo evento: "+event.type;

	if((event.type == "click") || (event.type == "dblclick") || (event.type == "mouseup") || (event.type == "mousedown")){
		info.innerHTML +="</br>Botón pulsado: "+botonPulsado(event);
	}else{
		info.innerHTML +="</br>Botón pulsado: Ninguno";
	}

	info.innerHTML += "</br>Eje X: "+event.clientX+
					"</br>Eje Y: "+event.clientY+"</br>";
}

function botonPulsado(evento){
	switch(evento.button){
		case 0:
			return "Izquierdo";
		break;
		case 1:
			return "Centro";
		break;
		case 2:
			return "Derecho";
		break;
	}
}