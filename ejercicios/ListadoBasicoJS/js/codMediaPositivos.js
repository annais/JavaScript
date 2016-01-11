/*Implementa MediaPositivos que calcule la media de una serie de números positivos, introducidos por teclado. 
Dejará de leer cuando el usuario introduzca el 0. */

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
	if(num >0){
		sol = sol + num;
		cont++;
	}else if(num == 0){
		if(sol!=0)
		sol = sol/cont;
		document.getElementById("msg").innerHTML = "Solucion: "+sol;
		sol = 0;
	}else{
		sol = 0;
		document.getElementById("msg").innerHTML = "Solucion: "+sol;
	}
}