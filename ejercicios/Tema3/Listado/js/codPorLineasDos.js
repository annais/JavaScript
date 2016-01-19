window.onload = function (){
	var texto = document.getElementById("texto");
	var num;

	for (var i = 0; i <= 100; i++) {
		num = (i+"").substr(-1,1);
		if(((i%7)==0) || (num==7)){
			texto.innerHTML += "</br>";
		}
		texto.innerHTML += i+",";
	}
}