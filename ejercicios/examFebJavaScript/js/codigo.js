(function(){
	window.addEventListener('load', function(){
		var nombre = document.getElementById('nombre');
		var apellidos = document.getElementById('apellidos');
		var dni = document.getElementById('dni');
		var sexo = document.getElementById('sexo');
		var aceptar = document.getElementById('aceptar');
		var errora = document.getElementById('errora');
		var errord = document.getElementById('errord');
		var errorn = document.getElementById('errorn');
		var errorc = document.getElementById('errorc');
		document.getElementById('crear').addEventListener('click', crear);
		document.getElementById('limpiar').addEventListener('click', limpiar);
		var edni = 'Por favor sigue el patron del DNI: 00000000X.';
		var enom = 'Por favor el nombre solo puede contener Letras, Numeros, Giones y Subrallado y un tamaño minimo de 4 digitos.';
		var eape = 'Por favor rellene el campo.';
		var eche = 'Por favor acepte.';

		nombre.addEventListener('blur',function(){
			validar(nombre,errorn,enom,0);
		});

		dni.addEventListener('blur',function(){
			validar(dni,errord,edni,1);
		});

		apellidos.addEventListener('blur',function(){
			validar(apellidos,errora,eape,2);
		});

		aceptar.addEventListener('blur',function(){
			validar(aceptar,errorc,eche,3);
		});

		function Usuario(nombre, apellidos, dni, sexo){
			this.nombre = nombre;
			this.apellidos = apellidos;
			this.dni = dni;
			this.sexo = sexo;

			Usuario.prototype.mostrar = function (){
				var info = document.getElementById('info');
				info.innerHTML = '<p>'+nombre+', '+apellidos+' '+dni+' '+sexo+'</p>';
			}

			Usuario.prototype.crearListItem =function (){
				var mensaje = nombre+', '+apellidos+' '+dni+' '+sexo; 
				var ul = document.getElementById('lista');
				var li = document.createElement('li');
				li.appendChild(document.createTextNode(mensaje));
				ul.appendChild(li);
			}
		}

		function crear (){

			var nombreC = validar(nombre,errorn,enom,0);
			var apellidosC = validar(apellidos,errora,eape,2);
			var dniC = validar(dni,errord,edni,1);
			var aceptarC = validar(aceptar,errorc,eche,3);

			if(nombreC && apellidosC && dniC && aceptarC){
				var user = new Usuario(nombre.value,apellidos.value,dni.value,sexo.value);
				user.mostrar();
				user.crearListItem();
				setCookie('nombre',nombre.value);
				setCookie('apellidos',apellidos.value);
				setCookie('dni',dni.value);
				setCookie('sexo',sexo.value);
			}
		}

		function validar(variable,vError,error,tipo){
			var correcto = false;
			var datos = variable.value;
			datos = datos.trim();

			if((tipo!=3 && datos!='') || (tipo==3 && variable.checked)){
				switch(tipo){
					case 0:
						if(datos.length>3 && /\d*[a-zA-ZñÑáéíóúÁÉÍÚÓ]+/.test(datos)){
							correcto = true;
						}
						break;
					case 1:
						if(/^\d{8}[a-zA-Z]$/.test(datos)){
							correcto = true;
						}
						break;
					case 2:
						correcto = true;
						break;
					case 3:
						correcto = true;
						break;
				}
			}

			if(!correcto){
				vError.innerHTML = error;
			}else{
				vError.innerHTML = '';
			}

			return correcto;
		}

		function setCookie(name, value) {
		    var d = new Date();
		    d.setTime(d.getTime() + (50*24*60*60*1000));
		    var expires = "expires="+d.toUTCString();
		    document.cookie = name + "=" + value + "; " + expires;
		}
		
		function eliminarCookie(dato){
			document.cookie = dato+"=; expires=Thu, 18 Dec 2013 12:00:00 UTC";
		}

		function eliminarCookies(dato){
			eliminarCookie('apellidos');
			eliminarCookie('sexo');
			eliminarCookie('dni');
			eliminarCookie('nombre');
		}

		function limpiar(){
			document.getElementById('nombre').value = '';
			document.getElementById('apellidos').value = '';
			document.getElementById('dni').value = '';
			document.getElementById('aceptar').checked = false;
			document.getElementById('errora').innerHTML = '';
			document.getElementById('errord').innerHTML = '';
			document.getElementById('errorn').innerHTML = '';
			document.getElementById('errorc').innerHTML = '';
			var p = document.getElementById('info').getElementsByTagName('p');
			if(p.length>0){
				document.getElementById('info').removeChild(p[0]);
			}
		
			eliminarCookies();
		}

	});
})();