/*Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número
entre el 1 y el 100. Mostrará un mensaje:
a. Para indicar si has acertado (en una nueva ventana)
b. Para indicar si la solución es mayor o es menor.
Al finalizar, se le preguntará al usuario si quiere repetir el juego.*/

var random;
var num;

function aleatorio(){
	random = Math.floor((Math.random() * 100) + 1);
	document.getElementById("num").value = "";
	document.getElementById("msg").innerHTML = "";
}

function adivinar() {
	var newWindow, jugar;
	num = parseInt(document.getElementById('num').value);


	if(num==random){
		newWindow = window.open("", "MsgWindow");
		newWindow.document.write("<h1>¡Enhorabuena, has acertado el número!</h1>");
		newWindow.document.write("<button id='jugar'>Jugar otra vez</button>");
		jugar = newWindow.document.getElementById("jugar");
		jugar.onclick = function() {
			newWindow.close();
			aleatorio();
		}
	}else if (num < 1 || num > 100 ){
		document.getElementById('msg').innerHTML = "Introcude un número superior al 0 y menor a 101.";
	}else if (num > random){
		document.getElementById('msg').innerHTML = "Su número es mayor";
	}else if (num < random){
		document.getElementById('msg').innerHTML = "Su número es menor";
	}
}