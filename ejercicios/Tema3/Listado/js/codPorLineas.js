window.onload = function (){
	var texto = document.getElementById("texto");

	for (var i = 0; i <= 100; i++) {
		if((i%7)==0){
			texto.innerHTML += "</br>";
		}
		texto.innerHTML += i+",";
	}
}
