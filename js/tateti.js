var turno = 1;

document.addEventListener("click", function(e) {
  let elementoClickeado = e.target;
  if (!elementoClickeado.innerText) {
    let nuevoNodo = document.createElement("p");

    if (turno) {
      nuevoNodo.innerHTML = "O";
      turno = 0;
    } else {
      nuevoNodo.innerHTML = "X";
      turno = 1;
    }

    elementoClickeado.appendChild(nuevoNodo);
  }
});
