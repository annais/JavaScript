window.addEventListener("load", function(){
	var abrir = document.getElementById("abrir");	
	var ventanas = [];
	var mensaje;

	abrir.addEventListener("click", function(){
		for (var i = 1; i < 6; i++) {
				mensaje = '<!DOCTYPE html>'+
					'<html>'+
						'<head>'+
							'<meta charset="UTF-8">'+
							'<title>Ventana '+i+'</title>'+
							'<script type="text/javascript" src="codVentana.js"></script>'+
						'</head>'+
						'<body>'+
							'<p>Ventana '+i+'</p>'+
							'<button id="cerrar">Cerrar</button>'+
						'</body>'+
					'</html>';
			ventanas[i] = window.open("","", "width=200, height=200, top="+0+", left="+0);
			ventanas[i].document.open();
			ventanas[i].document.write(mensaje);
			ventanas[i].document.close();
		}
	});
	
});