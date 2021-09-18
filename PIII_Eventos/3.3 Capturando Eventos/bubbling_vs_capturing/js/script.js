
//Handler para mostrar la información. Nos va a servir tanto para
function showContent(e) {
   console.log(e);
   alert("El elemento se origión en "+e.target.id+" y ahora estoy en"+this.id);
   
}

//Obtengo los divs para la demostración de Bubbling
let bubblingDivs = document.querySelectorAll("#bubbling div");
//Obtengo los divs para la demostración de Capturing
let capturingDivs = document.querySelectorAll("#capturing div");


//Añado los manejadores de eventos (click) para cada uno de ellos en Bubbling
// bubblingDivs.forEach(function(item) {
//     item.addEventListener('click',showContent);
// });

//Añado los manejadores de eventos (click) para cada uno de ellos en Capturing
capturingDivs.forEach(function(item) {
    item.addEventListener('click',showContent, true);
});