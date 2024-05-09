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

//evento meu pedido mostrar na tela ao clicar em pedir ja 
document.addEventListener('DOMContentLoaded', () => {
    const Caixa_Pedido = document.querySelector('.Caixa_Pedido');
    const PedirCalabresa = document.querySelector('#PedirCalabresa');

    PedirCalabresa.addEventListener('click', () => {
        Caixa_Pedido.style.display = 'flex';
    })

})

