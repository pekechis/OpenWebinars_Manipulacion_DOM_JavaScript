
//Obtengo los elementos con los que voy a trabajar
let normal = document.getElementById("normal");
let simular = document.getElementById("simular");
let container = document.getElementsByClassName("container")[0];

//Capturamos el evento de manera "Normal"
normal.addEventListener("dblclick", e => {
    alert("He hecho doble click en el botón con el texto HANDLER PROPIO");    
});


//Creo el lsitener para el Evento sintético
container.addEventListener("colorChange", e => {
    e.target.style.backgroundColor = "red";
});




//Capturamos el evento y desde aquí simularemos el click en el otro botón
// y 
simular.addEventListener("click",function(e) {
    //Creo el objeto Evento
    let event = new MouseEvent("dblclick");
    //Simulo la ejecución del evento en el otro botón
    normal.dispatchEvent(event);
    //Lanzo el evento Sintético
    let myEvent = new Event("colorChange");
    container.dispatchEvent(myEvent);
});

