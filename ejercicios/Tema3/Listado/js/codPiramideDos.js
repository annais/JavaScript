window.onload = function (){
	var piramide = document.getElementById("texto");

	for (var i = 1; i <= 10; i++) {
		for (var j = 1; j <= i; j++) {
			if(j == 10){
				piramide.innerHTML += 0;
			}else{
				piramide.innerHTML += j;
			}
		}
		piramide.innerHTML += "</br>";
	}
}