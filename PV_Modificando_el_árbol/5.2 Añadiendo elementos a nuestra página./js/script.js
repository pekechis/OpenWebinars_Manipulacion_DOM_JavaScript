
//MANEJADORES PARA LOS EVENTOS 

document.getElementById("appendNode").addEventListener('click', e => {
    //Creo el nodo que voy a añadir
    let element = document.createElement("li");
    let text = document.createTextNode("SECCIÓN D");
    
    //Construyo el nuevo nodo
    element.append(text);

    //Lo añado al final de la lista
    document.querySelector("ul").append(element);

});

document.getElementById("appendString").addEventListener('click', e => {
    //Añado texto, puedo comprobar que se añade un nodo texto.
    document.querySelector("ul").append("<li>SECCIÓN TEXTO</li>");
    
});

document.getElementById("prependNode").addEventListener('click', e => {
   
    //Creo el nodo que voy a añadir
    let element = document.createElement("li");
    let text = document.createTextNode("SECCIÓN PRE-A");

    //Construyo el nuevo nodo
    element.append(text);

    //Lo añado al final de la lista
    document.querySelector("ul").prepend(element);
});

document.getElementById("beforeNode").addEventListener('click', e => {
   
    //Creo que voy a añadir antes
    let element = document.createElement("p");
    let texto = document.createTextNode("Párrafo a añadir antes de la lista");

    //Contruyo el nodo que pondré delante de la lista
    element.append(texto);

    //Añado dicho nodo justo delante
    document.querySelector("ul").before(element);

});

document.getElementById("beforeString").addEventListener('click', e => {
   
    //Añado dicho nodo justo delante
    document.querySelector("ul").before("<p>ESTE PÁRRAFO NO ES HTML</p>");

});

document.getElementById("afterNode").addEventListener('click', e => {
   
    //Creo que voy a añadir antes
    let element = document.createElement("p");
    let texto = document.createTextNode("Párrafo a añadir después de la tabla");

    //Contruyo el nodo que pondré delante de la lista
    element.append(texto);

    //Añado dicho nodo justo delante
    document.querySelector("ul").after(element);
    
});

document.getElementById("cloneNode").addEventListener('click', e => {
   
    //Clono la última fila de la tabla
    let element = document.querySelector("tbody").lastElementChild.cloneNode(true);

    //Lo añado al final
    document.querySelector("tbody").append(element);

});

document.getElementById("replaceWith").addEventListener('click', e => {
   
    //Creo los elementos necesarios
    let fila = document.createElement("tr");
    let celda = document.createElement("th");
    celda.setAttribute("colspan",4);
    let contenido = document.createTextNode("REEMPLAZO");

    //Construyo los elementos
    celda.append(contenido);
    fila.append(celda);

    //Reemplazo la primera fila por la fila creada
    document.querySelector("tbody").firstElementChild.replaceWith(fila);
    
});

document.getElementById("innerHTML").addEventListener('click', e => {
   
    //Modifico directamente la última fila
    document.querySelector("tbody").lastElementChild.innerHTML="<th colspan='4'>E</th>"
});

document.getElementById("insertAdjacentHTML").addEventListener('click', e => {
   
    //Añado el caption
    document.querySelector("thead").insertAdjacentHTML("beforebegin","<caption>TABLA DE MUESTRA</caption>");

    //Añado un fila más
    document.querySelector("tbody").insertAdjacentHTML("beforeend","<th colspan='4'>CON INSERTADJACENTHTML</th>");
});

