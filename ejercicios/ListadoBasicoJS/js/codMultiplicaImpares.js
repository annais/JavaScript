/*Implementa MultiplicaImpares que multiplique los 20 primeros números impares y muestre el resultado en pantalla.*/
window.addEventListener("load", function(){
	var sol=1;
	for(var i=1; i<=20 ;i++){
		if(i%2==0){
			sol = i*sol;
		}
	}
	document.getElementById("msg").innerHTML="Solucion: "+sol;
});