/*Implenta NumeroPrimo que pida un número e indique si es primo o no.*/

function numeroPrimo(){
	var num = parseInt(document.getElementById('num').value);

    if(num<1){
        document.getElementById("msg").innerHTML = "Introduce un número superior al 0.";
	}else if (primo(num)){
		document.getElementById('msg').innerHTML = "Su número es primo";
	}else{
		document.getElementById('msg').innerHTML = "Su número no es primo";
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