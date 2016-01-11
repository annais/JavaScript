/*Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a mayor.*/

window.addEventListener("load", function(){
	var boton = document.getElementById("enviar");
	var etiquetas = ["num0","num1","num2"];
	var numeros = new Array();

	boton.addEventListener("click", function(){
		for (var i = 0; i < etiquetas.length; i++){
			numeros[i] = document.getElementById(etiquetas[i]).value;
		}
		OrdenaTres(numeros);
	});
});

function OrdenaTres(numeros){
	var comprobacion = [false,false,false];
	var msg = document.getElementById("msg");
	var mensaje ="";

	if(numeros[0]!="" & numeros[1]!="" & numeros[2]!=""){
		if (numeros[0] <= numeros[2] & numeros[0] <= numeros[1]){
			mensaje += numeros[0].toString()+"-";
			comprobacion[0] = true;
		}else if(numeros[1] <= numeros[2] & numeros[1] <= numeros[0]){
			mensaje += numeros[1].toString()+"-";
			comprobacion[1] = true;
		}else if(numeros[2] <= numeros[0] & numeros[2] <= numeros[1]){
			mensaje += numeros[2].toString()+"-";
			comprobacion[2] = true;
		}

		if((numeros[1] <= numeros[0] & numeros[1] >= numeros[2]) || (numeros[1] <= numeros[2] & numeros[1] >= numeros[0])){
			mensaje += numeros[1].toString()+"-";
			comprobacion[1] = true;
		}else if ((numeros[0] <= numeros[1] & numeros[0] >= numeros[2]) || (numeros[0] <= numeros[2] & numeros[0] >= numeros[1])){
			mensaje += numeros[0].toString()+"-";
			comprobacion[0] = true;
		}else if((numeros[2] <= numeros[0] & numeros[2] >= numeros[1]) || (numeros[2] <= numeros[1] & numeros[2] >= numeros[0])){
			mensaje += numeros[2].toString()+"-";
			comprobacion[2] = true;
		}

		if(numeros[0] == numeros[2] & numeros[0] != numeros[1]){
			comprobacion[2]=true;
		}else if (numeros[0] == numeros[1] & numeros[0] != numeros[2]){
			comprobacion[1]=true;
		}

		for(var i=0; i<3; i++){
			if(!comprobacion[i]){
				mensaje += numeros[i];
			}
		}

	}else{
		mensaje += "Le falta introducir algún número. ";
	}
	
	msg.innerHTML = mensaje;
}