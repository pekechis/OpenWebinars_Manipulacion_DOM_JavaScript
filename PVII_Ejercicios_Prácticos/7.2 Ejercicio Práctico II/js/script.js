
//Captura del click del ratón en el botón de representar
document.getElementById("representar").addEventListener("click", event => {

    //Obtengo las filas de la tabla
    let filas = document.querySelectorAll("tbody tr");

    //Recorro las filas. Lo voy a recorrer con un FOR para 
    //ir mostando las gráficas en el mismo orden
    for (let index = 0; index < filas.length; index++) {
        
        //Obtengo las celdas de la fila
        let celdas = filas[index].children;

        //Obtengo la sección de gráficas correpsondientes a dicha fila
        let graficas = document.querySelector(".graphics > div:nth-child("+(index+1)+")");

        //Recorro las celdas (la primera no me hace falta)
        //Sigo con FOR para utilizar los índices
        for (let j = 1; j < celdas.length; j++) {
            
            let altura =  parseInt(celdas[j].textContent);

            graficas.children[j-1].style.height = altura+"px";
            graficas.children[j-1].title="Cantidad="+altura;
        }
        
    }

});
