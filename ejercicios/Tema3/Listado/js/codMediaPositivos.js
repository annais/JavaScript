var numeros = [];
var cont = 0;

function calcular(){
	var num = parseInt(document.getElementById("numero").value);

	if(num==0){
		if(numeros.length!=0){
			calcularMedia();
		}
	}else{
		numeros[cont] = num;
		cont++;
	}
}

function calcularMedia(){
	var sol = 0;

	for (var i = 0; i < numeros.length; i++) {
		sol += numeros[i];
	};

	sol = sol/numeros.length;

	document.getElementById("texto").innerHTML = sol;
}