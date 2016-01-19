function getWindows(){
	var ventanas = [5];

	for (var i = 1; i <= 5; i++) {
		mensaje = "<title>Ventana "+i+"</title><script type='text/javascript' src='codigo.js'></script><p>Ventana "+i+"<button onclick='closeWindow()'>Cerrar</button></p>";
		ventanas[i] = window.open("", "", "width=200, height=200");
		ventanas[i].document.write(mensaje);
	};
}

function closeWindow(){
	window.close();
}