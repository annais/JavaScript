/*Implenta NumerosPrimosEnSecuencia que pida un número e indique cuántos números primos existen entre el 1 y dicho número.*/

function numeroPrimo(){
    var numeros = "";
	var num = parseInt(document.getElementById('num').value);

    if(num>1){
        for (var i = 1; i <= num; i++) {
            if(primo(i)){
                numeros = numeros + i + ",";
            }
        }

        document.getElementById("msg").innerHTML = "Números primos entre el 1 y el "+num+": "+numeros;
    }else if (num==1){
        document.getElementById("msg").innerHTML = "El número 1 no es primo";
    }else{
        document.getElementById("msg").innerHTML = "Introduce un número superior al 0.";
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