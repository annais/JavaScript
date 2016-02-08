(function(){
	window.addEventListener("load",function(){
		var doc = document.documentElement.lastChild;

		//borrar primera p
		var ps = document.documentElement.lastChild.getElementsByTagName('p');
		doc.removeChild(ps[0]);

		//crear una nueva p con mi nombre
		var p = document.createElement('p');
		p.appendChild(document.createTextNode('Anais'));

		//insertar la nueva p delante de la p "Nombre del autor"
		ps = document.documentElement.lastChild.getElementsByTagName('p');
		doc.insertBefore(p,ps[0]);

		//crear una nueva p con mis apellidos e insertarla detras de la p "Apellidos del autor"
		p = document.createElement('p');
		p.appendChild(document.createTextNode('Jiménez Higuera'));
		doc.appendChild(p);

	});
})();