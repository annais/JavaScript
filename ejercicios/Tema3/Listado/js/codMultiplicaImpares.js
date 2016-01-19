window.onload = function () {
	multImpares(20);
}

function multImpares(max){
	var sol = 1;

	for (var i = 1; i <= max; i++) {
		if ((i%2)!=0) {
			sol = sol*i;
		}
	}

	document.getElementById("texto").innerHTML = sol;
}