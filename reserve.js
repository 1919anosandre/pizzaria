// esconder e mostrar caixas do pagamento das pizzas
const FormCartao = document.querySelector('.FormCartao');
const FormPix = document.querySelector('.FormPix');
const FormDinheiro = document.querySelector('.FormDinheiro');
const Forma_Pagamento_MeuPedido = document.querySelector('.Forma_Pagamento_MeuPedido');

function Evento_Mostrar_Ocultar() {
    const Caixa_FormCartao = document.querySelector('.Caixa_FormCartao');
    const Caixa_FormPix = document.querySelector('.Caixa_FormPix');
    const Caixa_FormDinheiro = document.querySelector('.Caixa_FormDinheiro');

    document.addEventListener('DOMContentLoaded', () => {
        Caixa_FormCartao.style.display = 'none';
        Caixa_FormPix.style.display = 'none';
        Caixa_FormDinheiro.style.display = 'none';
        Finalizar.style.display = 'none';

        FormCartao.addEventListener('click', () => {
            Caixa_FormCartao.style.display = 'flex';
            Caixa_FormPix.style.display = 'none';
            Caixa_FormDinheiro.style.display = 'none';
            FormCartao.style.border = '02px solid yellow';
            FormPix.style.border = 'none';
            FormDinheiro.style.border = 'none';
            Finalizar.style.display = 'block';
            Forma_Pagamento_MeuPedido.textContent = 'Forma de Pagamento selecionada : Cartão';





        });

        FormPix.addEventListener('click', () => {
            Caixa_FormPix.style.display = 'flex';
            Caixa_FormCartao.style.display = 'none';
            Caixa_FormDinheiro.style.display = 'none';
            FormPix.style.border = '02px solid yellow';
            FormCartao.style.border = 'none';
            FormDinheiro.style.border = 'none';
            Finalizar.style.display = 'block';
            Forma_Pagamento_MeuPedido.textContent = 'Forma de Pagamento selecionada : Pix';







        });

        FormDinheiro.addEventListener('click', () => {
            Caixa_FormDinheiro.style.display = 'flex';
            Caixa_FormCartao.style.display = 'none';
            Caixa_FormPix.style.display = 'none';
            FormDinheiro.style.border = '02px solid yellow';
            FormPix.style.border = 'none';
            FormCartao.style.border = 'none';
            Finalizar.style.display = 'block';
            Forma_Pagamento_MeuPedido.textContent = 'Forma de Pagamento selecionada : Dinheiro'






        });
    });
};
Evento_Mostrar_Ocultar();

const Caixa_Formpag = document.querySelector('.Caixa_Formpag');
const Caixa_Principal = document.querySelector('.Caixa_Principal')
const Bebidas = document.querySelector('.Bebidas');
const Tamanho = document.querySelector('.Tamanho');
const Um_Saborimg = document.querySelector('#Um_Sabor');
const Dois_Saboresimg = document.querySelector('#Dois_Sabores');
const Tres_Saboresimg = document.querySelector('#Tres_Sabores');
const Selecionado_Um_Sabor = document.querySelector('#Um_Sabor_selecionado');
const Selecionado_Dois_Sabores = document.querySelector('#Dois_Sabores_selecionado');
const Selecionado_Tres_Sabores = document.querySelector(' #tres_Sabores_selecionado')


function Mostrar_Ocultar_CarregarPag() {
    document.addEventListener('DOMContentLoaded', () => {
        Selecionado_Um_Sabor.style.display = 'none';
        Selecionado_Dois_Sabores.style.display = 'none';
        Selecionado_Tres_Sabores.style.display = 'none';
        Caixa_Formpag.style.opacity = '0'
        Tamanho.style.display = 'none';
        Bebidas.style.display = 'none';
        Caixa_Principal.style.height = '200px';

        Um_Saborimg.addEventListener('click', () => {
            Selecionado_Um_Sabor.style.display = 'flex';
            Selecionado_Dois_Sabores.style.display = 'none';
            Selecionado_Tres_Sabores.style.display = 'none';


            Caixa_Formpag.style.opacity = '1'
            Tamanho.style.display = 'flex';
            Bebidas.style.display = 'flex';
            Caixa_Principal.style.height = '700px';
        })

        Dois_Saboresimg.addEventListener('click', () => {
            Selecionado_Um_Sabor.style.display = 'flex';
            Selecionado_Tres_Sabores.style.display = 'none';

            Selecionado_Dois_Sabores.style.display = 'flex';
            Caixa_Formpag.style.opacity = '1'
            Tamanho.style.display = 'flex';
            Bebidas.style.display = 'flex';
            Caixa_Principal.style.height = '700px';
        })

        Tres_Saboresimg.addEventListener('click', () => {
            Selecionado_Um_Sabor.style.display = 'flex';
            Selecionado_Dois_Sabores.style.display = 'flex';

            Selecionado_Tres_Sabores.style.display = 'flex';

            Caixa_Formpag.style.opacity = '1'
            Tamanho.style.display = 'flex';
            Bebidas.style.display = 'flex';
            Caixa_Principal.style.height = '700px';
        })





    })





}
Mostrar_Ocultar_CarregarPag()

