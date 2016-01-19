function iniciar(){
    document.getElementById('generarUser').addEventListener('click', mostrarInput);
    document.getElementById('aleatorio').addEventListener('click', mostrarAleatorio);
    document.getElementById('suma').addEventListener('click', btnSumar);
    document.getElementById('resta').addEventListener('click', btnRestar);
    document.getElementById('trasponer').addEventListener('click', btnTrasponer);
    document.getElementById('multiplicar').addEventListener('click', btnMultiplicar);
    var numeros = document.getElementsByName('numeros');
    var filas, columnas;

    function ArrayMatematico(filas,columnas){
        this.filas=filas;
        this.columnas=columnas;
        this.matriz = new Array(filas);
        for (var i = 0; i < filas; i++) {
            this.matriz[i] = new Array(columnas);
        };

        this.generarAleatorio = function(){
        	for (var i = 0; i < filas; i++) {
                for (var j = 0; j < columnas; j++) {
                    this.matriz[i][j] = Math.random()*10+1;
                    this.matriz[i][j] = this.matriz[i][j].toFixed();
                };
            };
        }

        this.generarInput = function(){
            var hueco = document.getElementById("generarMatriz");
            hueco.innerHTML = "";

            for (var i = 0; i < this.filas; i++) {
                for (var j = 0; j < this.columnas; j++) {
                    hueco.innerHTML += '<input type="number" name="numeros" id="'+i+""+j+'">('+i+","+j+')'; 
                };
                hueco.innerHTML += "</br>";
            };

            hueco.innerHTML += "<button type='button' id='generar'>Generar</button>";
            document.getElementById('generar').addEventListener('click', mostrarGenerarUser);

        }

        this.generarResultados = function(operacion, m){
            switch (operacion){
                case 0:
                    return this.sumar();
                case 1:
                    return this.restar();
                case 2:
                    return this.trasponer(m);
                case 3:
                    return this.multiplicar();
            }
        }

        this.mostrar = function (){
            var cadena="";

            for (var i = 0; i < this.filas; i++) {
                for (var j = 0; j < this.columnas; j++) {
                    cadena += this.matriz[i][j]+" ";
                };
                cadena+="</br>";
            };
            return cadena;
        }

        this.sumar = function(){
            if (comprobarDimensiones(conteMatrices.m1,conteMatrices.m2)) {
                var m = conteMatrices.m1;
                var sol = new ArrayMatematico(m.filas,m.columnas);
                for (var i = 0; i < m.filas; i++) {
                    for (var j = 0; j < m.columnas; j++) {
                        sol.matriz[i][j] = parseInt(m.matriz[i][j]) + parseInt(conteMatrices.m2.matriz[i][j]);
                    };
                };
            return sol;
            }
        }

        this.restar = function(){
            if (comprobarDimensiones(conteMatrices.m1,conteMatrices.m2)) {
                var sol = new ArrayMatematico(filas,columnas);
                for (var i = 0; i < filas; i++) {
                    for (var j = 0; j < columnas; j++) {
                        sol.matriz[i][j] = parseInt(conteMatrices.m1.matriz[i][j]) - parseInt(conteMatrices.m2.matriz[i][j]);
                    };
                };
                return sol;
            }
        }

        this.multiplicar = function(){
            if (comprobarDimensiones(conteMatrices.m1,conteMatrices.m2)) {
                var sol = new ArrayMatematico(this.filas,this.columnas);
                for (var i = 0; i < this.filas; i++) {
                    for (var j = 0; j < this.columnas; j++) {
                        sol.matriz[i][j] = parseInt(conteMatrices.m1.matriz[i][j]) * parseInt(conteMatrices.m2.matriz[i][j]);
                    };
                };
                return sol;
            }
        }

        this.trasponer = function(m){
            if(m == "primera"){
                conteMatrices.m1.matriz = invertir(conteMatrices.m1);
                return conteMatrices.m1;
            }else{
                conteMatrices.m2.matriz = invertir(conteMatrices.m2);
                return conteMatrices.m2;
            }
        }

        function invertir (m){
            var f = m.columnas;
            var c = m.filas;
            var invertida = new ArrayMatematico(f,c);

            for (var i = 0; i < m.filas; i++) {
                for (var j = 0; j < m.columnas; j++) {
                    invertida.matriz[j][i] = m.matriz[i][j];
                }
            }

            m.filas = f;
            m.columnas = c;

            return invertida.matriz;
        }

    }

    function error(message){
        this.name="Error";
        this.message=message;
    }

    function comprobarDimensiones(operador1,operador2){
        if (operador1.filas === operador2.filas && operador1.columnas===operador2.columnas) {
            return true;
        }else{
            throw new error("Las dimensiones no son válidas");
        }
    }

    function mostrarAleatorio(){
        var filas = document.getElementById("filas").value;
        var columnas = document.getElementById("columnas").value;
        var matri = new ArrayMatematico(filas,columnas);
        var priseg = document.getElementById("matrices").value;
        if(priseg == "primera"){
            conteMatrices.m1 = matri;
        }else{
            conteMatrices.m2 = matri;
        }
       
        matri.generarAleatorio();
        document.getElementById(priseg).innerHTML = matri.mostrar();
    }

    function mostrarInput(){
        filas = document.getElementById("filas").value;
        columnas = document.getElementById("columnas").value;
        var matri = new ArrayMatematico(filas,columnas);
        matri.generarInput();
        
    }

    function mostrarResultados(operacion){
        var filas = document.getElementById("filas").value;
        var columnas = document.getElementById("columnas").value;
        var matri = new ArrayMatematico(filas,columnas);
        var sol = matri.generarResultados(operacion, document.getElementById("matrices").value);
        document.getElementById("resultado").innerHTML = sol.mostrar();
    }

    function mostrarGenerarUser(){
        var matri = new ArrayMatematico(filas,columnas);
        var priseg = document.getElementById("matrices").value;
        var cont = 0;

        for (var i = 0; i < filas; i++) {
            for (var j = 0; j < columnas; j++) {
               matri.matriz[i][j] = parseInt(numeros[cont].value);
               cont++;
            }
        };

        if(priseg == "primera"){
            conteMatrices.m1 = matri; 
        }else{
            conteMatrices.m2 = matri;
        }

        document.getElementById(priseg).innerHTML = matri.mostrar();        
    }

    function btnSumar(){
        try{
            mostrarResultados(0);
        }catch(e){
            var msg = document.getElementById("resultado");
            msg.innerHTML=e.name+"</br>";
            msg.innerHTML+=e.message;
        }
    }

    function btnRestar(){
        try{
            mostrarResultados(1);
        }catch(e){
            var msg = document.getElementById("resultado");
            msg.innerHTML=e.name+"</br>";
            msg.innerHTML+=e.message;
        }
    }

    function btnTrasponer(){
        mostrarResultados(2);
    }

    function btnMultiplicar(){
        try{
            mostrarResultados(3);
        }catch(e){
            var msg = document.getElementById("resultado");
            msg.innerHTML=e.name+"</br>";
            msg.innerHTML+=e.message;
        }
    }

}

var conteMatrices = {
    m1: undefined,
    m2: undefined
}

document.addEventListener('DOMContentLoaded', iniciar);    





