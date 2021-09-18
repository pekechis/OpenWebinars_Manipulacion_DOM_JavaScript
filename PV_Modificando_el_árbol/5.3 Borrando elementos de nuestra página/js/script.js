
//VARIABLE PARA GUARDAR EL ELEMENTO CUANDO LO BORRO
let deletedRow;

// AÑADIMOS LOS MANEJADORES DE EVENTOS


//BORRAMOS EL PRIMERA FILA USANDO REMOVECHILD
//NECESITO LA REFERENCIA AL PADRE
const removeChild = document.getElementById("removeChild");
removeChild.addEventListener('click', e => {
    let tbody = document.querySelector("tbody");
    tbody.removeChild(document.querySelector("tbody tr"));
});


//BORRAMOS LA ÚLTIMA FILA USANDO REMOVE
//SOLO NECESITO LA REFERENCIA AL ELEMENTO
const remove = document.getElementById("remove");
remove.addEventListener('click', e => {
    deletedRow = document.querySelector("tbody").lastElementChild;
    
    //MUESTRO EL ELEMENTO QUE QUIERO BORRAR
    console.log("------------ ELEMENTO A BORRAR ------------");
    console.log(deletedRow);

    //MUESTRO EL PADRE DEL ELEMENTO QUE QUIERO BORRAR
    console.log("------------- PADRE DEL ELEMENTO ANTES DE BORRAR ------------");
    console.log(deletedRow.parentElement);

    //BORRO EL ELEMENTO
    deletedRow.remove();

    //EL ELEMENTO SIGUE EXISTIENDO
    console.log("------------- COMPRUEBO QUE EL ELEMENTO EXISTE DESPUÉS DE BORRARLO  ------------");
    console.log(deletedRow);

    //MUESTRO EL PADRE DEL ELEMENTO TRAS BORRARLO
    console.log("------------- PADRE DEL ELEMENTO DESPUÉS DE BORRAR ------------");
    console.log(deletedRow.parentElement);
    
});

//RECUPERO LA ÚLTIMA FILA PARA COMPROBAR QUE EL NODO SIGUE AHÍ TRAS EL REMOVE
const recover = document.getElementById("recover");
recover.addEventListener('click', e => {
    if (deletedRow) {
        document.getElementsByTagName("tbody")[0].append(deletedRow);
    } else {    
        alert("Aún no se ha borrado la fila");
    }
});