
//Función para el inline handler
function changeColor(e) {
    console.log("He hecho CLICK en el evento con el manejado INLINE");
    e.target.style.backgroundColor = "red";
}


//Obtengo el elemento
let example = document.getElementById("example");

//Defino la función manejador
function doSomething(e) {
    console.log("He hecho click en el DIV con ID Example");
    e.target.style.color = "green";
}

//Asigno dicha función mediante la propiedad de evento
example.onclick = doSomething;


//Obtengo el elemento
let listener = document.getElementById("listener");

//Añado el handler mediante la función addEventListener
listener.addEventListener("click", e => {
    console.log("He hecho click en el DIV con ID Listener");
    e.target.style.color = "white";
    e.target.style.backgroundColor = "blue";
});



//Función para mostrar la posición en la que está el puntero del ratón
function showMousePosition(e) {
    let x = document.getElementById("X");
    let y = document.getElementById("Y");
    // PageX / PageY representan las coordenadas 
    x.textContent = e.pageX;
    y.textContent = e.pageY;
}
//Añado el manejador de eventos para obtener la posición del puntero del ratón
//Necesito hacerlo así para poder quitarla posteriormente
document.querySelector("html").addEventListener("mousemove",showMousePosition);

//Quito el manejador el evento
document.getElementById("stop").onclick = function (e) {
    document.querySelector("html").removeEventListener("mousemove",showMousePosition);
};

