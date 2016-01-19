function ordenarNumeros(){
	var comprobacion = [false,false,false];
	var texto = document.getElementById("texto");
	var mensaje ="";
	var numeros = [];

	for (var i = 0; i < 3; i++){
		numeros[i] = document.getElementById("num"+(i+1)).value;
	}

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
	
	texto.innerHTML = mensaje;

}