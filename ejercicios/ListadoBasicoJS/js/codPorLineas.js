/*Implementa PorLineas que visualice los números del 0 al 100 separados por comas.
Cada múltiplo de 7 ha de comenzar en una línea nueva*/

function PorLineas(){
	var conte = document.getElementById("contenido");
	conte.innerHTML += "Números del 0 a 100.<br>";

	for (var i = 0; i <= 100; i++){
		if ((i%7) == 0){
			conte.innerHTML += "<br> ";
		}
		conte.innerHTML += (i+", ");
	}
}