
let celdas = document.querySelectorAll("tbody td");


//Función a ejecutar cuando entramos en la celda
function entrando(e) {
    console.log("entrando");
    let parent = e.target.parentElement; //TR - Fila
    console.log(parent.children);
    //Obtengo la posición del elemento
    let position = Array.from(parent.children).indexOf(e.target);
    

    //Modifico los estilos de los hermanos (misma fila)
    Array.from(parent.children).forEach( item => {
        item.style.backgroundColor="#F00";
        item.style.height="70px";
    });

    //Modifico los estilos de los elementos de la misma columna
    
    //De las filas anteriores
    let filaAnterior = e.target.parentElement.previousElementSibling;
    while (filaAnterior) {
        let celda = filaAnterior.children[position];
        celda.style.backgroundColor="#F00";
        filaAnterior = filaAnterior.previousElementSibling;      
    }

    //De las filas posteriores
    let filaPosterior = e.target.parentElement.nextElementSibling;
    while (filaPosterior) {
        let celda = filaPosterior.children[position];
        celda.style.backgroundColor="#F00";
        filaPosterior = filaPosterior.nextElementSibling;      
    }

    
}

//Función a ejecutar cuando salimos de la celda
function saliendo(e) {
    console.log("saliendo");
    let parent = e.target.parentElement;

    //Obtengo la posición del elemento
    let position = Array.from(parent.children).indexOf(e.target);
    console.log(position);
    
    //Ponemos los hermanos de nuevo en blanco
    Array.from(parent.children).forEach( item => {
        item.style.backgroundColor="#FFF";
        item.style.height="50px";
    });

     //De las filas anteriores
     let filaAnterior = e.target.parentElement.previousElementSibling;
     while (filaAnterior) {
         let celda = filaAnterior.children[position];
         celda.style.backgroundColor="#FFF";
         filaAnterior = filaAnterior.previousElementSibling;      
     }
 
     //De las filas posteriores
     let filaPosterior = e.target.parentElement.nextElementSibling;
     while (filaPosterior) {
         let celda = filaPosterior.children[position];
         celda.style.backgroundColor="#FFF";
         filaPosterior = filaPosterior.nextElementSibling;      
     }
}

//Establecemos los ma
celdas.forEach( item =>  {
    item.addEventListener('mouseenter',entrando);
    item.addEventListener('mouseleave',saliendo);
})