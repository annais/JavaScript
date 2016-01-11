
var num =0;

window.addEventListener("load", function(){
	var boton = document.getElementById("enviar");

	boton.addEventListener("click", function(){
		num = document.getElementById("num").value;
		Decena();
	});
});

function Decena(){
	var mensaje = document.getElementById("msg");
	if (num<10 && num > -1) {
		num = num.split(".");
		if (num.length-1 == 0) {
			mensaje.innerHTML = "El número no tiene decimales.";
		}else{
			mensaje.innerHTML = "El número contiene "+num[1].length+" decimales y al reves se ve asi "+num.reverse();
		}
	}else{
		mensaje.innerHTML = "Debes introducir un número entre el 0 y el 10.";
	}
}