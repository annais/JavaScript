$(function(){
			
		var contenido = $('#contenidos');
		var recursos = $('#recurso');
		var estados = $('#estados');

		recursos.val($(location).attr('href'));

		$('#enviar').on('click',function(){
			$.get(recursos.val()).done(function(data) {
				contenido.text(data);
				estados.text(estados.html() + 'Done\n');
			}).fail(function() {
				contenidos.text('Error! La página solicitada no se ha podido encontrar.');
				estados.text(estados.html() + 'Error\n');
			})
			.always(function() {
				estados.text(estados.html() + 'Finished\n');
			});	
		});

		$('#limpiar').on('click',function(){
			estados.text('');
		});
		
		 
});