window.addEventListener("load", function(){
	var abrir = document.getElementById("abrir");	
	var ventana;
	var mensaje;

	abrir.addEventListener("click", function(){
		mensaje = '<!DOCTYPE html>'+
			'<html>'+
				'<head>'+
					'<meta charset="UTF-8">'+
					'<title>Ventana de prueba</title>'+
					'<script type="text/javascript" src="codVentana.js"></script>'+
				'</head>'+
				'<body>'+
					'<p>Se han utilizado las propiedades:</p>'+
					'<ul><li>'+
						'height=200</li>'+
						'<li>width=200'+
					'</li></ul>'+
					'<button id="cerrar">Cerrar</button>'+
				'</body>'+
			'</html>';
		ventana = window.open("","", "width=200, height=200, top="+0+", left="+0);
		ventana.document.open();
		ventana.document.write(mensaje);
		ventana.document.close();
		
	});
	
});