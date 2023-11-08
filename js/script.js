var num1, num2, respuesta, marcador = 0, preguntasRespondidas = 0;
var juegoActivo = true; // Agregar una bandera para controlar el juego

var txt_suma = document.getElementById("suma");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var txt_msj = document.getElementById("msj");
var txt_resultado = document.getElementById("resultado");
var txt_marcador = document.getElementById("marcador");
var txt_puntos = document.getElementById("puntos");
var inputNombreJugador = document.getElementById("nombreJugador");
var tablaMarcadores = document.getElementById("tablaMarcadores").getElementsByTagName('tbody')[0];

function comenzar() {
    if (!juegoActivo) return; // Evita iniciar nuevas preguntas si el juego no está activo

    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";

    num1 = Math.round(Math.random() * 9);
    num2 = Math.round(Math.random() * 9);
    respuesta = num1 + num2;

    suma.innerHTML = num1 + " + " + num2 + " = ";

    indiceOpCorrecta = Math.round(Math.random() * 2);

    if (indiceOpCorrecta == 0) {
        op1.innerHTML = respuesta;
        op2.innerHTML = respuesta + 1;
        op3.innerHTML = respuesta - 1;
    }
    if (indiceOpCorrecta == 1) {
        op1.innerHTML = respuesta - 1;
        op2.innerHTML = respuesta;
        op3.innerHTML = respuesta - 2;
    }
    if (indiceOpCorrecta == 2) {
        op1.innerHTML = respuesta + 2;
        op2.innerHTML = respuesta + 3;
        op3.innerHTML = respuesta;
    }
}

function controlarRespuesta(opcionElegida) {
    if (!juegoActivo) return; // Evita controlar respuestas si el juego no está activo

    txt_resultado.innerHTML = opcionElegida.getElementsByTagName("span")[0].innerHTML;
    if (respuesta == opcionElegida.getElementsByTagName("span")[0].innerHTML) {
        txt_msj.innerHTML = "EXCELENTE!!";
        txt_msj.style.color = "green";
        marcador += 10;
    } else {
        txt_msj.innerHTML = "INTENTA DE NUEVO!!";
        txt_msj.style.color = "red";
    }

    preguntasRespondidas++;

    if (preguntasRespondidas < 15) {
        setTimeout(comenzar, 2000);
    } else {
        txt_marcador.innerHTML = "Marcador: " + marcador;
        juegoActivo = false; // Juego inactivo después de 15 preguntas
    }
}

function limpiar() {
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";
}

function agregarPuntaje() {
    var nombreJugador = inputNombreJugador.value;
    if (nombreJugador && marcador > 0) {
        var newRow = tablaMarcadores.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = nombreJugador;
        cell2.innerHTML = marcador;

        inputNombreJugador.value = "";
    }
}

function reiniciarJuego() {
    // Restablece el juego para jugar nuevamente
    juegoActivo = true;
    marcador = 0;
    preguntasRespondidas = 0;
    txt_marcador.innerHTML = "Marcador: " + marcador;
    comenzar(); // Inicia una nueva pregunta
}
