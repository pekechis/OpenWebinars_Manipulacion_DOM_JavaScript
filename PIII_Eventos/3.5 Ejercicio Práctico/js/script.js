
//Añadimos el click listeners a las imágenes
let sourceImages = document.querySelectorAll("#images img");

sourceImages.forEach(image => {
    image.addEventListener("click", event => {
        let frameImage = document.querySelector("#frame img");

        frameImage.setAttribute("src",event.target.getAttribute("src"));
    });
});


//Añadimos el click listener a los divs de colores
let colorBlocks = document.querySelectorAll(".colors div");


colorBlocks.forEach(block => {
    block.addEventListener("click", event => {
        let color = window.getComputedStyle(event.target).backgroundColor;
        document.getElementById("picture").style.borderColor=color;       
    });
});


//Añadimos los Zooms...
document.querySelector("#zoom img:nth-child(1)").addEventListener("click", event => {
    let img = document.querySelector("#frame img");
    let dim = img.offsetWidth;
    img.style.width=(dim+50)+"px";
    img.style.height=(dim+50)+"px";  

});

document.querySelector("#zoom img:nth-child(2)").addEventListener("click", event => {
    let img = document.querySelector("#frame img");
    let dim = img.offsetWidth;   
    img.style.width=(dim-50)+"px";
    img.style.height=(dim-50)+"px";
});