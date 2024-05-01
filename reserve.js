// esconder e mostrar caixas do pagamento das pizzas
const FormCartao = document.querySelector('.FormCartao');
const FormPix = document.querySelector('.FormPix');
const FormDinheiro = document.querySelector('.FormDinheiro');
const Forma_Pagamento_MeuPedido = document.querySelector('.Forma_Pagamento_MeuPedido');

function Evento_Mostrar_Ocultar(){
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
const Pizza1 = document.querySelector('.Pizza1');
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
            // Adicione outros casos conforme necessário
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

//validações
const numeroCartaoInput = document.getElementById('Numero_Cartao');

function validarNumeroCartao() {
    const numeroCartao = numeroCartaoInput.value.trim();

    if (validarNumeroCartao(numeroCartao)) {
        alert('Número do cartão válido!');
    } else {
        alert('Número do cartão inválido!');
    }
}

function validarNumeroCartao(numero) {
    // Remover espaços em branco e hífens do número do cartão
    numero = numero.replace(/\s/g, '').replace(/-/g, '');

    if(numeroCartaoInput == ''){
    alert(' Por Favor preencha seu numero do cartao ')
    }

    // Verificar se o número do cartão tem 16 dígitos
    if (numero.length !== 16) {
        return false;
    }

    // Aplicar o algoritmo de Luhn
    let soma = 0;
    for (let i = 0; i < 16; i++) {
        let digit = parseInt(numero[i]);
        if ((i % 2) === 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        soma += digit;
    }
    return (soma % 10) === 0;
}
