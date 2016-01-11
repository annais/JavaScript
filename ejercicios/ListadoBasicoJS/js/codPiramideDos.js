/*Implementa PiramideDos que mediante un bucle for visualice una pirámide del
	siguiente tipo:
	1
	12
	123
	1234
	12345
	123456
	1234567
	12345678
	123456789
	1234567890*/

function  PiramideDos(){
	var conte = document.getElementById("contenido"); 
	for(var a=1 ;a<=10; a++){
		for(var f=1;f<=a;f++){
			if(a==10){
				conte.innerHTML += "0"; 
			}else{
				conte.innerHTML += a ;
			}
		}
		conte.innerHTML += "<br>";
	}
	
}