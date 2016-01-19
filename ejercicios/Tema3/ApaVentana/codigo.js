function getWindow(){
	var ventana = window.open("", "", "width=200, height=200");
	ventana.document.write("<p>Se han utilizado las propiedades:</p><ul><li>height=200</li><li>width=200</li></ul>");
}