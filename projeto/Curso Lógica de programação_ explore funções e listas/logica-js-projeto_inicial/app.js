let listaDeNumerosSorteados = []; // lista para guardar os numeros que o jogador chuta
let numeroLimite = 10; // define o número limite para o jogador escolher no jogo
let numeroSecreto = gerarNumeroAleatorio(); // variavel para guardar o número
let tentativas = 1; // tentativas do jogador
console.log('número Secreto: '+numeroSecreto);

function exibirTextoNaTela(tag, texto) { // função para colocar um texto em uma respectiva tag
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); // responsiveVoice configuração
}

function exibirMensagemInicial() { // função para exibir o texto inicial na tela
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value; // pega o valor colocado no campo do chute
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // operador ternario para colocar a frase no plual ou singular
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; // variavel com a mensagem de vitória e as tentativas
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); // habilita o botão de reinicar
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++; // incrementa o numero de tentativas para variavel
        limparCampo(); // chama a função para limpar o campo do input do jogador
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // sortea o número para colocar na variavel
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; // recebe o tamanho de elementos na lista

    if (quantidadeDeElementosNaLista == numeroLimite) { // esvaziar a lista caso o numero de elementos seja o mesmo do numero limite
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { // se o numero escolhido estiver na lista chama a função novamente
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // se o numero escolhido não estiver na lista, ele coloca na lista
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() { // função que limpa o valor do input
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() { // função para reinciar todo o jogo com novos valores
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

// alternativa ao responsive voice
/*
if ('speechSynthesis' in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR'; 
    utterance.rate = 1.2; 
    window.speechSynthesis.speak(utterance); 
} else {
    console.log("Web Speech API não suportada neste navegador.");
}
*/

// HTML deve ser colocado no head o seguinte trecho
//<script src="https://code.responsivevoice.org/responsivevoice.js"></script>






