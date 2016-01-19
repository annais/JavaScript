function comprobarPrimo(){
	var num = document.getElementById("num").value;
	var texto = document.getElementById("texto");

	if(num<1){
		texto.innerHTML = "Introduce un número superior al 0."
	}else if (primo(num)){
		texto.innerHTML = "Su número es primo";
	}else{
		texto.innerHTML = "Su número no es primo";
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