let slideIndex = 0;

function mostrarSlide() {
    const slides = document.getElementsByClassName("carrossel-slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(mostrarSlide, 3000); // Mude de slide a cada 3 segundos (3000 milissegundos)
}

mostrarSlide();