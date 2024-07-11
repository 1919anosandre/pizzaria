const FormCartao = document.querySelector('.FormCartao');
const FormPix = document.querySelector('.FormPix');
const FormDinheiro = document.querySelector('.FormDinheiro');

function Evento_Mostrar_Ocultar() {
    const Caixa_FormCartao = document.querySelector('.Caixa_FormCartao');
    const Caixa_FormPix = document.querySelector('.Caixa_FormPix');
    const Caixa_FormDinheiro = document.querySelector('.Caixa_FormDinheiro');

    document.addEventListener('DOMContentLoaded', () => {
        Caixa_FormCartao.style.display = 'flex';
        FormCartao.style.border = '02px solid yellow';

        Caixa_FormPix.style.display = 'none';
        Caixa_FormDinheiro.style.display = 'none';

        FormCartao.addEventListener('click', () => {
            Caixa_FormCartao.style.display = 'flex';
            Caixa_FormPix.style.display = 'none';
            Caixa_FormDinheiro.style.display = 'none';
            FormCartao.style.border = '02px solid yellow';
            FormPix.style.border = 'none';
            FormDinheiro.style.border = 'none';






        });

        FormPix.addEventListener('click', () => {
            Caixa_FormPix.style.display = 'flex';
            Caixa_FormCartao.style.display = 'none';
            Caixa_FormDinheiro.style.display = 'none';
            FormPix.style.border = '02px solid yellow';
            FormCartao.style.border = 'none';
            FormDinheiro.style.border = 'none';
          







        });

        FormDinheiro.addEventListener('click', () => {
            Caixa_FormDinheiro.style.display = 'flex';
            Caixa_FormCartao.style.display = 'none';
            Caixa_FormPix.style.display = 'none';
            FormDinheiro.style.border = '02px solid yellow';
            FormPix.style.border = 'none';
            FormCartao.style.border = 'none';
  






        });
    });
};
Evento_Mostrar_Ocultar();

// validar formulario 
function Validar_Form() {
    const Nome = document.querySelector('#Nome').value;
    const Numero_Cartao = document.querySelector('#Numero_Cartao').value;
    const CPF = document.querySelector('#CPF').value;
    const CVV = document.querySelector('#CVV').value;
    const Senha = document.querySelector('#Senha').value;

    // Inicializa o validador do jQuery Validation
    let validator = $(".Form").validate({
        rules: {
            Nome: {
                required: true
            },
            Numero_Cartao: {
                required: true,
                creditcard: true
            },
            CPf: {
                required: true,
                minlength: 11,
                maxlength: 11
            },
            CVV: {
                required: true,
                minlength: 3,
                maxlength: 4
            },
            Senha: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            Nome: "Por favor, insira seu nome.",
            Numero_Cartao: "Por favor, insira um número de cartão válido.",
            CPF: "Por favor, insira um CPF válido (11 dígitos).",
            CVV: "Por favor, insira um CVV válido (3 ou 4 dígitos).",
            Senha: "Por favor, insira uma senha (mínimo de 6 caracteres)."
        }
    });

    // Verifica se o formulário é válido
    if (validator.form()) {
        // Se todos os campos estiverem preenchidos corretamente, pode prosseguir com o envio do formulário
        alert('Formulário enviado com sucesso!');
    } else {
        // Se algum campo não estiver preenchido corretamente, mostra uma mensagem de erro
        alert('Preencha todos os campos corretamente.');
    }
}

// Chama a função ao enviar o formulário
document.querySelector('.Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário antes da validação
    Validar_Form();
});
