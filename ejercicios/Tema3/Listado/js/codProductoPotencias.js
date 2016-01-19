window.onload = function(){
	potencias();
};


function potencias(){
	var msg="", sol=1;

	for(var i=0;i<=10;i++){
		for(var j=0;j<i;j++){
			sol = sol *(2*2);
		}
		msg += "2<sup>"+i+"</sup> = "+sol+" </br>";
		sol=1;
	}
	
	document.getElementById("texto").innerHTML = msg;

}