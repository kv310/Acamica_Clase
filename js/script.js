document.addEventListener('click', function(e) {

	//Obtengo el elemento grid
 	let gridElement = document.querySelector('.grid-container');

 	//Obtengo los div hijos
 	let children = gridElement.children;

 	let grilla = new Array(3); 

 	//Crear la grilla vacia
 	for(let i = 0; i < grilla.length; i++) {
 		grilla[i] = new Array(3);
 	}

	let k = 0;
	 	//Este recorre la grilla principal, lleno la grilla con el contenido sacado del HTML
	 	for(let i= 0; i < grilla.length; i++){
	 		//Este recorre cada elemento del array
	 		for (let j = 0; j < grilla[i].length; j++) {
	 				grilla[i][j] = children[k].innerText;
	 				k++;

	 			}
	 	}
 	
 	let gane = true
 	
 	for(let i= 0; i < grilla.length; i++){
        //Este recorre cada elemento del array
        for (let j = 0; j < grilla[i].length; j++) {
            if(grilla[i][j]) {                
            	if (grilla[i][0] != grilla[i][j]){
                   gane = false;
               }
            }
            else {
                gane = false;
            }        }        

            if(gane) {
           alert(Ganaste!);
           return;
        }
        else {
            gane = true;
        }     }
}
);
