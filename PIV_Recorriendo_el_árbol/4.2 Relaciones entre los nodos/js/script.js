
//Obtengo la lista del documento
const list = document.querySelector("ul");

//Nodo padre de a lista
console.log("---- NODO PADRE DE LA LISTA");
console.log(list.parentNode);

//Etiqueta padre de la lista
console.log("----- ETIQUETA PADRE DE LA LISTA ----");
console.log(list.parentElement);

//Antecesor más cercano que cumple con cierto selecto
console.log("------- ANTECESOR MÁS CERCANO CON LA CLASE CONTAINER");
console.log(list.closest(".container"));

//Muestro la lista
console.log("------ LISTA ------");
console.log(list);

//Hijos de cualquier tipo de la lista
console.log("-------- NODOS HIJOS ------");
console.log(list.childNodes);

//Etiquetas hijas de la lista
console.log("--------- ETIQUETAS HIJAS -------");
console.log(list.children);

//Etiqueta hijo en una posición determinada
console.log("---------- SEGUNDO HIJO ---------");
console.log(list.children[1]);

//Primer hijo NODO
console.log("------ PRIMER HIJO NODO ---------");
console.log(list.firstChild);

//Primer hijo ETIQUETA
console.log("------ PRIMER HIJO ETIQUETA ---------");
console.log(list.firstElementChild);

//Último hijo NODO
console.log("------ ULTIMO HIJO NODO ---------");
console.log(list.lastChild);

//Último hijo etiqueta 
console.log("------ ULTIMO HIJO ETIQUETA ---------");
console.log(list.lastElementChild);


//Hermanos (nodos) anterior/posterior del primer hijo etiqueta
console.log("----- NODOS HERMANOS (anterior y posterior ) DEL PRIMER HIJO ETIQUETA------")
console.log(list.children[0].previousSibling);
console.log(list.children[0].nextSibling);

//Hermanos (etiquetas) anterior/posterior del primer hijo etiqueta
console.log("----- ETIQUETAS HERMANAS (anterior y posterior ) DEL PRIMER HIJO ETIQUETA------")
console.log(list.children[0].previousElementSibling);
console.log(list.children[0].nextElementSibling);



