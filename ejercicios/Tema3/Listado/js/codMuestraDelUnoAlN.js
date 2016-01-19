function mostrar(){
	var texto = document.getElementById("texto");
	var num = document.getElementById("numero").value;

	texto.innerHTML = "";
	if(num>0){
		for (var i = 1; i <= num; i++) {
			texto.innerHTML += (i+",");
		};
	}else{
		texto.innerHTML = "Introduce un número mayor a 0.";
	}
}