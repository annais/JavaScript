/*Implementa CerosYUnos que lea una secuencia de ceros y unos. Mostrará el número de ceros de la secuencia. 
Dejará de leer cuando el usuario introduzca el número 2.*/

var sol=0;
var num =0;

window.addEventListener("load", function(){
	var boton = document.getElementById("enviar");

	boton.addEventListener("click", function(){
		num = document.getElementById("num").value;
		CerosYUnos();
	});
});


function CerosYUnos(){
	if(num==0 || num==1){
		sol = sol + num;
		sol=sol.replace("1","");
	}else if(num == 2){
		sol = sol.length;
		document.getElementById("msg").innerHTML = "El cero se repite "+sol+" veces.";
		sol = 0;
	}else{
		document.getElementById("msg").innerHTML = "Solo se guardan los 0 y 1.";
	}
}