//validação de formularios 
/*function Validar_Formularios() {
    const Validacao = document.querySelector('#Validação');
    const Nome = document.querySelector('#Nome');
    const Cpf = document.querySelector('#CPF');
    const CVV = document.querySelector('#CVV');
    const Numero_Cartao = document.querySelector('#Numero_Cartão');
    const Senha = document.querySelector('#Senha');

    Validacao.addEventListener('submit', (event) => {
        event.preventDefault();

        if (Nome.value === '') {
            alert('Por Favor, Preencha seu Nome');
            return;
        }
        if (Cpf.value === '') {
            alert('Por Favor, Preencha seu CPF');
            return;
        }
        if (CVV.value === '') {
            alert('Por Favor, Preencha seu CVV');
            return;
        }
        if (Numero_Cartao.value === '') {
            alert('Por Favor, Preencha seu Numero do Cartão');
            return;
        }
        if (!Validar_Senha(Senha.value, 8)) {
            alert('A Senha Precisa ter no mínimo 8 dígitos');
            return;
        }
        
        Validar_Formularios.submit();
    });
}

function Validar_Senha(Senha, Digitos_Minimos) {
    return Senha.length >= Digitos_Minimos;
}

Validar_Formularios();
*/
// opções das seleções das pizzas
const Finalizar = document.querySelector('.Finalizar_Pedido');
const Select = document.getElementById('Tamanho_Pizza');
const Primeira_Pizza = document.getElementById('Primeira_Pizza');
const Segunda_Pizza = document.getElementById('Segunda_Pizza');
const Terceira_Pizza = document.getElementById('Terceira_Pizza')
const Pizza1 = document.querySelector('.Pizza1');
const Pizza2 = document.querySelector('.Pizza2');
const Pizza3 = document.querySelector('.Pizza3');

const Tamanho_Pizza_MeuPedido = document.querySelector('.Tamanho_Pizza_MeuPedido');

