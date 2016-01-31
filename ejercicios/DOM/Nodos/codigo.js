window.addEventListener("load",function(){
	var doc = document.getElementById("info");
	doc.innerHTML = '</br>Con document.childNodes.length nos muestra los nodos del documento : '+document.childNodes.length+' que seria head y body, porque no profundiza.';
});