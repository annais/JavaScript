/*Implementa DeSieteEnSiete que escriba los números del 100 al 0 de 7 en siete.*/

function DeSieteEnSiete(){
	var conte = document.getElementById("contenido");
	conte.innerHTML += "Números del 100 a 0 de 7 en 7.<br>";

	for (var i = 100; i >= 0; i-=7){
		conte.innerHTML += (i+", ");
	}
}