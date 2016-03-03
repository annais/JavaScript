$(function() {

	function caruselInicio(){
		var texto = '<div id="carusel">'
				+'<h2>Carteles de la Sysmana</h2>'
		      +'<a class="example-image-link" href="img/cartelsysmana2011.jpg" data-lightbox="example-set" data-title="Cartel Sysmana 2011.">'
		      	+'<img class="example-image" src="img/cartelsysmana2011.jpg" alt=""/></a>'
		      +'<a class="example-image-link" href="img/cartelsysmana2012.jpg" data-lightbox="example-set" data-title="Cartel Sysmana 2012.">'
		      	+'<img class="example-image" src="img/cartelsysmana2012.jpg" alt="" /></a>'
		      +'<a class="example-image-link" href="img/cartelsysmana2013.jpg" data-lightbox="example-set" data-title="Cartel Sysmana 2013.">'
		      	+'<img class="example-image" src="img/cartelsysmana2013.jpg" alt="" /></a>'
		      +'<a class="example-image-link" href="img/cartelsysmana2014.jpg" data-lightbox="example-set" data-title="Cartel Sysmana 2014.">'
		      	+'<img class="example-image" src="img/cartelsysmana2014.jpg" alt="" /></a>'
		      +'<a class="example-image-link" href="img/cartelsysmana2015.png" data-lightbox="example-set" data-title="Cartel Sysmana 2015.">'
		      	+'<img class="example-image" src="img/cartelsysmana2015.png" alt="" /></a>'
		      +'<a class="example-image-link" href="img/cartelsysmana2016.png" data-lightbox="example-set" data-title="Cartel Sysmana 2016.">'
		      	+'<img class="example-image" src="img/cartelsysmana2016.png" alt="" /></a>'
		    +'</div>';
		$('#cuadro').html(texto);
	}

	caruselInicio();

	$('#inicio').click(function(){
		caruselInicio();
	});

	$('#pLis').click(function(){
		var texto = '<div id="accordion">'
		+'</div>';
		$('#cuadro').html(texto);
	});

	$('#actividades').click(function(){

		var texto = "<h2>Lunes</h2>"
		+"<div class='accordion'>"
			+"<h3 title='Herramienta para hacer cambios y comprobaciones en el sistema.'>Hiren's Boot una Herrarmienta para dominarlas todas. (2h)</h3>"
			+"<p>Asistentes: Todos los alumnos</br>"
			+"Ponentes: Alumnos de 2º ASIR.</br>"
			+"Hora de inicio: 9:15h (2ª hora)</br>"
			+"Lugar: Talleres 112 y 114.</br>"
			+"Que cada asistente se lleve su portátil.<img src='img/Miguel.jpg'></p>"
			
			+"<h3 title='Crear aplicaciones móviles con tecnologías web'>Charla-Taller de Ionic + AngularJS (2h)</h3>"
			+"<p>Asistentes: DAW</br>"
			+"Ponente: Rafael Terán (Salmorejo Software)</br>"
			+"Hora de inicio: 12:40h (5ª hora)</br>"
			+"Lugar: Taller 116.</br>"
			+"Que cada asistente se lleve su portátil.<img src='img/RafaelTerán.png'></p>"
		+"</div>"
		+"<h2>Martes</h2>"
		+"<div class='accordion'>"
			+"<h3 title='Seguridad de aplicaciones C/C++ en Android'>Desarrollo seguro de aplicaciones C/C++ en Android con NDK(1h)</h3>"
			+"<p>Asistentes: 2DAW, 2ASIR</br>"
			+"Ponentes: José Ignacio Álvarez Ruiz.(Redsys).</br>"
			+"Hora de inicio: 8:15h (1ª hora)</br>"
			+"Lugar: Taller 112.<img src='img/JoséIgnacioÁlvarezRuiz.jpg'></p>"
			
			+"<h3 title='Experiencia laboral'>Un día de consultoría en Sopinet Software, de lo técnico a lo espiritual. (1h)</h3>"
			+"<p>Asistentes: Todos los alumnos</br>"
			+"Ponente: Fernando Hidalgo (Sopinet)</br>"
			+"Hora de inicio: 9:15h (2ª hora)</br>"
			+"Lugar: Taller 116.<img src='img/Fernando.jpg'></p>"

			+"<h3 title='El emprendedor tecnológico'>Orientación profesional y las tecnologías del futuro.</h3>"
			+"<p>Breaking Back': el emprendedor tecnológico. </br>"
			+"Orientación profesional y las tecnologías del futuro (Hologramas, Google Glass...)</br>"
			+"Asistentes: Todos los alumnos</br>"
			+"Ponente: Juan Jose Rider Jimenez (WUL4)</br>"
			+"Hora de inicio: 10:15h (3ª hora)</br>"
			+"Lugar: SUM.<img src='img/JuanJose.jpg'></p>"

			+"<h3 title='Intrusiones en WEb'>Hackeando una Web como un profesional (1:30h)</h3>"
			+"<p>Asistentes: Todos los alumnos</br>"
			+"Ponente: Miguel Ángel Arroyo Moreno (SVTCloud)</br>"
			+"Hora de inicio: 11:40h (4ª hora)</br>"
			+"Lugar: SUM.<img src='img/Fernando.jpg'></p>"

			+"<h3 title='Experiencia laboral'>El futuro del trabajo.</h3>"
			+"<p>Asistentes: Todos los alumnos</br>"
			+"Ponente: Miguel Ángel Calero Fernández (coSfera)</br>"
			+"Hora de inicio: 13:40h (6ª hora)</br>"
			+"Lugar: SUM.<img src='img/Fernando.jpg'></p>"
		+"</div>"
		+"<h2>Miercoles</h2>"
		+"<div class='accordion'>"
			+"<h3 title='Sanidad, Sistemas y cintas de vídeo'>Sanidad, Sistemas y cintas de vídeo (1h)</h3>"
			+"<p>Asistentes: ASIR</br>"
			+"Ponentes: Raúl Valentín.</br>"
			+"Hora de inicio: 10:15h (3ª hora)</br>"
			+"Lugar: Taller 112.<img src='img/RaúlV.jpg'></p>"
			
			+"<h3 title='Marqueting Digital'>Introducción al marketing digital (1h)</h3>"
			+"<p>Asistentes: Todo el alumnado</br>"
			+"Ponente: Miguel Ángel López Torralba</br>"
			+"Hora de inicio: 11:40h (4ª hora)</br>"
			+"Lugar: SUM.<img src='img/Miguel.jpg'></p>"

			+"<h3 title='Concurso de SEO'>II Concurso Posicionamiento SEO (0:15h)</h3>"
			+"<p>Entrega de premios</br>"
			+"Lugar: SUM.<img src='img/seo.jpg'></p>"
			
			+"<h3 title='Como abordar los proyectos y como comunicarnos con los clientes'>Organízate en el trabajo y con los clientes (1:10h)</h3>"
			+"<p>Asistentes: Todo el alumnado</br>"
			+"Ponente: Miguel Ángel López Torralba</br>"
			+"Hora de inicio: 12:55h (5ª hora)</br>"
			+"Lugar: SUM.<img src='img/Miguel.jpg'></p>"
		+"</div>"
		+"<h2>Jueves</h2>"
		+"<div class='accordion'>"
			+"<h3 title='Libreria JavaScript 3D'>Taller iniciación a three.js (3h)</h3>"
			+"<p>Asistentes: DAW</br>"
			+"Ponentes: Álvaro Serrano García</br>"
			+"Hora de inicio: 8:15h (1ª hora)</br>"
			+"Lugar: Taller 116.</br>"
			+"Que cada asistente se lleve su portátil.<img src='img/ÁlvaroSerranoGarcía.jpg'></p>"
			
			+"<h3 title='Como diseñar nuestra aplicaciones'>Diseña, prototipa y desarrolla (sin morir en el intento) (0:45h)</h3>"
			+"<p>Asistentes: Todo el alumnado</br>"
			+"Ponente: Álvaro Serrano García Y Claudia López Iglesias</br>"
			+"Hora de inicio: 11:40h (4ª hora)</br>"
			+"Lugar: SUM.<img src='img/Miguel.jpg'></p>"
			
			+"<h3 title='Como desarrollar un Web segura'>Desarrollo Web Seguro (1h)</h3>"
			+"<p>Asistentes: Todo el alumnado</br>"
			+"Ponente: Ponentes: Juan Antonio Cubero y Pedro J. Ramos (alumnos 2ºDAW)</br>"
			+"Hora de inicio: 12:40h (5ª hora)</br>"
			+"Lugar: SUM.<img src='img/Miguel.jpg'></p>"
		+"</div>"
		+"<h2>Viernes</h2>"
		+"<div class='accordion'>"
			+"<h3 title='Adruino'>Arduino, introducción a la Robótica (1:30h)</h3>"
			+"<p>Asistentes: Todo el alumnado</br>"
			+"Ponentes: Ezequiel Torres Sánchez (miembro precursor del aula de Robótica de la UCO)</br>"
			+"Hora de inicio: 8:15h (1ª hora)</br>"
			+"Lugar: SUM.<img src='img/ezequiel.jpg'></p>"
			
			+"<h3 title='Funcionamiento y montaje de impresora 3D'>Experiencias de montaje de una Impresora 3D casera (1:30h)</h3>"
			+"<p>Asistentes: Todo el alumnado</br>"
			+"Ponente: Ezequiel Torres Sánchez</br>"
			+"Hora de inicio: 9:45h (mitad 2ª hora)</br>"
			+"Lugar: SUM.<img src='img/ezequiel.jpg'></p>"
			
			+"<h3 title='Realidad Aumentada'>Realidad Aumentada (2h)</h3>"
			+"<p>Asistentes: Todo el alumnado</br>"
			+"Ponente: Ponentes: Manuel Jiménez y su alumnado del IES Profesor Tierno Galván (Sistemas Microinformáticos y Redes)</br>"
			+"Hora de inicio: 11:40h (4ª hora)</br>"
			+"Lugar: SUM y talleres.</br>"
			+"Que cada asistente se lleve su portátil y su móvil<img src='img/Miguel.jpg'></p>"

			+"<h3 title='APIs REST y API de Twitter'>Introducción a APIs REST y API de Twitter (1h)</h3>"
			+"<p>Asistentes: DAW</br>"
			+"Ponente: Ponentes: Antonio León Alcaide (SocialBro)</br>"
			+"Hora de inicio: 13:40h (6ª hora)</br>"
			+"Lugar: Taller 116.</br>"
			+"Que cada asistente se lleve su portátil.<img src='img/Miguel.jpg'></p>"
		+"</div>";

		$('#cuadro').html(texto);

		$(".accordion").accordion({
			active: false,
	      	collapsible: true,
	      	heightStyle: "content"
	    });

	    $( document ).tooltip({
	      position: {
	        my: "center bottom-20",
	        at: "center top",
	        using: function( position, feedback ) {
	          $( this ).css( position );
	          $( "<div>" )
	            .addClass( "arrow" )
	            .addClass( feedback.vertical )
	            .addClass( feedback.horizontal )
	            .appendTo( this );
	        }
	      }
	    });
	});
	
	$('#seo').click(function(){
		var texto = '<article id="artseo">'
			+'<h2 class="entry-title">II Concurso Posicionamiento SEO Sysmana IES Gran Capitán</h2>'	
			+'<div class="entry-content">'
				+'<p><strong>PRESENTACIÓN</strong><br />'
				+'Dentro de las actividades de la Sysmana 2016 se convoca el segundo concurso de posicionamiento SEO destinado a divulgar estas técnicas entre el alumnado de los ciclos formativos de informática del IES Gran Capitán de Córdoba.<br />'
				+'<span id="more-2625"></span><br />'
				+'<strong>OBJETIVO</strong><br />'
				+'Desarrollar un sitio web y lograr el mejor posicionamiento en Google España en castellano en el segmento de Web en general (http://www.google.es/webhp?hl=es&amp;tab=bw) para una palabra o palabras a posicionar, valorándose también la presentación y organización de los contenidos, número de visitantes reales, originalidad y diseño.</p>'
				+'<p><strong>INSCRIPCIÓN (REQUISITOS)</strong><br />'
				+'Podrán tomar parte en este concurso el alumnado matriculado en el curso 2015-2016 en los Ciclos Formativos de Grado Superior del IES Gran Capitán de Córdoba.</p>'
				+'<p>La participación será individual o en parejas.</p>'
				+'<p>La inscripción podrá realizarse hasta el día <strong>18 de diciembre</strong> de 2015 en <a href="https://docs.google.com/forms/d/1IKFlyH37iMZUMp2Hi7fk7OV8c7qpf-5-mtQi_O6b1tc/" target="_blank">este formulario</a>.<br />'
				+'La inscripción en el concurso supone la aceptación por parte de los participantes de las bases de la convocatoria.</p>'
				+'En la <a title="Moodle IES Gran Capitán" href="http://moodle.iesgrancapitan.org/course/view.php?id=6" target="_blank">plataforma virtual</a> se habilitará un curso con material relacionado con el posicionamiento web en buscadores.</p>'
				+'<p>Los participantes en el concurso deberán crear una web que utilizarán para posicionarse a partir del tema objeto. Las webs deberán crearse con motivo del concurso (incluyendo el dominio o subdominio con el que se participe) tras la comunicación de la palabra o palabras a posicionar, siendo, por lo tanto, nuevas y originales. El contenido de las webs deberá estar relacionado con el tema objeto del concurso.</p>'
				+'<p>La organización no asume ninguna responsabilidad por el contenido de las webs del concurso así como de los sitios enlazados desde éstas; además, no controla que entre ellos puedan aparecer sitios de Internet cuyos contenidos resulten ilícitos, ilegales, contrarios a la moral o a las buenas costumbres o inapropiados.</p>'
				+'<p>La organización del concurso no asume ninguna responsabilidad por las noticias e informaciones publicadas por los concursantes.</p>'
				+'<p>Los concursantes se abstendrán de incluir o enlazar contenidos difamatorios, racistas, obscenos, pornográficos, ofensivos, que promuevan el odio racial, étnico, religioso, homófobo o de género, de violencia explícita o incitación a la violencia y/o que afecten a la privacidad o derechos de la infancia.</p>'
				+'<p>Si durante el desarrollo del concurso se detectara la manipulación del sistema de votación, bien mediante la automatización de su emisión o bien mediante cualquier otra técnica de alteración de los resultados de forma “no natural”, la organización del concurso podrá expulsar del mismo al equipo que realizara dichas prácticas.</p>'
				+'<p>Los participantes asociarán una cuenta de Google Analytics a la web que creen para el concurso. Esta cuenta podrá ser accedida por la organización a lo largo del concurso.</p>'
				+'<p>Cualquier violación de estas condiciones supondrá la expulsión inmediata del concurso.</p>'
				+'<p>Durante Sysmana 2016 se realizará un captura de pantalla de la búsqueda del término a posicionar del término o términos a posicionar, siendo este el criterio principal de determinación de los ganadores del concurso.</p>'
				+'<p>El jurado se reserva la posibilidad de publicar resultados parciales antes de la fecha de finalización del concurso.</p>'
				+'<p>Se calcularán dos clasificaciones a partir de los siguientes criterios:</p>'
				+'<ul>'
				+'<li>El primero será definido por la búsqueda en Google del término a posicionar (teniendo sólo en cuenta los sitios participantes y sólo una página por sitio, la de mejor posición).</li>'
				+'<li>El segundo será definido por el total de visitas obtenido por cada web el día de la toma del captura y usando para ello la cuenta asociada de Google Analytics.</li>'
				+'</ul>'
				+'<p>Los 5 mejores clasificados para cada criterio pasarán a la siguiente fase, donde el jurado determinará el orden definitivo teniendo en cuenta la posición y aspectos tales como originalidad y diseño del sitio. La decisión del jurado será inapelable.</p>'
				+'<p><strong>JURADO</strong><br />'
				+'El jurado estará constituido por el profesorado del departamento de Informática del IES Gran Capitán.</p>'
				+'<p>La resolución del jurado, que será inapelable, se hará pública durante la Sysmana y posteriormente se difundirá a través de las redes sociales.</p>'
				+'<p><strong>PREMIOS</strong><br />'
				+'Se instituyen tres premios a determinar. En todo caso se tratará de premios simbólicos debido a las restricciones de presupuesto. Los premios podrán declararse desiertos por falta de participación. La entrega de los premios se llevará a cabo durante la Sysmana. Durante la entrega de los premios los ganadores expondrán las técnicas utilizadas para conseguir el objetivo del concurso.</p>'
				+'<p><strong>CALENDARIO Y PLAZOS DEL CONCURSO</strong><br />'
				+'El plazo de inscripción se abrirá al mismo tiempo que se publiciten las palabras clave a posicionar. La publicación de las palabras clave se realizará a través de las redes sociales <strong>a partir del día 3 de diciembre</strong> de 2015.</p>'
				+'<p>Los participantes deberán enviar, antes del día <strong>18 de diciembre</strong> de 2015 (incluido), el enlace de la web que hayan creado para el concurso.</p>'
				+'<p>El concurso finalizará en la Sysmana 2016 con la toma del pantallazo de los resultados de la búsqueda en Google y con el recuento del número de visitas a cada web a lo largo del concurso.</p>'
				+'<p><strong>Ganadores</strong><br/>'
				+'<table>'
				+'<tbody>'
				+'<tr>'
				+'<th style="text-align: center;">Posición</th>'
				+'<th style="text-align: center;">Página Web</th>'
				+'<th>Equipo</th>'
				+'</tr>'
				+'<tr>'
				+'<td style="text-align: center;">1ª (=)</td>'
				+'<td><a href="https://sysmana2016.wordpress.com/" target="_blank">https://sysmana2016.wordpress.com/</a></td>'
				+'<td>Polo</td>'
				+'</tr>'
				+'<tr>'
				+'<td style="text-align: center;">2ª (=)</td>'
				+'<td><a href="http://sysmana16.blogspot.com.es/">http://sysmana16.blogspot.com.es/</a></td>'
				+'<td>PJDAW</td>'
				+'</tr>'
				+'<tr>'
				+'<td style="text-align: center;">3ª (=)</td>'
				+'<td><a href="http://sysmana-2016.blogspot.com/" target="_blank">http://sysmana-2016.blogspot.com/</a></td>'
				+'<td>LechonesDevelopers</td>'
				+'</tr>'
				+'<tr>'
				+'<td style="text-align: center;">4ª (=)</td>'
				+'<td><a href="http://sysmana2016-grancapitan.blogspot.com/" target="_blank">http://sysmana2016-grancapitan.blogspot.com/</a></td>'
				+'<td>CAPITANSYSMANA2016</td>'
				+'</tr>'
				+'<tr>'
				+'<td style="text-align: center;">5ª (=)</td>'
				+'<td><a href="http://inforduna-sysmana2016.blogspot.com/" target="_blank">http://inforduna-sysmana2016.blogspot.com/</a></td>'
				+'<td>Duna</td>'
				+'</tr>'
				+'<tr>'
				+'<td style="text-align: center;">6ª (+3)</td>'
				+'<td><a href="http://sysmana2016.blogspot.com/" target="_blank">http://sysmana2016.blogspot.com/</a></td>'
				+'<td>SYSDAMO_16</td>'
				+'</tr>'
				+'<tr>'
				+'<td style="text-align: center;">7ª (-1)</td>'
				+'<td><a href="http://sysmana.blogspot.com/" target="_blank">http://sysmana.blogspot.com/</a></td>'
				+'<td>La élite lechona</td>'
				+'</tr>'
				+'<tr>'
				+'<td style="text-align: center;">8ª (-1)</td>'
				+'<td><a href="http://sysadminsysmana2016.blogspot.com/" target="_blank">http://sysadminsysmana2016.blogspot.com/</a></td>'
				+'<td> Ashbringer</td>'
				+'</tr>'
				+'<tr>'
				+'<td style="text-align: center;">9ª (-1)</td>'
				+'<td><a href="http://sysmana2016.honor.es/" target="_blank">http://sysmana2016.honor.es/</a></td>'
				+'<td>Curiosidades Sysmana 2016</td>'
				+'</tr>'
				+'<tr>'
				+'<td style="text-align: center;">10ª ()</td>'
				+'<td><a href="http://sysmana2016gcapitan.blogspot.com.es/" target="_blank">http://sysmana2016gcapitan.blogspot.com.es/</a></td>'
				+'<td>Moloko Team</td>'
				+'</tr>'
				+'<tr>'
				+'<td style="text-align: center;">10ª ()</td>'
				+'<td><a href="https://sysmana2016grancapitan.wordpress.com/" target="_blank">https://sysmana2016grancapitan.wordpress.com/</a></td>'
				+'<td>Los poderosos</td>'
				+'</tr>'
				+'<tr>'
				+'<td style="text-align: center;">10ª ()</td>'
				+'<td><a href="https://sysmana2016rincondeingwe.wordpress.com/" target="_blank">https://sysmana2016rincondeingwe.wordpress.com/</a></td>'
				+'<td>The Alone</td>'
				+'</tr>'
				+'<tr>'
				+'<td style="text-align: center;">10ª ()</td>'
				+'<td><a href="https://sysmana2016gc.wordpress.com/" target="_blank">https://sysmana2016gc.wordpress.com/</a></td>'
				+'<td>ComandoSEO</td>'
				+'</tr>'
				+'</tbody>'
				+'</table>'
				+'<p>&nbsp;</p>'
				+'<p>Desde aquí felicitamos a Francisco Javier Guerrero Molina y a David Peralvo Gómez del equipo Polo por conseguir acabar el concurso en  la primera posición.</p>'
			+'</div><!-- .entry-content -->'

		+'<footer class="entry-meta">'
			+'Esta entrada fue publicada en <a href="http://sisblog.iesgrancapitan.org/?cat=44" rel="category">SYSMANA</a>. Guarda el <a href="http://sisblog.iesgrancapitan.org/?p=2625" title="Enlace permanente a II Concurso Posicionamiento SEO Sysmana IES Gran Capitán" rel="bookmark">enlace permanente</a>.'
				+'</footer><!-- .entry-meta -->'
		+'</article>';
		$('#cuadro').html(texto);
	});

	$('#pGal').click(function(){
		$('#ponentes').addClass( "activa" );

		var texto = /*'<div id="botonesCarusel"><a class="botonCarusel" id="but_prev" href="#">PREV</a> <a class="botonCarusel" id="but_pause" href="#">PAUSE</a> <a class="botonCarusel" id="but_start" href="#">START</a> <a class="botonCarusel" id="but_next" href="#">NEXT</a> '
	    +'<div class="carousel-container">'
	    
	      +*/'<div id="carousel">'
	        +'<div class="carousel-feature">'
	         +' <a href="#"><img class="carousel-image" alt="Image Caption" src="img/ÁlvaroSerranoGarcía.jpg"></a>'
	          +'<div class="carousel-caption">'
	            +'<p>'
	              +'Álvaro Serrano García'
	            +'</p>'
	          +'</div>'
	        +'</div>'
	        +'<div class="carousel-feature">'
	          +'<a href="#"><img class="carousel-image" alt="Image Caption" src="img/AntonioL.jpg"></a>'
	          +'<div class="carousel-caption">'
	            +'<p>'
	              +'Antonio León Alcaide'
	            +'</p>'
	          +'</div>'
	        +'</div>'
	        +'<div class="carousel-feature">'
	          +'<a href="#"><img class="carousel-image" alt="Image Caption" src="img/Claudia.jpg"></a>'
	          +'<div class="carousel-caption">'
	            +'<p>'
	              +'Claudia López Iglesias'
	            +'</p>'
	          +'</div>'
	        +'</div>'
	        +'<div class="carousel-feature">'
	          +'<a href="#"><img class="carousel-image" alt="Image Caption" src="img/ezequiel.jpg"></a>'
	          +'<div class="carousel-caption">'
	            +'<p>'
	              +'Ezequiel Torres Sánchez'
	            +'</p>'
	          +'</div>'
	        +'</div>'
	        +'<div class="carousel-feature">'
	          +'<a href="#"><img class="carousel-image" alt="Image Caption" src="img/JoséIgnacioÁlvarezRuiz.jpg"></a>'
	          +'<div class="carousel-caption">'
	            +'<p>'
	              +'José Ignacio Álvarez Ruiz'
	            +'</p>'
	          +'</div>'
	        +'</div>'
	        +'<div class="carousel-feature">'
	          +'<a href="#"><img class="carousel-image" alt="Image Caption" src="img/JuanAntonioCubero.png"></a>'
	          +'<div class="carousel-caption">'
	            +'<p>'
	              +'Juan Antonio Cubero'
	            +'</p>'
	          +'</div>'
	        +'</div>'
	        +'<div class="carousel-feature">'
	          +'<a href="#"><img class="carousel-image" alt="Image Caption" src="img/Miguel.jpg"></a>'
	          +'<div class="carousel-caption">'
	            +'<p>'
	              +'Miguel Ángel López Torralba'
	            +'</p>'
	          +'</div>'
	        +'</div>'
	        +'<div class="carousel-feature">'
	          +'<a href="#"><img class="carousel-image" alt="Image Caption" src="img/miguel_angel.png"></a>'
	          +'<div class="carousel-caption">'
	            +'<p>'
	              +'Miguel Ángel Arroyo Moreno'
	            +'</p>'
	          +'</div>'
	        +'</div>'
	        +'<div class="carousel-feature">'
	          +'<a href="#"><img class="carousel-image" alt="Image Caption" src="img/Pedro.jpg"></a>'
	          +'<div class="carousel-caption">'
	            +'<p>'
	              +'Pedro J.Ramos'
	            +'</p>'
	          +'</div>'
	        +'</div>'
	         +'<div class="carousel-feature">'
	          +'<a href="#"><img class="carousel-image" alt="Image Caption" src="img/Rafael.png"></a>'
	          +'<div class="carousel-caption">'
	            +'<p>'
	              +'Rafael Terán'
	            +'</p>'
	          +'</div>'
	        +'</div>'
	        +'<div class="carousel-feature">'
	          +'<a href="#"><img class="carousel-image" alt="Image Caption" src="img/RaúlV.jpg"></a>'
	          +'<div class="carousel-caption">'
	            +'<p>'
	              +'Raúl Valentín'
	            +'</p>'
	          +'</div>'
	        +'</div>'
	        +'<div class="carousel-feature">'
	          +'<a href="#"><img class="carousel-image" alt="Image Caption" src="img/manuel.jpg"></a>'
	          +'<div class="carousel-caption">'
	            +'<p>'
	              +'Manuel Jiménez'
	            +'</p>'
	          +'</div>'
	        +'</div>'
	        +'<div class="carousel-feature">'
	          +'<a href="#"><img class="carousel-image" alt="Image Caption" src="img/MiguelÁngelCaleroFernández.jpg"></a>'
	          +'<div class="carousel-caption">'
	            +'<p>'
	              +'Miguel Ángel Calero Fernández'
	            +'</p>'
	          +'</div>'
	        +'</div>'
	        +'<div class="carousel-feature">'
	          +'<a href="#"><img class="carousel-image" alt="Image Caption" src="img/JuanJose.jpg"></a>'
	          +'<div class="carousel-caption">'
	            +'<p>'
	              +'Juan Jose Rider Jimenez'
	            +'</p>'
	          +'</div>'
	        +'</div>'
	        +'<div class="carousel-feature">'
	          +'<a href="#"><img class="carousel-image" alt="Image Caption" src="img/Fernando.jpg"></a>'
	          +'<div class="carousel-caption">'
	            +'<p>'
	              +'Fernando Hidalgo'
	            +'</p>'
	          +'</div>'
	        +'</div>'
	      +'</div>'
	    
	      +'<div id="carousel-left"><img src="img/arrow-left.png" /></div>'
	      +'<div id="carousel-right"><img src="img/arrow-right.png" /></div>'
	    +'</div>';
		$('#cuadro').html(texto);

		var carousel = $("#carousel").featureCarousel({
          // include options like this:
          // (use quotes only for string values, and no trailing comma after last option)
          // option: value,
          // option: value
        });

		$("#but_prev").click(function () {
          carousel.prev();
        });
        $("#but_pause").click(function () {
          carousel.pause();
        });
        $("#but_start").click(function () {
          carousel.start();
        });
        $("#but_next").click(function () {
          carousel.next();
        });
	});
});
