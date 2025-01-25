// alert("Hello Word");

let numeroSecreto = parseInt(Math.random() * 10 + 1); // número sorteado pela Math.Random
console.log(numeroSecreto);
let chute = 0; // variavel para o usuário colocar seu número
let contador = 1 // conta as tentativas do jogador

// condicional até acertar o número
while (chute != numeroSecreto) {
    chute = prompt('Digite um número entre 1 e 10: ');
    if (numeroSecreto == chute) {
        break; // interropmper o lançoe sair do While
    } else {
        alert('Vocêe errou o numero secreto e você escolheu '+ chute);
        contador += 1 // incrementa o número de tentativas
    }
}

// operador ternário
let tentativas = contador > 1 ?  'Tentativas' : "tentativa";
alert(`Isso aí, Descobriu o número secreto! ${numeroSecreto} com ${contador} ${tentativas}`);

// alternativa ao operador ternário
// if (contador == 1) {
//     alert(`Isso aí, Descobriu o número secreto! ${numeroSecreto} com ${contador} tentativa`);
// } else {
//     alert(`Isso aí, Descobriu o número secreto! ${numeroSecreto} com ${contador} tentativas`);
// }
