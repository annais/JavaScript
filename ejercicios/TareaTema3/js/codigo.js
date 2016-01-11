var nombre, datos;
var dia, mes, año, años;
var ventana;
var fechaA = new Date();
var fecha = new Date();
var numeros = [65, 22, 69, 99, 12];

function mostrar(){
	nombre = document.getElementById("nombre").value;
	dia = document.getElementById("dia").value;
	mes = document.getElementById("mes").value;
	año = document.getElementById("año").value;
	años = fechaA.getFullYear()-año;
	fecha = new Date(año,dia,mes);
	datos = "Buenos dias "+nombre+"</br>Tu nombre tiene "+nombre.length+" caracteres, incluidos espacios.</br>La primera letra "+nombre.substr(0,1)+" de tu nombre está en la posición: "+nombre.indexOf(nombre.substr(0,1))+"</br>La última letra "+nombre.substr(nombre.length-1,1)+" de tu nombre está en la posición:"+ nombre.lastIndexOf(nombre.substr(nombre.length,1))+"</br> Tu nombre menos las 3 primeras letras es: "+nombre.slice(3)+"</br>Tu nombre todo en mayúsculas es: "+ nombre.toLocaleUpperCase()+"</br>Tu edad es: "+años+" años.<br>Naciste un feliz "+dia+"/"+mes+" del año "+año+". No te acuerdas, pero era "+diaSemana()+" y "+bisiesto()+" bisiesto<br>El coseno de 90 es: "+ Math.cos(90)+"<br>El número mayor de (65, 22, 69, 99, 12) es: "+numeros.sort()+"<br>Ejemplo de número al azar entre 1 y 10: "+Math.floor((Math.random() * 10) + 1);+"<br>";

	ventana = window.open("", "Datos");
	ventana.document.write(datos);

	window.open("http://www.iesgrancapitan.org/portal/", "iesgrancapitan","width=800, height=600");
}

function diaSemana(){
	var diaSem = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
	return diaSem[fecha.getDay()];
}

function bisiesto(){
	if((fecha.getFullYear()%4==0) && (fecha.getFullYear() % 100 != 0) || (fecha.getFullYear() % 400 == 0)){
		return "Si";
	}else{
		return "No";
	}
}