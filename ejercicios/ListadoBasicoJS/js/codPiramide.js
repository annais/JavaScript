/*Implementa Pirámide que mediante un bucle for visualice una pirámide del siguiente
	tipo:
	1
	22
	333
	4444
	55555
	666666
	7777777
	88888888
	999999999
	0000000000*/

function  Piramide(){
	var conte = document.getElementById("contenido");
	
	for(var a=1 ;a<=10; a++){
		for(var f=1;f<=a;f++){
			conte.innerHTML += f;
		}
		conte.innerHTML += "<br>";
	}
	
}