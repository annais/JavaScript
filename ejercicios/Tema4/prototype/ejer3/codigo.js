Array.prototype.anadir = function (elemento, duplicado) {	
	var salir = false;

	if(duplicado == undefined){
		duplicado = true;
	}

	if(duplicado){
		this[this.length] = elemento;
	}else{
		for (var i = 0; i < this.length; i++) {
			if(this[i]==elemento){
				salir = true;
			}
		}

		if(!salir){
			this[this.length] = elemento;
		}
	}
}

var array1 = [0, 1, 2];
array1.anadir(2);
alert(array1);

var array2 = [0, 1, 2];
array2.anadir(2, true);
alert(array2);
 
var array3 = [0, 1, 2];
array3.anadir(2, false);
alert(array3);