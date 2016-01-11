/*. Implementa MuestraDelUnoAlN que pida un número entero y que muestre la
secuencia del 1 al número indicado. En caso de no poder generarse la secuencia
(menor que 1), que lo indique.*/

function mostrar() {
	var secuencia="";
	var num = parseInt(document.getElementById('num').value);

	if (num < 1){
		document.getElementById('msg').innerHTML = "Su número es menor a 1.";
	}else{
		for (var i=1; i <= num ;i++){
			secuencia = secuencia + i + ", ";
		}
		document.getElementById('msg').innerHTML = secuencia;
	}
}