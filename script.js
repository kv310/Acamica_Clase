var turno = 0;
var ganador = false;
var grilla = crearTatetiMatrix(3); //Creo la grilla de 3x3 del tateti

document.addEventListener('click', function(e) {
	
	//Si no hay ganador, el juego sigue
	if(!ganador) {

		//Obtengo la casilla clickeada
		var divCasilla = e.target;

		//Me fijo que aún no haya sido completada 
		if (!divCasilla.innerHTML) {
			let char = '';

			// Asigno X o O segùn el turno
			if(turno) {
				char = 'X';
				turno = 0;
			}
			else {
				char = 'O';
				turno = 1;
			}

			//Agrego el nodo al html
			divCasilla.appendChild(document.createElement('p'));
			divCasilla.firstElementChild.innerText = char;
			e.preventDefault();

			if(validarSiGano()) {
				setTimeout(() => alert("Partido terminado!"), 200);		
			}
		}
	}
});


function validarSiGano() {
	let tateti = actualizarTatetiMatrix(grilla);
	ganador = ganoPorFilas(tateti) || ganoPorColumnas(tateti) || ganoPorDiagonales(tateti);
	return ganador;
}





//////////////////////////////////////////////// FUNCIONES AUXILIARES //////////////////////////////////////////////////////////


//Crea una matriz vacía con la cantidad de filas y columnas ingresada por parámetro
function crearTatetiMatrix(cantidadFilas) {
	//Creo la grilla vacía
	//La cantidad de filas y columnas tiene que ser la misma
	let grilla = new Array(cantidadFilas);
	for(let i = 0; i < grilla.length; i++) {
		grilla[i] = new Array(cantidadFilas);
	}

	return grilla;

}



//Actualiza la matriz con los valores que ingresan los jugadores
function actualizarTatetiMatrix(grilla) {
	//Obtengo el elemento grid
	let gridElement = document.querySelector('.grid-container');
	
	//Obtengo los div hijos
	let children = gridElement.children;

	//Lleno la grilla con el contenido sacado del HTML
	let k = 0;
	for(let i = 0; i < grilla.length; i++) {
		for(let j = 0; j < grilla[i].length; j++) {
			grilla[i][j] = children[k].innerText;
			k++;
		}
	}

	return grilla;
}




//Funcion que valida si algún jugador ganó horizontalmente
function ganoPorFilas(tateti) {

	let hayGanador = true;

	for(let i=0; i<tateti.length; i++) {
		for(let j=0; j<tateti[i].length; j++ ) {

			if(tateti[i][0]) {
				//Si entra a este bloque, es porque la casilla está marcada
				
				if(tateti[i][0] != tateti[i][j]) { 
					//Si entra a este bloque es porque en esta fila no hay ganador
					hayGanador = false;
				}
			}
			else {
				//Si entra a este bloque es porque la casilla todavía no fue marcada
				hayGanador = false;
			}
		}

		if(hayGanador) {
			//Si entra a este bloque, es porque hay un ganador y salgo de la función
			return true;
		}
		else {
			//Si entra a este bloque es porque aun no hubo un ganador, y hay que seguir preguntando
			hayGanador = true;
		}
	}

	return false;


}




//Función que valida si algún jugador gánó verticalmente
function ganoPorColumnas(tateti) {

	let hayGanador = true;

	for(let i=0; i<tateti.length; i++) {
		for(let j=0; j<tateti[i].length; j++ ) {

			if(tateti[0][i]) {
				//Si entra a este bloque, es porque la casilla está marcada
				
				if(tateti[0][i] != tateti[j][i]) { 
					//Si entra a este bloque es porque en esta columna no hay ganador
					hayGanador = false;
				}
			}
			else {
				//Si entra a este bloque es porque la casilla todavía no fue marcada
				hayGanador = false;
			}
		}

		if(hayGanador) {
			//Si entra a este bloque, es porque hay un ganador y salgo de la función
			return true;
		}
		else {
			//Si entra a este bloque es porque aun no hubo un ganador, y hay que seguir preguntando
			hayGanador = true;
		}
	}

	return false;
}



//Función que valida si algún jugador ganó en alguna diagonal
function ganoPorDiagonales(tateti) {

	let i = 0, j = 0;
	let gano = true;
	
	//Diagonal M[0][0] hasta M[|M|][|M|] (de izquierda-arriba a derecha-abajo)
	while(i < tateti.length) {
		if(tateti[0][0]) {

			//Si entro acá es porque la casilla está marcada
			if(tateti[0][0] != tateti[i][j]) {
				gano = false;
			}
		}
		else {
			// Si entro acá es porque la casilla está vacía
			gano = false;
		}
		i++;
		j++;
	}

	if(gano) {
		//Si entro acá es porque ya ganó en la primera diagonal
		return true;
	}


	//Si llegué acá, es porque todavía no ganó en la primera diagonal, entonces evalúo la segunda diagonal
	//En este caso recorro el tateti en su diagonal de derecha-arriba hasta izquierda-abajo
	else {
		debugger;
		i = 0; j = tateti.length - 1;
		let k = tateti.length - 1; // Variable adicional para contar desde la derecha
		gano = true;

		while(i < tateti.length) {
			if(tateti[0][k]) {
				if(tateti[0][k] != tateti[i][j]) {
					gano = false;
				}
			}
			else {
				gano = false;
			}

			i++;
			j--;
		}

		if(gano) {
			return true;
		}
	}

	//Si llegó hasta acá es porque no ganó
	return false;
}




document.addEventListener('mousedown', function(e) {
	e.preventDefault();
});





