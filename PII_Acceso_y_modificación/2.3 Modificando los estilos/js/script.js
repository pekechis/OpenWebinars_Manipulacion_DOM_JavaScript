//Escondemos la tercera imagen
let hiddenImg = document.querySelector("img:nth-child(3)");

hiddenImg.style.display="none";

//Añadimos dos clases border y otraAltura a todas las imágenes
let images = document.querySelectorAll("img");

images.forEach(imagen => {
    imagen.classList.add("border");
    imagen.classList.add("otraAltura");
});

//Quito el borde de la cuarta imagen
let noborderImg = document.querySelector("img:nth-child(4)");

noborderImg.classList.remove("border");