document.addEventListener("DOMContentLoaded", () => {
    const Inicio = document.querySelector(".Inicio");
    const Cardapio = document.querySelector(".Cardapio");
    const Sobre = document.querySelector(".Sobre-li");
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
    const AdicionarQuatroQueijos = document.querySelector('#Adicionar-QuatroQueijos');
    const AdicionarMarguerita = document.querySelector('#Adicionar-Marguerita');
    const AdicionarPortuguesa = document.querySelector('#Adicionar-Portuguesa');
    const AdicionarBaiana = document.querySelector('#Adicionar-Baiana');
    const AdicionarLombo = document.querySelector('#Adicionar-Lombo');
    const AdicionarFitness = document.querySelector('#Adicionar-Fitness');
    const AdicionarAtum = document.querySelector('#Adicionar-Atum');
    const AdicionarModa = document.querySelector('#Adicionar-Moda');
    const AdicionarStrogonoff = document.querySelector('#Adicionar-Strogonoff');
    const AdicionarRomeuJulieta = document.querySelector('#Adicionar-Romeu-Julieta');
    const AdicionarBananaCanela = document.querySelector('#Adicionar-Banana-Canela');
    const AdicionarMorango = document.querySelector('#Adicionar-Morango');
    const AdicionarBis = document.querySelector('#Adicionar-Bis');
    const AdicionarDisquete = document.querySelector('#Adicionar-Disquete');
    const AdicionarChocolateBranco = document.querySelector('#Adicionar-Chocolate-Branco');
    const AdicionarDoceLeite = document.querySelector('#Adicionar-Doce-Leite');
    const AdicionarPrestigio = document.querySelector('#Adicionar-Prestigio');
    const AdicionarSorvete = document.querySelector('#Adicionar-Sorvete');
    const AdicionarBombom = document.querySelector('#Adicionar-Bombom');
    const AdicionarDoisAmores = document.querySelector('#Adicionar-Dois-Amores');
    const AdicionarGoiabada = document.querySelector('#Adicionar-Goiaba');


    const Calabresa = document.querySelector('.Calabresa');
    const Frango = document.querySelector('.Frango');
    const Bacon = document.querySelector('.Bacon');
    const QuatroQueijos = document.querySelector('.Quatro-Queijos');
    const Marguerita = document.querySelector('.Marguerita');
    const Atum = document.querySelector('.Atum');
    const Baiana = document.querySelector('.Baiana');
    const Moda = document.querySelector('.Moda');
    const Lombo = document.querySelector('.Lombo');
    const Portuguesa = document.querySelector('.Portuguesa');
    const Fitness = document.querySelector('.Fitness');
    const Strogonoff = document.querySelector('.Strogonoff');
    const Goiabada = document.querySelector('.Goiabada');
    const DoisAmores = document.querySelector('.Dois-Amores');
    const Bombom = document.querySelector('.Bombom');
    const Bis = document.querySelector('.Bis');
    const BananaCanela = document.querySelector('.Banana-Canela');
    const DoceLeite = document.querySelector('.Doce-Leite');
    const Morango = document.querySelector('.Morango');
    const Sorvete = document.querySelector('.Sorvete');
    const ChocolateBranco = document.querySelector('.Chocolate-Branco');
    const Disquete = document.querySelector('.Disquete');
    const Prestigio = document.querySelector('.Prestigio');
    const RomeuJulieta = document.querySelector('.Romeu-Julieta');



    const Quantidade_Carrinho = document.querySelector('.Quantidade-Pedido-Carrinho');

    document.addEventListener('DOMContentLoaded', () => {
        Caixa_Pedido.style.display = 'none';
        Bacon.style.display = 'none';
        Calabresa.style.display = 'none';
        Frango.style.display = 'none';
        QuatroQueijos.style.display = 'none';
        Marguerita.style.display = 'none';
        Fitness.style.display = 'none';
        Lombo.style.display = 'none';
        Strogonoff.style.display = 'none';
        Baiana.style.display = 'none';
        Atum.style.display = 'none';
        Moda.style.display = 'none';
        Portuguesa.style.display = 'none';
        RomeuJulieta.style.display = 'none'
        Disquete.style.display = 'none'
        DoceLeite.style.display = 'none'
        Goiabada.style.display = 'none'
        Morango.style.display = 'none'
        DoisAmores.style.display = 'none'
        ChocolateBranco.style.display = 'none'
        Bis.style.display = 'none'
        Bombom.style.display = 'none'
        Sorvete.style.display = 'none'
        BananaCanela.style.display = 'none'
        Prestigio.style.display = 'none'


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

        AdicionarQuatroQueijos.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            QuatroQueijos.style.display = 'flex';
        });

        AdicionarAtum.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Atum.style.display = 'flex';
        });

        AdicionarMarguerita.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Marguerita.style.display = 'flex';
        });

        AdicionarModa.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Moda.style.display = 'flex';
        });

        AdicionarLombo.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Lombo.style.display = 'flex';
        });

        AdicionarBaiana.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Baiana.style.display = 'flex';
        });

        AdicionarStrogonoff.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Strogonoff.style.display = 'flex';
        });

        AdicionarFitness.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Fitness.style.display = 'flex';
        });

        AdicionarPortuguesa.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Portuguesa.style.display = 'flex';
        });

        AdicionarPrestigio.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Prestigio.style.display = 'flex';
        });

        AdicionarBananaCanela.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            BananaCanela.style.display = 'flex';
        });

        AdicionarBombom.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Bombom.style.display = 'flex';
        });

        AdicionarChocolateBranco.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            ChocolateBranco.style.display = 'flex';
        });

        AdicionarDisquete.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Disquete.style.display = 'flex';
        });

        AdicionarDoceLeite.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            DoceLeite.style.display = 'flex';
        });

        AdicionarDoisAmores.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            DoisAmores.style.display = 'flex';
        });

        AdicionarBis.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Bis.style.display = 'flex';
        });

        AdicionarMorango.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Morango.style.display = 'flex';
        });

        AdicionarSorvete.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Sorvete.style.display = 'flex';
        });

        AdicionarGoiabada.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            Goiabada.style.display = 'flex';
        });

        AdicionarRomeuJulieta.addEventListener('click', () => {
            quantidadeCarrinho++;
            Quantidade_Carrinho.textContent = quantidadeCarrinho;
            RomeuJulieta.style.display = 'flex';
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

document.addEventListener('DOMContentLoaded', () => {
    const itensCarrinho = document.querySelectorAll('#Itens-Carrinho .item');
    const finalizarPedido = document.querySelector('#Finalizar-Pedido');

    const atualizarPrecoTotal = () => {
        let precoTotalCarrinho = 0;

        itensCarrinho.forEach(item => {
            const select = item.querySelector('.Tamanho_Pizza');
            const quantidadeInput = item.querySelector('.Quantidade');
            const span = item.querySelector('.Preco');

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
            precoTotalCarrinho += precoTotal;
        });

        finalizarPedido.textContent = `Finalizar Pedido R$ ${precoTotalCarrinho.toFixed(2)}`;
    };

    // Atualizar o preço ao carregar a página
    atualizarPrecoTotal();


    // Adicionar event listeners para atualizar o preço quando o usuário mudar o tamanho da pizza ou a quantidade
    itensCarrinho.forEach(item => {
        const select = item.querySelector('.Tamanho_Pizza');
        const quantidadeInput = item.querySelector('.Quantidade');

        select.addEventListener('change', atualizarPrecoTotal);
        quantidadeInput.addEventListener('input', atualizarPrecoTotal);
    });


});

const observar = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})
const elements = document.querySelectorAll('.hidden')
elements.forEach((elements) => observar.observe(elements))
