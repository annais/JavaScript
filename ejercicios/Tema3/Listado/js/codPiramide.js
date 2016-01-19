window.onload = function (){
	var piramide = document.getElementById("texto");

	for (var i = 1; i <= 10; i++) {
		for (var j = 1; j <= i; j++) {
			if(i == 10){
				piramide.innerHTML += 0;
			}else{
				piramide.innerHTML += i;
			}
		}
		piramide.innerHTML += "</br>";
	}
}