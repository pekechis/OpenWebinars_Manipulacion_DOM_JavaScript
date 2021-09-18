
//Obtención de un único elemento
let special = document.getElementById("special");
console.log(special);

special.style.color = "red";

//No obtenemos ningún elemento
// let element = document.getElementById("another")

// if (!element) {
//     alert("No hay ningún elemento con el ID another");
// }

//Obtenemos varios elementos
let list_elements = document.querySelectorAll("li");
console.log(list_elements);

//Distintas formas de iterar sobre los elementos obtenidos


//For - Loop. El ideal para navegadores muy antiguos.
// for (let i=0;i<list_elements.length;i++) {
//     list_elements[i].style.fontSize="2rem";
// }

//For - Of
// for (const item of list_elements) {
//     item.style.fontSize="2.5rem";
// }

//For of....values
// for (const item of list_elements.values()) {
//     item.style.fontSize="3rem";
// }

//ForEach
list_elements.forEach(item => {
    item.style.fontSize="0.5rem";
});

