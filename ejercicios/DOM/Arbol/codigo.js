window.addEventListener("load",function(){
	var doc = document.documentElement;
	var info = document.getElementById("info");
	info.innerHTML = '<p>Para haceder al elemento html, se usa document.documentElement</p></br>';

	doc.lastChild.innerHTML += 'lastChild</br>';
	
	console.log(doc.childNodes[0]);
	
	doc.lastChild.innerHTML += 'Nodos del body: '+document.getElementsByTagName('body')[0].childNodes.length+'.</br>';
	
	document.lastChild.innerHTML += '<p>Hola a todos</p>';

	var p = document.createElement('p');
	p.innerHTML = "jola";
	document.getElementById('info').appendChild(p);
	document.getElementById('info').removeChild(p);

	var ul = document.createElement('ul');
	ul.setAttribute('id','lista');
	document.getElementsByTagName('body')[0].appendChild(ul);
	var li = document.getElementsByTagName('ul')[0].appendChild(document.createElement('li'));
	li.appendChild(document.createTextNode('Anais'));
	var nuevo = document.getElementById('lista')
    var segundo = document.getElementById('info');
	document.getElementsByTagName('body')[0].insertBefore(nuevo,segundo);
});
