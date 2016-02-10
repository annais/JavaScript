$(document).ready(function(){
	$("a").each(function(i){
		var titulo = $(this).attr("title");
		alert("Atributo title del enlace " + i + ": " + titulo);
	});
	/*$('a').attr({
		'title': 'Title modificado por jQuery',
		'href': 'http://www.desarrolloweb.com',
		'style': 'color: #f80'
	}); */
});