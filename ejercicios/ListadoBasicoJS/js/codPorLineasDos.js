
/*Implementa PorLineasDos que visualice los números del 0 al 100 separados por comas.
Cada múltiplo de 7 o finalizado en 7 ha de comenzar en una línea nueva.*/
function PorLineasDos(){
	var conte = document.getElementById("contenido");
	conte.innerHTML += "Números del 0 a 100.<br>";
	var num;

	for (var i = 0; i <= 100; i++){
		num = i+"";
		num = num.substr(-1,1);
		if ((i%7) == 0 || num == 8){ 
			conte.innerHTML += "<br>";
		}
		conte.innerHTML += (i+", ");
	}
}