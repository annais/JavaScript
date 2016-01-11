
(function (){
	window.addEventListener("load", function (){
		var nombre = document.getElementById("nombre");
		var apellidos = document.getElementById("apellidos");
		var telefono = document.getElementById("telefono");
		var fecha = document.getElementById("fecha");
		var email = document.getElementById("email");
		var dni = document.getElementById("dni");
		var ncuenta = document.getElementById("ncuenta");
		var curriculum = document.getElementById("curriculum");
		var button = document.getElementById("enviar").addEventListener("click", validarCampos);
		
		nombre.addEventListener("blur", function(){
			if(!validarTexto(this,"Nombre")){
				this.focus();
			}
		});

		apellidos.addEventListener("blur", function(){
			if(!validarTexto(this,"Apellidos")){
				this.focus();
			}
		});

		telefono.addEventListener("blur", function(){
			if(!validarTelefono(this)){
				this.focus();
			}
		});

		fecha.addEventListener("blur", function(){
			if(!validarFecha(this)){
				this.focus();
			}
		});

		email.addEventListener("blur", function(){
			if(!validarEmail(this)){
				this.focus();
			}
		});

		dni.addEventListener("blur", function(){
			if(!validarDNI(this)){
				this.focus();
			}
		});

		ncuenta.addEventListener("blur", function(){
			if(!validarCuentaBancaria(this,true)){
				this.focus();
			}
		});

		curriculum.addEventListener("blur", function(){
			if(!validarURL(this)){
				this.focus();
			}
		});

	});

	function validarCampos(){
		var objFocus;

		if(!validarURL(curriculum)){
			objFocus = curriculum;
		}

		if(!validarCuentaBancaria(ncuenta)){
			objFocus = ncuenta;
		}

		if(!validarDNI(dni)){
			objFocus = dni;
		}

		if(!validarEmail(email)){
			objFocus = email;
		}

		if(!validarFecha(fecha)){
			objFocus = fecha;
		}

		if(!validarTelefono(telefono)) {
			objFocus = telefono;
		}

		if(!validarTexto(apellidos,"Apellidos")){
			objFocus = apellidos;
		}

		if(!validarTexto(nombre,"Nombre")){
			objFocus = nombre;
		}

		objFocus.focus();	
	}

	function validarTexto(objeto, texto, blur){
		var span;

		if(texto=="Nombre"){
			span = document.getElementById("enombre");
		}else{
			span = document.getElementById("eapellidos");
		}
		
		if(!(comprobarTexto(objeto.value))){
			return msgError(objeto,span,texto,false);
		}else{
			return msgError(objeto,span,texto,true);
		}
	}

	function validarTelefono(objeto){
		var span = document.getElementById("etelefono");
		if(!(comprobarTlf(objeto.value))){
			return msgError(objeto,span,"Telefono",false);
		}else{
			return msgError(objeto,span,"Telefono",true);
		}
	}

	function validarFecha(objeto){
		var span = document.getElementById("efecha");
		if(!(comprobarFecha(objeto.value))){
			return msgError(objeto,span,"Fecha",false);
		}else{
			return msgError(objeto,span,"Fecha",false);
		}
	}

	function validarEmail(objeto){
		var span = document.getElementById("eemail");
		if(!(comprobarCorreo(objeto.value))){
			return msgError(objeto,span,"Email",false);
		}else{
			return msgError(objeto,span,"Email",true);
		}
	}

	function validarDNI(objeto){
		var span = document.getElementById("edni");
		if(comprobarDNI(objeto.value)){
			return msgError(objeto,span,"DNI",true);
		}else{
			return msgError(objeto,span,"DNI",false);
		}
	}

	function validarCuentaBancaria(objeto){
		var span = document.getElementById("encuenta");

	    if (!(comprobarCuentaBancaria(objeto.value))){
	       return msgError(objeto,span,"Numero",false);
	    }else{
	       return msgError(objeto,span,texto,true);
	    }
	}

	function validarURL(objeto){
		var span = document.getElementById("ecurriculum");
		if(!(comprobarURL(objeto.value))){
			return msgError(objeto,span,"URL",false);
		}else{
			return msgError(objeto,span,"URL",true);
		}
	}

	function msgError(objeto, span, texto, bien){
		if(bien){
			objeto.className="";
			span.innerHTML = "";
			return true;
		}else{
			objeto.className="error";
			span.innerHTML = texto+" no válido.";
			return false;
		}
	}


	//funciones de comprobación

	function comprobarTexto(valor){
		return /^[a-zA-Z]+$/.test(valor);
	}

	function comprobarTlf(valor){
		return /^[9678]\d{8}$/.test(valor);
	}

	function comprobarFecha(valor){
		var arrayFecha= valor.split("/");
		var dia = parseInt(arrayFecha[0]);
		var	mes = parseInt(arrayFecha[1])-1;
		var	ano = parseInt(arrayFecha[2]);
		var	fecha = new Date(ano, mes, dia);

		if((/^[\d]{2}(\/|-){1}[\d][\d](\/|-){1}[\d]{4}$/.test(valor)) && (pattern.test(fecha.value)) && (dia==fecha.getDate())){
			return true;
		}else{
			return false;
		}
	}

	function comprobarCorreo(valor){
		return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor));
	}

	function comprobarDNI(valor){
		var letras = ['T','R','W','A','G','M','Y','F','P','D','X', 'B','N','J','Z','S','Q','H','L','C','K','E','T'];
		
		if((/^\d{8}[a-zA-Z]$/.test(valor)) && (valor.toUpperCase().charAt(8) == letras[(valor.substring(0, 8)%23)])){
			return true;
		}else{
			return false;
		}
	}

	function comprobarCuentaBancaria(valor){
		return /^[0-9]{20}$/.test(valor);
	}

	function comprobarURL (valor) {
		return /^((http|https)\:\/\/)?(www.)?[a-z0-9\.-]+\.[a-z]{2,4}/.test(valor);
	}

})();