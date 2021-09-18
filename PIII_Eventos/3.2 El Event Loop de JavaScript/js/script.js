
//Función inicial para ver el funcionamiento del Call Stack
function myFunctionA() {
    console.log("Estoy en A");
    myFunctionB();
}

//Segunda función que se añadirá al Call Stack
function myFunctionB() {
    console.log("Estoy en B");
    myFunctionC();
}

//Tercera función que se añadirá al Call Stack
function myFunctionC() {
    console.log("Estoy en C");
}

//Llamo a la función para comenzar el ciclo de ejecución
myFunctionA();

//Temporizador que se añadirá al CallBack Queue
setTimeout(function() {
    console.log("Se ha acabado el temporizador")
},10000);




//Handler para capturar el click en el botón
function capturaClick() {
    console.log("He capturado el click del botón");
}