function comprobar(){
	var texto = document.getElementById("texto");
	var dia = parseInt(document.getElementById("dia").value);
	var mes = parseInt(document.getElementById("mes").value);
	var ano = parseInt(document.getElementById("ano").value);
	var fecha = new Date(ano, mes, dia);
	var diaDeLaSemana = fecha.getDay();

	if (dia == fecha.getDate() && mes == fecha.getMonth()){
		texto.innerHTML = "Fecha válida.<br/> El día de la semana es " + obtenerDiaSemana(diaDeLaSemana) + ".";	
	}else {
		texto.innerHTML = "Fecha no válida.";
	}
}

function obtenerDiaSemana(dia) {
	switch (dia) {
		case 0:
			return "Domingo";
			break;
		case 1:
			return "Lunes";
			break;
		case 2:
			return "Martes";
			break;
		case 3:
			return "Miércoles";
			break;
		case 4:
			return "Jueves";
			break;
		case 5:
			return "Viernes";
			break;
		case 6:
			return "Sábado";
			break;
	}
}