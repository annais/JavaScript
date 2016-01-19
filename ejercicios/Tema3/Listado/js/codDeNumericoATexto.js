function convertir(){
	var numeros = ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce","quince","dieciseis","diecisiete","dieciocho","diecinueve"];
	var num2 = ["cero","diez","beinte","treina","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];
	var num =  parseInt(document.getElementById("numero").value);
	var texto = document.getElementById("texto");
	var nume;

	if(num>-1 && num<100){
		if(num<20){
			texto.innerHTML = numeros[num];
		}else{
			nume = num.toString();
			if(nume.substr(1,1)!="0"){
				texto.innerHTML = num2[nume.substr(0,1)] + " y " + numeros[nume.substr(1,1)];
			}else{
				texto.innerHTML = num2[nume.substr(0,1)];
			}
		}
	}else{
		texto.innerHTML = "Introduce un número entre el 0 y el 99";
	}
}