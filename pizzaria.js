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

//o dia que nao abre a pizzaria exibir um alert indicando que nao atenderemos nesse dia

let Dia = new Date();
let exibir_dia = Dia.getDay();

if (exibir_dia == 1) {
    alert('Nao iremos atender hoje');
}

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
                    }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        // Adiciona uma classe indicando que a inicialização está ocorrendo
        document.body.classList.add('initializing');

        // Verifica se a página foi completamente carregada antes de adicionar o evento de clique
        document.addEventListener("DOMContentLoaded", () => {
            if (this.mobileMenu) {
                this.addClickEvent();
            }
            // Remove a classe de inicialização após a inicialização estar completa
            document.body.classList.remove('initializing');
        });
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

const pizzas = [
    {
        id: 1,
        nome: 'Calabresa',
        preco_pequena: 22.00,
        preco_media: 22.00,
        preco_grande: 22.00,



    },

    {
        id: 2,
        nome: 'Frango',
        preco_pequena: 22.00,
        preco_media: 22.00,
        preco_grande: 22.00,

    },

    {
        id: 3,
        nome: 'QuatroQueijos',
        preco_pequena: 22.00,
        preco_media: 22.00,
        preco_grande: 22.00,

    }
]

const ItensCarrinho = document.querySelector('#Itens-Carrinho')

function adicionar() {

    Mapear_Pizzas = () => {
        pizzas.map((val) => {
            ItensCarrinho.innerHTML += `
        <h1> ${val.nome} </h1>
        <p>${val.preco_pequena}</p>
        <div class="Tamanho">
            <h2>selecione o tamanho da pizza :</h2>
            <select name="Tamanho_Pizza" id="Tamanho_Pizza">
              <option value="Pequena" id="Pequena">pequena</option>
              <option value="Media" id="Media">média</option>
              <option value="Grande" id="Grande">Grande</option>
    
            </select>
          </div>
        
        `
        })
    }

}
function Exibir_Carrinho() {
    const Carrinho = document.querySelector('#Carrinho');
    const Caixa_Pedido = document.querySelector('#Caixa-Pedido');
    const AdicionarCalabresa = document.querySelector('#Adicionar-Calabresa');
    const AdicionarFrango = document.querySelector('#Adicionar-Frango');
    const AdicionarBacon = document.querySelector('#Adicionar-Bacon');
    const Calabresa = document.querySelector('.Calabresa');
    const Frango = document.querySelector('.Frango');
    const Bacon = document.querySelector('.Bacon');
    const Quantidade_Carrinho = document.querySelector('.Quantidade-Pedido-Carrinho');

    document.addEventListener('DOMContentLoaded', () => {
        Caixa_Pedido.style.display = 'none';
        Bacon.style.display = 'none';
        Calabresa.style.display = 'none';
        Frango.style.display = 'none';

        let quantidadeCarrinho = 0;

        AdicionarCalabresa.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Calabresa.style.display = 'flex';
        });

        AdicionarFrango.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Frango.style.display = 'flex';
        });

        AdicionarBacon.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Bacon.style.display = 'flex';
        });

        Carrinho.addEventListener('click', () => {
            if (quantidadeCarrinho > 0) {
                Caixa_Pedido.style.display = 'flex';
            } else {
                Caixa_Pedido.style.display = 'none';
            }
        });
    });
}

Exibir_Carrinho();

const Tamanho_Pizza_MeuPedido = document.querySelector('.Tamanho_Pizza_MeuPedido');
const Finalizar_Pedido = document.querySelector('#Finalizar-Pedido');

document.addEventListener('DOMContentLoaded', () => {
    const itensCarrinho = document.querySelectorAll('#Itens-Carrinho .item');

    itensCarrinho.forEach(item => {
        const select = item.querySelector('.Tamanho_Pizza');
        const span = item.querySelector('.Preco');
        const quantidadeInput = item.querySelector('.Quantidade');

        const atualizarPreco = () => {
            let precoBase = 0;
            switch (select.value) {
                case 'Pequena':
                    precoBase = 22.00;
                    break;
                case 'Media':
                    precoBase = 44.00;
                    break;
                case 'Grande':
                    precoBase = 66.00;
                    break;
            }

            const quantidade = parseInt(quantidadeInput.value, 10) || 0;
            const precoTotal = precoBase * quantidade;

            span.textContent = `R$ ${precoTotal.toFixed(2)}`;
        };

        // Atualizar o preço ao carregar a página
        atualizarPreco();

        // Adicionar event listeners para atualizar o preço quando o usuário mudar o tamanho da pizza ou a quantidade
        select.addEventListener('change', atualizarPreco);
        quantidadeInput.addEventListener('input', atualizarPreco);
    });
});
