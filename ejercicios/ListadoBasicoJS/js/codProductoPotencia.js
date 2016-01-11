/*<p>This text contains <sup>superscript</sup> text.</p>*/

/*Implementa ProductoPotencias que calcule y visualice el producto de las potencias de 2 entre 0 y 10. */

window.addEventListener("load", function(){
	potencias();
});


function potencias(){
	var msg="", sol=1;
	for(var i=0;i<=10;i++){
		for(var j=0;j<i;j++){
			sol = sol *(2*2);
		}
		msg = msg + "2<sup>"+i+"</sup> = "+sol+" </br>";
		sol=1;
	}
	document.getElementById("msg").innerHTML = msg;

}