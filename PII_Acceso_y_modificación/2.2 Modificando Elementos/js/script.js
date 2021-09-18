
 //Usando la propiedad innerHTML para modificar el contenido HTML de un elemento.No incluye el propio elemento
 const inner = document.getElementById("inner");
 inner.innerHTML = "Hola a <b>todos!!!</b>";

 //Usando la propiedad outerHTML para modificar el contenido HTML de un elemento y el propio elemento.
 const outer = document.getElementById("outer");
 outer.outerHTML = "<ul><li>A</li><li>B</li></ul>";
 

 //Usando la propiedad innerText para moficiar el contenido (texto) de un elemento. No se distinguen entidades HTML
 const text = document.getElementById("text");
 text.innerText = "<b>Adiós a todos</b>";
 

 //Establezco el title para mostrar el mensaje que se muestra al pasar el ratón por encima de un elemento
inner.title = "Mensaje al pasar el ratón por encima";
inner.id = "NO";