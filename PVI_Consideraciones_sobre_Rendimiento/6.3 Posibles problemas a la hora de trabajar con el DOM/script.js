
//1. BATCHING (Agrupar Lectura y escritura para que el navegador pueda optimizar)

//MAL
const width = element.clientWidth + 10;
element.style.width = width + 'px';
const width2 = element.clientWidth + 10;
element.style.width = width2 + 'px';

//MÁS RÁPIDO
const width = element.clientWidth + 10;
const width2 = element.clientWidth + 20;

element.style.width = width + 'px';
element.style.width = width2 + 'px';



//2. EVITAR MANIPULAR EL DOM EN BUCLES

//MAL
for (let i = 0; i < 10; i++) {
    document.querySelector('.result').innerText += i;
}

//BIEN
let resultado = '';
for (let i = 0; i < 10; i++) {
    resultado += i;
}
document.querySelector('.result').innerText = resultado;


//3. NO USAR VALORES DEL DOM EN BUCLES

//MAL
let items = document.querySelectorAll(".items");
for (let index = 0; index < items.length; index++) {
    ...    
}

//BIEN
let items = document.querySelectorAll(".items");
let tam = items.length;
for (let index = 0; index < tam; index++) {
    ...    
}

//4. USAR CLASES Y NO STYLES INLINE

//MAL
let element = document.querySelector(".a");
element.style.width = '100px';
element.style.color = '#FFF';

//BIEN

/*
 En CSS
 .a-style {
     color: #FFF;
     width: 100px;   
 }
*/
let element = document.querySelector(".a");
element.classList.add("a-style");


//5. USAR APPEND CORRECTAMENTE. ES LA OPERACIÓN MÁS COSTOSA

//MAL
let lista = document.querySelector("ul");
for (let index = 0; index < 1000; index++) {
    let list_item = document.createElement("li");
    let texto = document.createTextNode(index);

    list_item.append(texto);
    lista.append(list_item);
    
}

//BIEN
let lista = document.querySelector("ul");
let fragment = document.createDocumentFragment();
for (let index = 0; index < 1000; index++) {
    let list_item = document.createElement("li");
    let texto = document.createTextNode(index);

    list_item.append(texto);
    fragment.append(list_item);    
}

lista.append(fragment);