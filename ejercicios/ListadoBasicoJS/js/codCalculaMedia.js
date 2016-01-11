/*Implementa CalculaMedia que pida números hasta que se introduzca uno negativo. Entonces, que muestre la media.*/

var cont=0;
var sol=0;
var num =0;

window.addEventListener("load", function(){
	var boton = document.getElementById("enviar");

	boton.addEventListener("click", function(){
		num = parseInt(document.getElementById("num").value);
		CalcularMedia();
	});
});


function CalcularMedia(){
	if(num >-1){
		sol = sol + num;
		cont++;
	}else{
		sol = sol/cont;
		document.getElementById("msg").innerHTML = "Solucion: "+sol;
		sol = 0;
	}
}