
//Manejador para captura el click en el botón
document.getElementById("build").addEventListener("click",event => {

    let filas = document.querySelectorAll("input")[0].value;
    let columnas = document.querySelectorAll("input")[1].value;
    

    //Borra la tabla previa si es que existia
    if (document.querySelector("table")) {
        document.querySelector("table").remove();
    }

    //Crear elemento tabla
    let tabla = document.createElement("table");

    for (let i = 0; i < filas; i++) {

        let row = document.createElement("tr");
        
        for (let j = 0; j < columnas; j++) {
           
            let cell =  document.createElement("td");
            let text =  document.createTextNode(i+","+j);
            cell.append(text);

            row.append(cell);            
        }

        tabla.append(row);
    }

    console.log(tabla);

    document.querySelector(".container").append(tabla);

});