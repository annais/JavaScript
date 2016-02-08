(function(){
	window.addEventListener("load",function(){
		document.getElementById("crear").addEventListener("click",crear);
		document.getElementById("limpiar").addEventListener("click",limpiar);

		if(document.cookie!=""){
			document.getElementById("nombre").value = getCookie('nombre');
			document.getElementById("apellido1").value = getCookie('apellido1');
			document.getElementById("apellido2").value = getCookie('apellido2');
			document.getElementById("fnacimiento").value = getCookie('fnacimiento');
		}

		function Universitario(nombre, apellido1, apellido2, fnacimiento) {
			this.nombre = nombre;
			this.apellido1 = apellido1;
			this.apellido2 = apellido2;
			this.fnacimiento = fnacimiento;	
			
			Universitario.prototype.mostrar = function(){
			 	var mensaje = '<p>'+nombre+'</p>';
			 	mensaje += '<p>'+apellido1+'</p>';
			 	mensaje += '<p>'+apellido2+'</p>';
			 	mensaje += '<p>'+fnacimiento+'</p>';
			 	mensaje += '<p>'+calcularEdad(fnacimiento)+'</p>';

				ventana = window.open("","", "width=200, height=200, top="+0+", left="+0);
				ventana.document.open();
				ventana.document.write(mensaje);
				ventana.document.close();
			}	
		}

		function crear(){
			var nombre = document.getElementById("nombre").value;
			var apellido1 = document.getElementById("apellido1").value;
			var apellido2 = document.getElementById("apellido2").value;
			var fnacimiento = document.getElementById("fnacimiento").value;
			var aceptar = document.getElementById("aceptar").checked;

			if((nombre != "") && (apellido1!= "") && (apellido2!= "") && (fnacimiento!= "")){
				if(comprobarFecha(fnacimiento)){
					if(aceptar){
						var uni = new Universitario (nombre,apellido1,apellido2,fnacimiento);
						document.getElementById("error").innerHTML = "";
						//crear cookies
						setCookie("nombre",nombre,50);
						setCookie("apellido1",apellido1,50);
						setCookie("apellido2",apellido2,50);
						setCookie("fnacimiento",fnacimiento,50);

						uni.mostrar();
					}else{
						document.getElementById("error").innerHTML = 'Porfavor aceptar los terminos.';
					}
				}else{
					document.getElementById("error").innerHTML = 'Su fecha es erronea, porfavor mira si su fecha tiene el siguiente formato (00/00/0000)';
				}
			}else{
				document.getElementById("error").innerHTML = 'Porfavor introduzca todos los datos.';
			}
		}

		function comprobarFecha(fecha){
			var newFecha = fecha.split("/");
			var dia = parseInt(newFecha[0]);
			var mes = parseInt(newFecha[1]-1);
			var ano = parseInt(newFecha[2]);
			var fecha = new Date(ano, mes, dia);
			if(fecha.getDate() == dia && fecha.getMonth() == mes && fecha.getFullYear() == ano){
				return true;
			}
			return false;
		}

		function calcularEdad(fecha){
			var newFecha = fecha.split("/");
			var dia = parseInt(newFecha[0]);
			var mes = parseInt(newFecha[1])-1;
			var ano = parseInt(newFecha[2]);
			var fecha = new Date(ano, mes, dia);
			var fechaActual = new Date();
			var edadMils = parseInt(fechaActual - fecha);
			var edad = new Date(0, 0, 1, 0, 0, 0, edadMils);
			return edad.getYear() + " años, " + edad.getMonth() + " meses,  " + (edad.getDate()-1) + " dias.";
		}

		function limpiar(){
			var nombre = document.getElementById("nombre").value = "";
			var apellido1 = document.getElementById("apellido1").value = "";
			var apellido2 = document.getElementById("apellido2").value = "";
			var fnacimiento = document.getElementById("fnacimiento").value = "";
			var aceptar = document.getElementById("aceptar").checked = false;
		}

		function setCookie(name, value, exdays) {
		    var d = new Date();
		    d.setTime(d.getTime() + (exdays*24*60*60*1000));
		    var expires = "expires="+d.toUTCString();
		    document.cookie = name + "=" + value + "; " + expires;
		}

		function getCookie(dato) {
		    var name = dato + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0; i<ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') {
		        	c = c.substring(1);
		        }
		        if (c.indexOf(name) == 0){
		        	return (c.substring(name.length, c.length));
		        } 
		    }
		    return "";
		}

		function eliminarCookie(dato){
			document.cookie = dato+"=; expires=Thu, 18 Dec 2013 12:00:00 UTC";
		}
		
	});
})();
