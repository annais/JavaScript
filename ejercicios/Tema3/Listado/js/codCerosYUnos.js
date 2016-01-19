var cont = 0;

function calcular (){
	var num = parseInt(document.getElementById("numero").value);
	var texto = document.getElementById("texto");

	if(validarDatos(/^[0-2]+$/.test(num))){
		texto.innerHTML = "";
		if(num == 2){
			texto.innerHTML = "Son "+cont+" introducidos.";
		}else if(num == 0){
			cont++;
		}
	}else{
		texto.innerHTML = "Introduce un número valido.(0-2)";
	}

}


function validarDatos(resultado){
    if (resultado) {
    	return true;
    }else{
        return false;
   	}
}