function Cliente (nombre, apellidos, direccion) {
	this.nombre = nombre;
	this.apellidos = apellidos;
	this.direccion = direccion;

	this.mostrarNombre = function(){
		alert(nombre);
	}

	this.mostrarApellidos = function(){
		alert(apellidos);
	}

	this.mostrarDireccion = function(){
		alert(direccion);
	}
}

function Elemento(descripcion, precio){
	this.descripcion = descripcion;
	this.precio = precio;

	this.mostrarDescripcion = function(){
		alert(descripcion);
	}

	this.mostrarPrecio = function(){
		alert(precio);
	}
}

function Factura (cliente, elementos) {
	this.cliente = cliente;
	this.elementos = elementos;

	this.mostrarCliente = function(){
		alert(cliente);
	}

	this.mostrarElementos = function(){
		for (var i = 0; i < elementos.length; i++) {
			alert(elementos[i]);
		};
	}
}

Factura.prototype.empresa = {
  nombre:    "Nombre de la empresa",
  direccion: "Direccion de la empresa",
  telefono:  "900900900",
  nif:       "XXXXXXXX"
}

Factura.prototype.calculaTotal = function() {
	var total = 0;
  	for(var i=0; i<this.elementos.length; i++) {
  		total += parseInt(this.elementos[i].precio);
     }
  return total;
}

Factura.prototype.muestraTotal = function() {
  alert("TOTAL = " + this.calculaTotal()+ " euros");
}

var elCliente = new Cliente("Cliente 1", "", "", "");
var losElementos = [new Elemento("elemento1", "5"),
                    new Elemento("elemento2", "12"),
                    new Elemento("elemento3", "42")
                   ];
var laFactura = new Factura(elCliente, losElementos);
laFactura.muestraTotal();


