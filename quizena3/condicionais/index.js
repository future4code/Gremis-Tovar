/*Exercicios de Interpretação */

// EXERCÍCIO 1_Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// Explique o que o código faz.
// A primeira coisa é que pede ao usuário digitar um número para testar, guardamos essa resposta em uma constante
// Convertimos a resposta do usuário a tipo número para poder fazer uma comparação e guardamos esta conversão também em uma constante.
// Seguidamente começamos um ciclo if/else e testamos se o número que o usuário digitou é un número par, sendo verdadeira está condição significa que o usuário passou o teste
// Se no caso contrario o resto da divisão é diferente do número zero, ou seja, o número que usuário digitou para testar é ímpar, ele não passou no teste.

// Qual o teste que ele realiza?
// Ele testa se o usuário passou no teste ou não, colocando como condição se o número é par ou ímpar

// Para que tipos de números ele imprime no console "Passou no teste"?
// Para os números que resultam pares

// Para que tipos de números a mensagem é "Não passou no teste"?
// Para os números contrarios aos pares, ou seja, os ímpares

// EXERCÍCIO 2_O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// a. Para que serve o código acima?
// É um sistema que serve para olhar o preço das frutas.

// b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// A maçã custa 2.25 reais.

// c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// Se o usuário digita `Pêra`, se retiram do código o `break` do ítem C, o que vai acontecer é que vai se executar a condição imediata, ou seja a do default, ele não vai executar o preço da `Pêra`, senão que vai tomar a `Pêra`, como default.
// Então vai imprimir para o usuário que o preço da `Pêra` é 5 reais.

// EXERCÍCIO 3_Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)


// a. O que a primeira linha está fazendo?
// Está dizendo ao usuário que digite o primero número e guarda esse valor em uma constante chamada `numero`

// b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Como o número 10 é maior que zero, tal como disse a condição dentro do ciclo `if`, então imprime no console que `"Esse número passou no teste"`
// Se o número fosse menor que zero, neste caso -10, ela simplesmente vai ignorar esse caso, proque o ciclo if, só está condicionado para um caso só.
// No caso quiséssemos que este código funcionasse para valores menores do que zero, temos que condicionar o caso para numero < 0, com o `else`.

// c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim, tem um erro. A variavél `mensagem` não está definida.
// Isto acontece porque quando usamos `let`, a variável vai funcionar só dentro do escopo onde foi declarada, porque ela é local. 
// Para que funcione se tem que declarar no escopo pai e ser "redeclarada" dentro do filho, ou usar ela no bloco principal
// Também funcionaria se é declarada com o `var`, que funciona a nivel global

/*Exercicios de Escrita de Código */

// EXERCÍCIO 4_Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// 1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
let ageUser = prompt("Qual é sua idade?")
// 2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
let convertToNumber = Number(ageUser)
// 3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
if(convertToNumber >= 18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}


// EXERCÍCIO 5_Agora faça um programa que verifica que turno do dia um aluno estuda.

//Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno).
let turnUser = prompt("Oi! \n Digite o turno do dia em que você estuda \n **M** (matutino) \n **V** (Vespertino) \n **N** (Noturno)")

//Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

if (turnUser == "M"){
    console.log("Bom Dia!");
} else if (turnUser == "V"){
    console.log("Boa Tarde!");
} else if (turnUser == "N"){
    console.log("Boa Noite!");
}

// EXERCÍCIO 6_Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

let turnoUsuario = prompt("Oi! \n Digite o turno do dia em que você estuda \n **M** (matutino) \n **V** (Vespertino) \n **N** (Noturno)")
switch (turnoUsuario) {
  case "M":
    console.log("Bom Dia!");
    break;
  case "V":
    console.log("Boa Tarde!");
    break;
  case "N":
    console.log("Boa Noite!");
    break;
}

// EXERCÍCIO 7_Considere a situação: você vai no cinema com um amigo ou amiga,
// porém ele/ela só assiste filme do gênero fantasia e se o ingresso está abaixo de 15 reais.
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
// então verifique se seu amigo ou amiga vai topar assistir o filme.
// Caso positivo, imprima no console a mensagem: "Bom filme!"
// caso contrário, imprima "Escolha outro filme :("


let genero = prompt("Qual gênero de filme vão assistir?")
let ingresso = Number(prompt("Qual preço do ingresso você quer?"))
let generoAmigo = "Fantasia"
let preco = 15

if(generoAmigo == genero && ingresso < preco){
    console.log("Bom filme!!")
} else {
    console.log("Escolha outro filme!!")
}