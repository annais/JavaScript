window.onload = function() {

	var texto = document.getElementById("texto");

	for (var i = 100; i >= 0; i-=7) {
		texto.innerHTML += (i+",");
	};
}