var multiplos, texto;

function comprobarMultiplo(){
	texto = document.getElementById("texto");
	texto.innerHTML = "De los números introducidos, estos son multiplos de 5: ";
	var numeros = ["numero0","numero1","numero2","numero4","numero5","numero6"];

	for (var i = 0; i < 7; i++) {
		numeros[i] = document.getElementById("numero"+i);
		compMultiploDeCinco(numeros[i].value);
	}

}

function compMultiploDeCinco(num){
	if((num%5)==0){
		texto.innerHTML += num+",";
	}
}
