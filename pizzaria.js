ddocument.addEventListener("DOMContentLoaded", () => {
    const Inicio = document.querySelector(".Inicio");
    const Cardapio = document.querySelector(".Cardapio");
    const Sobre = document.querySelector(".Sobre");
    const Caixa_Inicial = document.querySelector(".Caixa_Inicial");
    const Caixa_Cardapio = document.querySelector(".Caixa_Cardapio");
    const Caixa_Sobre = document.querySelector(".Caixa_Sobre");
    const mobile_menu = document.querySelector(".mobile-menu");
    const nav = document.querySelector(".nav-list");

    Inicio.addEventListener("click", () => {
        Caixa_Inicial.scrollIntoView({ behavior: "smooth" });
    });

    Cardapio.addEventListener("click", () => {
        Caixa_Cardapio.scrollIntoView({ behavior: "smooth" });
    });

    Sobre.addEventListener("click", () => {
        Caixa_Sobre.scrollIntoView({ behavior: "smooth" });
    });

    mobile_menu.addEventListener("click", () => {
        Caixa_Inicial.style.zIndex = '0';
        nav.style.zIndex = '2';

    })


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
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

