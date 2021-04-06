/*Exercicios de Interpretação */

// 1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2        //bool3 é o contrário de bool2, se bool2 é false, então !bool2 é true

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
// Resposta:
// true e false = false
// O resultado é <a. false>

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)
// Resposta:
// true e false e true = false
// O resultado é <b. false>

// resultado = !resultado && (bool1 || bool1) //usamos a redeclaração anterior da variável resultado
// console.log("c. ", resultado)
// Resposta:
// resultado = false, então o !resultado= true
// true e (true ou true)
// true e true
// O resultado é <c. true>

// console.log("e. ", typeof resultado)
// Resposta:
// O resultado é <e. boolean>


// 2. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// let array
// console.log('a. ', array)
// Resposta:
// O array está declarado, mas não tem valor algum
// O resultado é <a. undefined>

// array = null
// console.log('b. ', array)
// Resposta:
// O resultado é <b. null>

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// Resposta:
// O array tem 11 elementos dentro dele
// O resultado é <c. 11>

// let i = 0
// console.log('d. ', array[i])
// Resposta:
// Manda a imprimir o elemento [i] do array, se i é 0, quer dizer que seria o elemento 0 do array
// O resultado é <d. 3>

// array[i+1] = 19
// console.log('e. ', array)
// Resposta:
// A variável array é redeclarada, neste caso o indice i+1 -> 0+1 = 1, corresponde ao número 4.
// O número 4 ubicado no índice 1 vai ser substitredeclarado como 19 
// O resultado é <e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]>

// const valor = array[i+6]
// console.log('f. ', valor)
// Resposta:
// Está imprimindo o indice do array, i + 6 ou 0 + 6.
// O índice 6 do array corresponde ao número 9.
// O resultado é <f. 9>

/*Exercicios de Escrita de Código */

// 1. Faça um programa que:
// a. Pergunte a idade do usuário
// b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga

let age = Number(prompt("Qual é sua idade?"))
let ageFriend = Number(prompt("Qual é sua idade de seu melhor amigo ou da sua melhor amiga?"))
let comparison = age > ageFriend
let difference = age - ageFriend

// c. Imprima na tela a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false). Para isso, use a variável criada no item (b) para definir qual será a resposta.
console.log("Sua idade é maior do que seu melhor amigo ou sua melhor amiga? " + comparison)
// d. Imprima na tela a diferença de idade (não tem problema se sair um número negativo)
console.log(difference)

// 2. Faça um programa que:
// a. Peça ao usuário que insira um número par.
let evenNumber = Number(prompt("Insira um número par"))
let division = evenNumber%2
// b. Imprima na tela o resto da divisão desse número por 2.
console.log(division)
// c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Sim, se percebe uma característica dos números pares. Todo número par dividio por 2, tem como resto o número 0.
// d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// Sim, se percebe uma característica dos números impares. Todo número é considerado ímpar quando, ao dividi-lo por 2, o resto dele será diferente de 0.


// 3. Faça um programa, seguindo os passos:
// a. Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
let listaDeTarefas= []
// b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
let oneQuestion = prompt("1. Escreva a primeira tarefa que tem que realizar no dia de hoje")
listaDeTarefas.push(oneQuestion)
let twoQuestion = prompt("2. Escreva a segunda tarefa que tem que realizar no dia de hoje")
listaDeTarefas.push(twoQuestion)
let threeQuestion = prompt("3. Escreva a terceira tarefa que tem que realizar no dia de hoje")
listaDeTarefas.push(threeQuestion)

// c. Imprima o array na tela
console.log(listaDeTarefas)
// d. Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
let i= Number(prompt("Digite o **índice** de uma tarefa que já realizou sendo: 0 a primeira tarefa, 1 a segunda tarefa e 2 a terceira tarefa"))
// e. Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(i, 1)
// f. Imprima o array na tela
console.log(listaDeTarefas)

// 4. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

let userName = prompt("Qual é seu nome?")
let userEmail = prompt("Qual é seu e-mail?")

console.log("O e-mail " + userEmail + " foi cadastrado com sucesso. " + "Seja bem-vinda(o), " + userName + "!")