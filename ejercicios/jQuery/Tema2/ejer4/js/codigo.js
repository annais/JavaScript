
$("document").ready(function(){
	$("p").each(function(i){
		if(i%2==0){
			$(this).css("background-color", "#01A9DB");
		}else{
			$(this).css("background-color", "#A9E2F3");
		}
	});

});