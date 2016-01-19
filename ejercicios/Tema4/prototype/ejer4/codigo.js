String.prototype.truncar = function (tam, indicador){

	if(indicador == undefined){
		indicador = "";
	}

	if(this.length>tam){
		return this.substring(0, tam)+indicador;
	}

	return this;
}

var cadena = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.";
alert(cadena.truncar(50, '...'));
alert(cadena.truncar(50));