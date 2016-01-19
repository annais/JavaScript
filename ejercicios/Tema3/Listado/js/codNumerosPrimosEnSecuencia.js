function comprobarPrimo(){
	var num = document.getElementById("num").value;
	var texto = document.getElementById("texto");

	if(num<1){
		texto.innerHTML = "Introduce un número superior al 0.";
	}else{
        texto.innerHTML = "Números primos entre el 1 y "+num+": ";
        for (var i = 1; i <= num; i++) {
            if (primo(i)){
        		texto.innerHTML += (i+",");
        	}
        }
    }
}

function primo(num){
    var primo=0;
    for(var i=0; i<num; i++){
        if(num%i==0 ){
            primo++;
        }
    }  
    if(primo==1){
        return true;
    }    
    else{
        return false;
    }     
}