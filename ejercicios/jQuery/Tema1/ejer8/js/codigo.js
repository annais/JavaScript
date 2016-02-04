$(document).ready(function(){
	
	$("#pilallamadas").click(function(event){
		event.preventDefault();
		$("#capa").fadeOut(1000, function(){
			$("#capa").css({'top': 300, 'left':200});
			$("#capa").fadeIn(1000);
		});
	});
	
});