document.addEventListener('DOMContentLoaded', () => {

    Select.addEventListener('change', () => {
        switch (Select.value) {
            case 'Pequena':
                Finalizar.value = 'Finalizar Pedido R$ 22,00';
                break;
            case 'Media':
                Finalizar.value = 'Finalizar Pedido R$ 44,00';
                break;
            case 'Grande':
                Finalizar.value = 'Finalizar Pedido R$ 66,00';
                break;
        }

        switch (Select.value) {
            case 'Pequena':
                Tamanho_Pizza_MeuPedido.textContent = 'Tamanho da Pizza : Pequena';
                break;
            case 'Media':
                Tamanho_Pizza_MeuPedido.textContent = 'Tamanho da Pizza : Média';
                break;
            case 'Grande':
                Tamanho_Pizza_MeuPedido.textContent = 'Tamanho da Pizza : Grande';
                break;
        }



    });

    Primeira_Pizza.addEventListener('change', () => {
        switch (Primeira_Pizza.value) {
            case 'Calabresa':
                Pizza1.textContent = 'Pizza de Calabresa';
                break;
            case 'Quatro_Queijos':
                Pizza1.textContent = 'Pizza de Quatro Queijos';
                break;
            case 'Bacon':
                Pizza1.textContent = 'Pizza de Bacon';
                break;
            case 'Atum':
                Pizza1.textContent = 'Pizza de Bacon';
                break;
            case 'Baiana':
                Pizza1.textContent = 'Pizza de Bacon';
                break;
            case 'Portuguesa':
                Pizza1.textContent = 'Pizza de Bacon';
                break;
            case 'Frango':
                Pizza1.textContent = 'Pizza de Bacon';
                break;
            case 'strogonoff':
                Pizza1.textContent = 'Pizza de Bacon';
                break;
            case 'Moda':
                Pizza1.textContent = 'Pizza de Bacon';
                break;
            case 'Fitness':
                Pizza1.textContent = 'Pizza de Bacon';
                break;
            case 'Marguerita':
                Pizza1.textContent = 'Pizza de Bacon';
                break;
        }
    })

    Segunda_Pizza.addEventListener('change', () => {
        switch (Segunda_Pizza.value) {
            case 'Calabresa':
                Pizza2.textContent = 'Pizza de Calabresa';
                break;
            case 'Quatro_Queijos':
                Pizza2.textContent = 'Pizza de Quatro Queijos';
                break;
            case 'Bacon':
                Pizza2.textContent = 'Pizza de Bacon';
                break;
            case 'Atum':
                Pizza2.textContent = 'Pizza de Bacon';
                break;
            case 'Baiana':
                Pizza2.textContent = 'Pizza de Bacon';
                break;
            case 'Portuguesa':
                Pizza2.textContent = 'Pizza de Bacon';
                break;
            case 'Frango':
                Pizza2.textContent = 'Pizza de Bacon';
                break;
            case 'strogonoff':
                Pizza2.textContent = 'Pizza de Bacon';
                break;
            case 'Moda':
                Pizza2.textContent = 'Pizza de Bacon';
                break;
            case 'Fitness':
                Pizza2.textContent = 'Pizza de Bacon';
                break;
            case 'Marguerita':
                Pizza2.textContent = 'Pizza de Bacon';
                break;

        }
    })

    Terceira_Pizza.addEventListener('change', () => {
        switch (Terceira_Pizza.value) {
            case 'Calabresa':
                Pizza3.textContent = 'Pizza de Calabresa';
                break;
            case 'Quatro_Queijos':
                Pizza3.textContent = 'Pizza de Quatro Queijos';
                break;
            case 'Bacon':
                Pizza3.textContent = 'Pizza de Bacon';
                break;
            case 'Atum':
                Pizza3.textContent = 'Pizza de Bacon';
                break;
            case 'Baiana':
                Pizza3.textContent = 'Pizza de Bacon';
                break;
            case 'Portuguesa':
                Pizza3.textContent = 'Pizza de Bacon';
                break;
            case 'Frango':
                Pizza3.textContent = 'Pizza de Bacon';
                break;
            case 'strogonoff':
                Pizza3.textContent = 'Pizza de Bacon';
                break;
            case 'Moda':
                Pizza3.textContent = 'Pizza de Bacon';
                break;
            case 'Fitness':
                Pizza3.textContent = 'Pizza de Bacon';
                break;
            case 'Marguerita':
                Pizza3.textContent = 'Pizza de Bacon';
                break;
        }
    });


    // evento mostrar e ocultar os principais containers
    const Caixa_Principal = document.querySelector('.Caixa_Principal');
    const Meu_Pedido = document.querySelector('.Meu_Pedido');

    Caixa_Principal.style.display = 'flex';
    Meu_Pedido.style.display = 'none';

    // Definir a função handleFinalizarClick
    function handleFinalizarClick() {
        const Caixa_Principal = document.querySelector('.Caixa_Principal');
        const Meu_Pedido = document.querySelector('.Meu_Pedido');
        Meu_Pedido.style.display = 'flex';
        Caixa_Principal.style.display = 'none';
    }

    // Adicionar o evento de clique ao botão Finalizar
    const Finalizar = document.querySelector('.Finalizar_Pedido');
    Finalizar.addEventListener('click', handleFinalizarClick);

    // Verificar o horário de atendimento
    const Horario_Atendimento = new Date();
    let horario = Horario_Atendimento.getHours();
    if (horario >= 9) {
        alert('Tudo certo, estamos abertos!');
    } else {
        alert('O estabelecimento está fechado. Aberto das 18:00 às 01:00.');
        // Remover o evento de clique do botão Finalizar
        Finalizar.removeEventListener('click', handleFinalizarClick);
    }
});
