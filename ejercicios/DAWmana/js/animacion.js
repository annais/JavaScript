$(function() {
	$('#pantalla').height($(document).height());
	$('#iesname').height($(window).height());

	setTimeout(function(){
		$('#bombilla').css('visibility','hidden')
		$('#iesname').css('visibility','hidden')
		$('#pantalla').slideUp()
		setTimeout(function(){
			$('nav').css('visibility','visible')
			$('#loginContainer').css('visibility','visible')
		}, 300);
		
	}, 8000);
});

