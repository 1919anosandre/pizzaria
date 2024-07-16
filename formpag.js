const FormCartao = document.querySelector('.FormCartao');
const FormPix = document.querySelector('.FormPix');
const FormDinheiro = document.querySelector('.FormDinheiro');

function Evento_Mostrar_Ocultar() {
    const Caixa_FormCartao = document.querySelector('.Caixa_FormCartao');
    const Caixa_FormPix = document.querySelector('.Caixa_FormPix');
    const Caixa_FormDinheiro = document.querySelector('.Caixa_FormDinheiro');

    document.addEventListener('DOMContentLoaded', () => {
        Caixa_FormCartao.classList.add('visible');
        FormCartao.style.border = '2px solid yellow';

        FormCartao.addEventListener('click', () => {
            Caixa_FormCartao.classList.add('visible');
            Caixa_FormCartao.style.display = 'block';
            setTimeout(() => {
                Caixa_FormCartao.style.opacity = '1';
            }, 0);

            Caixa_FormPix.style.opacity = '0';
            Caixa_FormDinheiro.style.opacity = '0';

            setTimeout(() => {
                Caixa_FormPix.style.display = 'none';
                Caixa_FormDinheiro.style.display = 'none';
            }, 500);

            FormCartao.style.border = '2px solid yellow';
            FormPix.style.border = 'none';
            FormDinheiro.style.border = 'none';
        });

        FormPix.addEventListener('click', () => {
            Caixa_FormPix.classList.add('visible');
            Caixa_FormPix.style.display = 'block';
            setTimeout(() => {
                Caixa_FormPix.style.opacity = '1';
            }, 0);

            Caixa_FormCartao.style.opacity = '0';
            Caixa_FormDinheiro.style.opacity = '0';

            setTimeout(() => {
                Caixa_FormCartao.style.display = 'none';
                Caixa_FormDinheiro.style.display = 'none';
            }, 500);

            FormCartao.style.border = 'none';
            FormPix.style.border = '2px solid yellow';
            FormDinheiro.style.border = 'none';
        });

        FormDinheiro.addEventListener('click', () => {
            Caixa_FormDinheiro.classList.add('visible');
            Caixa_FormDinheiro.style.display = 'block';
            setTimeout(() => {
                Caixa_FormDinheiro.style.opacity = '1';
            }, 0);

            Caixa_FormCartao.style.opacity = '0';
            Caixa_FormPix.style.opacity = '0';

            setTimeout(() => {
                Caixa_FormCartao.style.display = 'none';
                Caixa_FormPix.style.display = 'none';
            }, 500);

            FormCartao.style.border = 'none';
            FormPix.style.border = 'none';
            FormDinheiro.style.border = '2px solid yellow';
        });
    });
};

Evento_Mostrar_Ocultar();
// Função para validar o número do cartão de crédito usando o algoritmo de Luhn
function validarNumeroCartao(cartao) {
    const cartaoSemEspacos = cartao.replace(/\D/g, '');
    let soma = 0;
    let deveDobrar = false;

    for (let i = cartaoSemEspacos.length - 1; i >= 0; i--) {
        let digito = parseInt(cartaoSemEspacos.charAt(i));

        if (deveDobrar) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }

        soma += digito;
        deveDobrar = !deveDobrar;
    }

    return soma % 10 === 0;
}


function Validar_Senha(Senha) {
    const Numeros_Senha = /[0-9]/
    if (Senha === 4 && Senha === Numeros_Senha) {
        return true
    }
}

function Validar_CVV(CVV) {
    let Numeros_CVV = /[0-9]/

    if (CVV === 4 && CVV === Numeros_CVV) {
        return true
    }
}

// Função para validar o formulário
function Validar_Form() {
    const Nome = document.querySelector('#Nome').value;
    const Numero_Cartao = document.querySelector('#Numero_Cartao').value;
    const CPF = document.querySelector('#CPF').value;
    const CVV = document.querySelector('#CVV').value;
    const Senha = document.querySelector('#Senha').value;
    const Input = document.getElementsByTagName('input')

    // Verifica se todos os campos estão preenchidos
    if (Nome === '' || Numero_Cartao === '' || CPF === '' || CVV === '' || Senha === '') {
        alert('Por favor preencha todos os campos');
        return false;
    }

    // Verifica se o número do cartão de crédito é válido
    if (!validarNumeroCartao(Numero_Cartao)) {
        alert('Por favor insira um número de cartão válido');
        return false;
    }
    if (!Validar_Senha(Senha)) {
        alert('Por favor insira uma senha valida')
        return false
        Input.style.border = '2px solid red'

    }
    if (!Validar_CVV(CVV)) {
        alert('Por favor insira um CVV valido')
        return false
    }

    // Se todos os campos estiverem preenchidos corretamente, exibe mensagem de sucesso
    alert('Formulário enviado com sucesso!');
    return true;
}

// Executa o código quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#Form').addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio do formulário antes da validação
        if (Validar_Form()) {
            // Se o formulário for válido, pode prosseguir com o envio
            this.submit();
        }
    });
});
