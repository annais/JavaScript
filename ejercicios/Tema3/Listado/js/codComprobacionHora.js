function comprobar(){
	var min = parseInt(document.getElementById("min").value);
	var seg = parseInt(document.getElementById("seg").value);
	var hora = parseInt(document.getElementById("hora").value);
	var horas = new Date();

	if(comprobarHoras() && comprobarMinutos() && comprobarSegundos()){
		document.getElementById("texto").innerHTML= "Hora correcta. La hora más un segundo es " + horas.getHours() + ":" + horas.getMinutes() + ":" + horas.getSeconds();
	}else{
		document.getElementById("texto").innerHTML= "Hora incorecta correcta.";
	}

	function comprobarHoras(){
		horas.setHours(hora);
		if(hora == "" || hora != horas.getHours()) {
			return false;
		}
		return true;
	}

	function comprobarMinutos(){
		horas.setMinutes(min);
		if(min == "" || min != horas.getMinutes()) {
			return false;
		}
		return true;
	}

	function comprobarSegundos(){
		horas.setSeconds(seg);
		if(seg == "" || seg != horas.getSeconds()) {
			return false;
		}
		return true;
	}

}