// Función para agregar puntaje
function agregarPuntaje() {
	var nombreJugador = inputNombreJugador.value;
	if (nombreJugador && marcador > 0) {
		var newRow = tablaMarcadores.insertRow(-1);
		var cell1 = newRow.insertCell(0);
		var cell2 = newRow.insertCell(1);
		cell1.innerHTML = nombreJugador;
		cell2.innerHTML = marcador;

		// Reiniciar el juego y el marcador
		marcador = 0;
		preguntasRespondidas = 0;
		txt_marcador.innerHTML = "Marcador: " + marcador;
		inputNombreJugador.value = "";
	}
}
