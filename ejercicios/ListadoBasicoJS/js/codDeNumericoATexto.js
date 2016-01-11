/*Implementa DeNumericoATexto que solicite un número del 0 al 99 y lo muestre escrito. 
Por ejemplo, para 12 mostrar: doce, para 44 mostrar: cuarenta y cuatro. Que sea lo más eficiente posible.*/

var numeros = ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce","quince","dieciseis","diecisiete","dieciocho","diecinueve"];
var num2 = ["cero","diez","beinte","treina","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];
var nume;
var num = 0;

window.addEventListener("load", function(){
	var boton = document.getElementById("enviar");

	boton.addEventListener("click", function(){
		num = parseInt(document.getElementById("num").value);
		DeNumericoATexto();
	});
});

function DeNumericoATexto(){
	if(num>-1 && num<100){
		if(num<20){
			document.getElementById("msg").innerHTML = numeros[num];
		}else{
			nume = num.toString();
			if(nume.substr(1,1)!="0"){
				document.getElementById("msg").innerHTML = num2[nume.substr(0,1)] + " y " + numeros[nume.substr(1,1)];
			}else{
				document.getElementById("msg").innerHTML = num2[nume.substr(0,1)];
			}
		}
	}else{
		document.getElementById("msg").innerHTML = "Introduce un número entre el 0 y el 99";
	}
}