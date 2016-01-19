function comprobarDecenas(){
	var num = document.getElementById("num").value;
	var texto = document.getElementById("texto");

	if(num<1 || num>10){
		texto.innerHTML = "Introduce un número entre 1-10."; 
	}else{
		num = num.split(".");
		if (num.length-1 == 0) {
			texto.innerHTML = "El número no tiene decimales.";
		}else{
			texto.innerHTML = "El número contiene "+num[1].length+" decimales y al reves se ve asi "+num.reverse();
		}
	}
}

function validarDatos(resultado){
    if (resultado) {
    	return true;
    }else{
        return false;
   	}
}