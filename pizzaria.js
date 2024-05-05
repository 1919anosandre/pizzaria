document.addEventListener("DOMContentLoaded", () => {
    const Inicio = document.querySelector(".Inicio");
    const Cardapio = document.querySelector(".Cardapio");
    const Sobre = document.querySelector(".Sobre");
    const Caixa_Inicial = document.querySelector(".Caixa_Inicial");
    const Caixa_Cardapio = document.querySelector(".Caixa_Cardapio");
    const Caixa_Sobre = document.querySelector(".Caixa_Sobre");

    Inicio.addEventListener("click", () => {
        Caixa_Inicial.scrollIntoView({ behavior: "smooth" });
    });

    Cardapio.addEventListener("click", () => {
        Caixa_Cardapio.scrollIntoView({ behavior: "smooth" });
    });

    Sobre.addEventListener("click", () => {
        Caixa_Sobre.scrollIntoView({ behavior: "smooth" });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const backgrounds = ["img/pizza2.jpg", "img/pizza4.jpg", "img/pizza.jpg"]; // Lista de URLs das imagens de fundo
    let index = 0;

    function changeBackground() {
        document.body.style.backgroundImage = `url(${backgrounds[index]})`;
        index = (index + 1) % backgrounds.length;
        setTimeout(changeBackground, 3000); // Troca a imagem a cada 3 segundos
    }

    changeBackground(); // Inicia o slideshow
});

