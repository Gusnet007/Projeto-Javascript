// 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
// let altura = 1.70;
// let peso = 67;

// function calcularIMC(h, p) {
//     IMC = p / (h*h);
//     return IMC
// }

// alert('IMC: '+calcularIMC(altura, peso));

// 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
// let numero = 6;

// function calcularFatorial(n) {
//     fatorial = 1;
//     contador = 0;
//     while (contador != n) {
//         fatorial *= (n-contador);
//         contador++
//     }
//     return fatorial
// }
// alert(`fatorial de ${numero} é ${calcularFatorial(numero)}`);

// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
// let valorDolar = 100;


// function converterDolar(valor) {
//     let cambio = 4.80;
//     conversao = valor * cambio;
//     return conversao
// }
// alert(`O valor do Dólar de ${valorDolar} em reais é  ${converterDolar(valorDolar)}`);

// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
// let altura = 5;
// let largura = 10;

// function calcularPerimetro(h, l){
//     perimetro = (2*h) + (2*l);
//     return perimetro
// }
// alert("Perimetro é "+calcularPerimetro(altura, largura));

// 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
// let raio = 10;

// function calcularCirculo(r){
//     pi = 3.14
//     area = pi * (r*r);
//     perimetro = 2 * pi * r
//     return 'Perimetro é' +perimetro+ ' area é '+area
// }
// alert(calcularCirculo(raio));

// 6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
// let numero = 8;

// function tabuada(n) {
//     i = 0
//     while (i < 11) {
//         tab = i * n
//         console.log( `${n} * ${i} = ${tab}`);
//         i ++
//     }
// }
// tabuada(numero);