$(function() {
	//nav
	$("a").click(function(){
	    $("a").each(function() {
		  $( this ).removeClass( "activa" );
		});
		$(this).addClass( "activa" );
		$('#ponentes').removeClass( "activa" );
		$('#registro').removeClass( "activa" );
	});

	//dialogo cookies
    if(!navigator.cookieEnabled){
    	$('#dialog-message').css('visibility','visible');
    	$( "#dialog-message" ).dialog({
	      modal: true,
	      buttons: {
	        Ok: function() {
	          $( this ).dialog( "close" );
	        }
	      }
	    });
	}
	//login
	$('#loginButton').mouseup(function(login) {
        $('#loginBox').toggle();
        $(this).toggleClass('active');
    });

	//boton entrar login
	$('#login').click(function(){
		var user = document.getElementById('email').value.trim();
		var password = document.getElementById('password').value.trim();
		var euser = document.getElementById('euser');
		var ekey = document.getElementById('ekey');
		var eruser = 'Minimo 6 caracteres sin espacios.';
		var erkey = 'Minimo 6 caracteres sin espacios.';
		var expUser = new RegExp('^[a-zA-ZñÑáéíóúÁÉÍÚÓ0-9\S]{6,}$');
		var expKey = new RegExp('^[a-zA-ZñÑáéíóúÁÉÍÚÓ0-9\S/./_/-]{6,}$');
		
		var userr = validarText(user,euser,eruser,expUser, 'euser');
		var passwordd = validarText(password.trim(),ekey,erkey,expKey, 'ekey');

		if(userr && passwordd){
			$('#loginContainer').css('visibility','hidden');
			$('#loginContainer').css('display','none');
			$('#registrado').css('visibility','visible');
			$('#registrado').css('display','block');
			$('#rPone').removeClass( "oculto" );
			$('#rActi').removeClass( "oculto" );
		}
	});

	$('#registrado').click(function(){
		$('#loginContainer').css('visibility','visible');
		$('#loginContainer').css('display','block');
		$('#registrado').css('visibility','hidden');
		$('#registrado').css('display','none');
		$('#rPone').addClass( "oculto" );
		$('#rActi').addClass( "oculto" );
	});

	//listado ponentes
	$('#pLis').click(function(){
		$('#ponentes').addClass( "activa" );
		var texto = '<div id="tabs">'
		  +'<ul>'
		    +'<li><a href="#tabs-1">Todos los alumnos</a></li>'
		    +'<li><a href="#tabs-2">DAW</a></li>'
		    +'<li><a href="#tabs-3">ASIR</a></li>'
		  +'</ul>'
		  +'<div id="tabs-1">'
			+'<table style="width:100%" class="tablaPon">'
			  +'<tr class="prifila">'
			    +'<td>Actividad</td>'
			    +'<td>Ponente</td>'
			  +'</tr>'
			  +'<tr>'
			    +'<td>Desarrollo seguro de aplicaciones C/C++ en Android con NDK</td>'
			    +'<td>José Ignacio Álvarez Ruiz.</td>'
			  +'</tr>'
			  +'<tr>'
			    +'<td>Un día de consultoría en Sopinet Software, de lo técnico a lo espiritual.</td>'
			    +'<td>Fernando Hidalgo.</td> '
			  +'</tr>'
			  +'<tr>'
			    +'<td>Hiren´s Boot una Herrarmienta para dominarlas todas.</td>'
			    +'<td>Alumnos de 2º ASIR.</td> '
			  +'</tr>'
			  +'<tr>'
			    +'<td>Orientación profesional y las tecnologías del futuro.</td>'
			    +'<td>Juan Jose Rider Jimenez.</td> '
			  +'</tr>'
			  +'<tr>'
			    +'<td>Hackeando una Web como un profesional.</td>'
			    +'<td>Miguel Ángel Arroyo Moreno.</td> '
			  +'</tr>'
			  +'<tr>'
			    +'<td>Introducción al marketing digital.</td>'
			    +'<td>Miguel Ángel López Torralba.</td> '
			  +'</tr>'
			  +'<tr>'
			    +'<td>El futuro del trabajo.</td>'
			    +'<td>Miguel Ángel Calero Fernández.</td> '
			  +'</tr>'
			  +'<tr>'
			    +'<td>Organízate en el trabajo y con los clientes.</td>'
			    +'<td>Miguel Ángel López Torralba.</td> '
			  +'</tr>'			  
			  +'<tr>'
			    +'<td>Diseña, prototipa y desarrolla (sin morir en el intento).</td>'
			    +'<td>Claudia López Iglesias, Álvaro Serrano García.</td> '
			  +'</tr>'			  
			  +'<tr>'
			    +'<td>Taller iniciación a three.js.</td>'
			    +'<td>Álvaro Serrano García.</td> '
			  +'</tr>'			  
			  +'<tr>'
			    +'<td>Desarrollo Web Seguro.</td>'
			    +'<td>Juan Antonio Cubero y Pedro J. Ramos.</td> '
			  +'</tr>'			  
			  +'<tr>'
			    +'<td>Arduino, introducción a la Robótica.</td>'
			    +'<td>Ezequiel Torres Sánchez.</td> '
			  +'</tr>'			  
			  +'<tr>'
			    +'<td>Experiencias de montaje de una Impresora 3D casera.</td>'
			    +'<td>Ezequiel Torres Sánchez.</td> '
			  +'</tr>'			  
			  +'<tr>'
			    +'<td>Realidad Aumentada.</td>'
			    +'<td>Manuel Jiménez y su alumnado del IES Tierno Galván.</td> '
			  +'</tr>'
			+'</table></p>'
		  +'</div>'
		  +'<div id="tabs-2">'
		    +'<table style="width:100%" class="tablaPon">'
			  +'<tr class="prifila">'
			    +'<td>Actividad</td>'
			    +'<td>Ponente</td>'
			  +'</tr>'
			  +'<tr>'
			    +'<td>Charla-Taller de Ionic + AngularJS.</td>'
			    +'<td>JRafael Terán.</td>'
			  +'</tr>'
			  +'<tr>'
			    +'<td>Introducción a APIs REST y API de Twitter.</td>'
			    +'<td>Antonio León Alcaide.</td> '
			  +'</tr>'			  
			  +'<tr>'
			    +'<td>Taller iniciación a three.js.</td>'
			    +'<td>Álvaro Serrano García.</td> '
			  +'</tr>'	
			+'</table></p>'
			+' </div>'
		 +' <div id="tabs-3">'
			+'<table style="width:100%" class="tablaPon">'
			  +'<tr class="prifila">'
			    +'<td>Actividad</td>'
			    +'<td>Ponente</td>'
			  +'</tr>'
			  +'<tr>'
			    +'<td>Sanidad, Sistemas y cintas de vídeo.</td>'
			    +'<td>Raúl Valentín.</td>'
			  +'</tr>'	
			+'</table></p>'
		+'</div>'
		+'</div>';

		$('#cuadro').html(texto);

		$( "#tabs" ).tabs({
	      event: "mouseover"
	    });
	});


	//registro
	$('#rAsi').click(function(){
		$('#registro').addClass( "activa" );
		var texto = '<h2>Registro Asistente</h2>'
			+'<form>'
				+'<div id="izquierda">'
					+'<label>Nombre:	</label></br>'
					+'<label>Apellidos: </label></br>'
					+'<label>DNI: </label></br>'
					+'<label>Correo: </label></br>'
					+'<label>Procedencia: </label></br>'
				+'</div>'
				+'<div>'
					+'<input id="nombre" class="inputform" type="text" name="firstname">'
					+'<input id="apellidos" class="inputform" type="text" name="lastname">'
					+'<input id="dni" class="inputform" type="text" name="dni">'
					+'<input id="correo" class="inputform" type="email" name="correo">'
					+'<input id="procedencia" class="inputform" type="text" name="procedencia"></br>'
					+'<input id="enviar" class="buttonAsi" type="button" value="Enviar">'
				+'</div>'
				+'<div>'
					+'<span id="enombre"></span></br>'
					+'<span id="eapellidos"></span></br>'
					+'<span id="edni"></span></br>'
					+'<span id="ecorreo"></span></br>'
					+'<span id="eprocedencia"></span></br>'
				+'</div>'
			+'</form>';
		$('#cuadro').html(texto);

		document.getElementById('enviar').addEventListener('click', function(){
			var nombre = document.getElementById('nombre').value;
			var apellidos = document.getElementById('apellidos').value;
			var dni = document.getElementById('dni').value;
			var correo = document.getElementById('correo').value;
			var procedencia = document.getElementById('procedencia').value;

			//variables errores
			var enombre = document.getElementById('enombre');
			var eapellidos = document.getElementById('eapellidos');
			var edni = document.getElementById('edni');
			var ecorreo = document.getElementById('ecorreo');
			var eprocedencia = document.getElementById('eprocedencia');

			//errores
			var ernom = 'El nombre solo puede contener letras y espacios.';
			var erape = 'Los apellidos solo puede contener letras y espacios.';
			var erdni = 'Formato DNI 00000000Z';
			var ercor = 'Formato Correo nombre@servidor.dominio';
			var erpro = 'La procedencia solo puede contener letras, espacios y números.';

			//expresiones regulares
			var expcomun = new RegExp('[a-zA-ZñÑáéíóúÁÉÍÚÓ]+');
			var expgeneral = new RegExp('[a-zA-ZñÑáéíóúÁÉÍÚÓ0-9]+');
			var expdni = new RegExp('[0-9]{8}[a-zA-Z]');
			var expcor = new RegExp('[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}');

			//validaciones
			validarText(nombre.trim(),enombre,ernom,expcomun, 'enombre');
			validarText(apellidos.trim(),eapellidos,erape,expcomun, 'eapellidos');
			validarText(dni.trim(),edni,erdni,expdni, 'edni');
			validarText(correo.trim(),ecorreo,ercor,expcor, 'ecorreo');
			validarText(procedencia.trim(),eprocedencia,erpro,expgeneral, 'eprocedencia');
		});
	});

	function validarText(valor,vError,error,expReg,nomError){
		vError.innerHTML = '';
		if(!expReg.test(valor)){
			$('#'+nomError).css('color','red');
			vError.innerHTML = error;
			return false;
		}else{
			$('#'+nomError).css('color','green');
			vError.innerHTML = 'correcto';
			return true;
		}
	}

	$('#rPon').click(function(){
		$('#registro').addClass( "activa" );
		var texto = '<h2>Registro Ponente</h2>'
			+'<form>'
				+'<div id="izquierda">'
					+'<label>Nombre:	</label></br>'
					+'<label>Apellidos: </label></br>'
					+'<label>Procedencia: </label></br>'
					+'<label>Posibilidad de patrocinio: </label></br>'
					+'<label>Fecha: </label></br>'
					+'<label>Obserbaciones: </label></br>'
				+'</div>'
				+'<div>'
					+'<input id="nombre" class="inputform" type="text" name="firstname">'
					+'<input id="apellidos" class="inputform" type="text" name="lastname">'
					+'<input id="procedencia" class="inputform" type="text" name="procedencia">'
					+'<div id="radios"><input type="radio" name="patrocinio" value="no" checked><label>No</label>'
  					+'<input type="radio" name="patrocinio" value="si"><label>Si</label></div>'
					+'<input id="datepicker" type="text" readonly>'
					+'<input id="datepicker2" type="text" readonly>'
					+'<textarea name="comentarios" rows="5" cols="30" placeholder="Escribe aquí tus obserbaciones"></textarea></br>'
					+'<input id="enviar" class="buttonAsi" type="button" value="Enviar">'
				+'</div>'
				+'<div>'
					+'<span id="enombre"></span></br>'
					+'<span id="eapellidos"></span></br>'
					+'<span id="eprocedencia"></span></br>'
					+'<span id="efecha"></span></br>'
				+'</div>'
			+'</form>';
		$('#cuadro').html(texto);

		//calendario
		 $.datepicker.regional['es'] = {
			 closeText: 'Cerrar',
			 prevText: '<Ant',
			 nextText: 'Sig>',
			 currentText: 'Hoy',
			 monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
			 monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
			 dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
			 dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
			 dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
			 weekHeader: 'Sm',
			 dateFormat: 'dd-mm-yy',
			 firstDay: 1,
			 isRTL: false,
			 showMonthAfterYear: false,
			 yearSuffix: ''
		 };
		 $.datepicker.setDefaults($.datepicker.regional['es']);

		$( "#datepicker" ).datepicker({
	      changeMonth: false,
	      numberOfMonths: 1,
	      minDate: new Date(2016,00,25),
	      maxDate: new Date(2016,00,29),
	      onClose: function( selectedDate ) {
	      	if(selectedDate){
	        	$( "#datepicker2" ).datepicker( "option", "minDate", selectedDate);
	    	}
	      }
	    });

	    $( "#datepicker2" ).datepicker({
	      changeMonth: true,
	      numberOfMonths: 1,
	      minDate: new Date(2016,00,25),
	      maxDate: new Date(2016,00,29),
	      onClose: function( selectedDate ) {
	      	if(selectedDate){
	        	$( "#datepicker" ).datepicker( "option", "maxDate", selectedDate);
	      	}
	     }
	    });

		$( "#datepicker" ).datepicker( "option", "showAnim", "drop" );
		$( "#datepicker2" ).datepicker( "option", "showAnim", "drop" );

		document.getElementById('enviar').addEventListener('click', function(){
			var nombre = document.getElementById('nombre').value;
			var apellidos = document.getElementById('apellidos').value;
			var fecha = document.getElementById('datepicker').value;
			var procedencia = document.getElementById('procedencia').value;

			//variables errores
			var enombre = document.getElementById('enombre');
			var eapellidos = document.getElementById('eapellidos');
			var efecha = document.getElementById('efecha');
			var eprocedencia = document.getElementById('eprocedencia');

			//errores
			var ernom = 'El nombre solo puede contener letras y espacios.';
			var erape = 'Los apellidos solo puede contener letras y espacios.';
			var erfecha = 'Debes elegir una fecha.';
			var erpro = 'La procedencia solo puede contener letras, espacios y números.';

			//expresiones regulares
			var expcomun = new RegExp('[a-zA-ZñÑáéíóúÁÉÍÚÓ]+');
			var expgeneral = new RegExp('[a-zA-ZñÑáéíóúÁÉÍÚÓ0-9]+');

			//validaciones
			validarText(nombre.trim(),enombre,ernom,expcomun, 'enombre');
			validarText(apellidos.trim(),eapellidos,erape,expcomun, 'eapellidos');
			validarText(procedencia.trim(),eprocedencia,erpro,expgeneral, 'efecha');
			validarText(fecha.trim(),efecha,erfec,expgeneral, 'eprocedencia');
		});
	});

	$('#rAct').click(function(){
		$('#registro').addClass( "activa" );
		var texto = '<h2>Registro Actividad</h2>'
			+'<form>'
				+'<div id="izquierda">'
					+'<label>Nombre de la actividad:	</label></br>'
					+'<label>Descripción breve: </label></br>'
					+'<label>Descripción extensa: </label></br>'
					+'<label>URL de una imagen png: </label></br>'
					+'<label>Material requerido para el ponente: </label></br>'
					+'<label>Material requerido para los asistentes: </label></br>'
					+'<label>Número de asistentes recomendados: </label></br>'
				+'</div>'
				+'<div>'
					+'<input id="nombre" class="inputform" type="text" name="nombre">'
					+'<input id="desBreve" class="inputform" type="text" name="desBreve">'
					+'<textarea id="desExtensa" name="descripcion" rows="5" cols="30" placeholder="Escribe aquí tus descripción extensa"></textarea></br>'
					+'<input id="urlimg" class="inputform" type="url" name="imagen">'
					+'<textarea name="materiales" rows="5" cols="30" placeholder="Material requerido para el ponente"></textarea></br>'
					+'<textarea name="materialesAsi" rows="5" cols="30" placeholder="Material requerido para los asistentes"></textarea></br>'
					+'<select>'
					  +'<option value="indefinido">Indefinido</option>'
					  +'<option value="me50"><50</option>'
					  +'<option value="me100"><100</option>'
					  +'<option value="me150"><150</option>'
					  +'<option value="ma150">>150</option>'
					+'</select></br>'
					+'<input id="enviar" class="buttonAsi" type="button" value="Enviar">'
				+'</div>'
				+'<div>'
					+'<span id="enombre"></span></br>'
					+'<span id="edbreve"></span></br>'
					+'<span id="edextensa"></span></br>'
					+'<span id="eurl"></span></br>'
				+'</div>'
			+'</form>';
		$('#cuadro').html(texto);

		document.getElementById('enviar').addEventListener('click', function(){
			var nombre = document.getElementById('nombre').value;
			var desBreve = document.getElementById('desBreve').value;
			var desExtensa = document.getElementById('desExtensa').value;
			var urlimg = document.getElementById('urlimg').value;

			//variables errores
			var enombre = document.getElementById('enombre');
			var edbreve = document.getElementById('edbreve');
			var edextensa = document.getElementById('edextensa');
			var eurl = document.getElementById('eurl');

			//errores
			var ernom = 'El nombre solo puede contener letras, espacios y números.';
			var erdes = 'La descripción solo puede contener letras, espacios y números.';
			var erurl = 'Formato URL Imagen .';

			//expresiones regulares
			var expurl = new RegExp('(http?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?[.png]');
			var expgeneral = new RegExp('[a-zA-ZñÑáéíóúÁÉÍÚÓ0-9]+');

			//validaciones
			validarText(nombre.trim(),enombre,ernom,expgeneral,'enombre');
			validarText(desBreve.trim(),edbreve,erdes,expgeneral, 'edbreve');
			validarText(desExtensa.trim(),edextensa,erdes,expgeneral, 'edextensa');
			validarText(urlimg.trim(),eurl,erurl,expurl, 'eurl');
		});
	});
	
});
