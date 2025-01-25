// 2 - Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML= 'Hora do Desafio';

// 3 - Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function buttonConsole() {
    console.log('O botão foi clicado');
}

// 4 - Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function buttonAlert() {
    alert('Eu amo JS');
}

// 5 - Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function buttonPrompt() {
    let cidade = prompt('Qual cidade você é? ');
    alert(`Estive em ${cidade} e lembrei de você`);
}

// 6 - Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function buttonSoma() {
    let numero_1 = parseInt(prompt('Digite o primeiro número: '));
    let numero_2 = parseInt(prompt('Digite o segundo número: '));
    let soma = numero_1 + numero_2
    alert(`A soma de ${numero_1} e ${numero_2} é ${soma}`);
}