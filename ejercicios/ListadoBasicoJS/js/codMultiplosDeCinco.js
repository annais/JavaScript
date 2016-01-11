/* Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de 5.*/

window.addEventListener("load", function(){
	var boton = document.getElementById("enviar");
	var etiquetas = ["num0","num1","num2","num3","num4","num5","num6"];
	var numeros = new Array();

	boton.addEventListener("click", function(){
		for (var i = 0; i < etiquetas.length; i++){
			numeros[i] = document.getElementById(etiquetas[i]).value;
		}
		MultiplosDeCinco(numeros);
	});
});

function MultiplosDeCinco(numeros){
	var msg = document.getElementById("msg");
	var mensaje ="";

	for (i = 0; i < numeros.length; i++){
		if(numeros[i]!=""){
			if ((numeros[i]%5)==0){
				mensaje += "El "+numeros[i].toString()+" es multiplo de 5.<br>";
			}else{
				mensaje += "El "+numeros[i].toString()+" no es multiplo de 5.<br>";
			}
		}
	}
	msg.innerHTML = mensaje;
}