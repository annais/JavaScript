var random;

window.onload = function () {
	random = Math.floor((Math.random() * 100) + 1);
	document.getElementById("texto").innerHTML = "";
}

function adivinar(){
	var num = document.getElementById("numero");
	var texto = document.getElementById("texto");
	var ventana;

	if(validarDatos(/^[0-9]+$/.test(num.value))){
		num=parseInt(num.value);
		if(num>0 && num<=100){
			if(num == random){
				ventana = window.open();
				ventana.document.write("<p>Ganaste!!! Has acertado el número.</p><a href='adivinalo.html'><button type='button'>Volver a jugar</button><a>");
			}else{
				if(num<random){
					texto.innerHTML = "Su numero es menor";
				}else{
					texto.innerHTML = "Su numero es mayor";
				}
			}
		}else{
			texto.innerHTML = "Introduce un número entre el 1 y el 100";
		}
	}else{
		texto.innerHTML = "Introduce un número";
	}

}

function validarDatos(resultado){
    if (resultado) {
    	return true;
    }else{
        return false;
   	}
}