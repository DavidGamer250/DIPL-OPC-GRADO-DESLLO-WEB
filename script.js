document.addEventListener("DOMContentLoaded", function() {
    const destacados = document.querySelector("#destacados .row");
    
    const imagenes = [
        { src: "assets/imagen1.jpg", alt: "Imagen 1" },
        { src: "assets/imagen2.jpg", alt: "Imagen 2" }
    ];
    
    imagenes.forEach(img => {
        let div = document.createElement("div");
        div.className = "col-md-4";
        div.innerHTML = `<img src="${img.src}" alt="${img.alt}" class="img-fluid">`;
        destacados.appendChild(div);
    });
});
