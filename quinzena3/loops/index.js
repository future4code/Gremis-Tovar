/*Exercicios de Interpretação */

//EXERCÍCIO 1_O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// Declara una variável com valor inicial de 0 antes de começar o ciclo
// Dentro do for está a condição para executar o ciclo, neste caso o index deve ser executado até que seja menor a 5
// Na terceira declaração a variavél let vai ser redeclarada conforme a condição acima e vai ir sendo sumada ao i
//  valor = valor + i
// Então no primeiro ciclo                  -> valor = 0 + 1 = 1
// No segundo ciclo                         -> valor = 1 + 2 = 3
// Terceiro ciclo                           -> valor = 3 + 3 = 6
// E no último ciclo que é i < 5 = 4, seria -> valor = 6 + 4 = 10
// Por isso o valor impresso no console é 10, ou seja, está fazendo uma iteração do valor 4 vezes.

//EXERCÍCIO 2_Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a. O que vai ser impresso no console?
// [19, 21, 23, 25, 27, 30] os números menor do que 18.
// b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// Sim seria suficiente
// Agradeço a este link de stackoverflow pela resposta
// https://stackoverflow.com/questions/34348937/access-to-es6-array-element-index-inside-for-of-loop
// E seria desse jeito:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let [index, numero] of lista.entries()) {
//   if (numero > 18) {
// 		console.log("index: " + index + "\n" + "valor: " + numero)
// 	}
// }

/*DESAFIO 1_Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?*/

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// O laço while faz que o programa imprima 4 vezes (se o usuário digitasse o número 4) a variável linha
// Enquanto quantidadeAtual seja menor do que 4 (o número que o usuário digite), imprime a `linha`
// 0 < 1 -> imprime a linha
// 0 < 2 -> imprime a linha
// 0 < 3 -> imprime a linha
// 0 < 4 -> imprime a linha
// Vamos ter então 4 linhas, o que vai ir dentro da linha vai ser definido pelo laço for que está dentro do while
// Ao inicio se declara a variável vazia, mas vai estar esperando um valor tipo string que vai ser definido no laço
// Este for vai determinar a quantidade de "0" (neste caso) que vai se repetir dentro de cada linha
//  linha = "linha + "0""
// Então no primeiro ciclo                  -> linha = "" + "0" = "0"         se fosse quantidadeAtual + 2 começaria  -> linha = "" + "00" = "00" 
// No segundo ciclo                         -> linha = "0" + "0" = "00"                e iria aumentando de 1 em 1    -> linha = "00" + "0" = "000" 
// Terceiro ciclo                           -> linha = "00" + "0" = "000"                                             -> linha = "000" + "0" = "0000"
// E no último ciclo, seria                 -> linha = "000" + "0" = "0000"                                           -> linha = "0000" + "0" = "00000"
//Como são string vão ir se juntando em uma linha só


/*Exercicios de Escrita de Código */

// EXERCÍCIO 3_ Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55, 90, 40, 150, 50, 70, 31, 80, 180, 100, 193, 170, 65]


// a. Escreva um programa que:

// - **Imprima** cada um dos valores do array original.

// for(let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// b. Escreva um programa que:

// - **Imprima** cada um dos valores do array original divididos por 10

// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]/10)
// }

// c. Escreva um programa que:

// - **Crie** um novo array contendo, somente, os números pares do array original.
// let newArray=[]
// for(let i = 0; i < array.length; i++) {
//     if(array[i] % 2 == 0){
//         newArray.push(array[i])
//     }
// }
//- **Imprima** esse novo array
// console.log(newArray)

// d. Escreva um programa que:

// - **Crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`"

// for (let [index, numero] of array.entries()) {
//     // - **Imprima** este novo array
//     console.log("O elemento do índex : " + index + " é: " + numero)
// }


// e. Escreva um programa que imprima no console o maior e o menor números contidos no array original

// let valorMaximo = 0;
// let valorMinimo = array[0]; //Pelo momento o mínimo sera o primeiro número do nosso array

// let valorMinimo = Math.min(...array) ; O valor minimo se pode achar só fazendo esta função

// for(let i = 0; i < array.length; i++) {
//     if(array[i] > valorMaximo){
//         valorMaximo = array[i]
//     } else if (array[i] < valorMinimo){
//         valorMinimo = array[i]
//     }
// }

// console.log("O maior número e: ", valorMaximo)
// console.log("O menor número e: ", valorMinimo)


/*DESAFIOS*/

// DESAFIO 1_Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:

// Vamos jogar!
// O número chutado foi: 3
// Errrrrrrrou, é maior
// O número chutado foi: 18
// Errrrrrrrou, é menor
// O número chutado foi: 15
// Errrrrrrrou, é menor
// O número chutado foi: 11
// Acertou!!
// O número de tentativas foi: 4 


// Um resumo das funcionalidades são:

// - Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
// - A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:
//     - O número chutado, com a mensagem: `O número chutado foi: <número>`
//     - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`
// - Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`



// let firstPlayer = parseInt(prompt("Digita um número para que o outro jogador adivinhe.")); 

// console.log("Vamos jogar!");
// let count = 1;
// while(true){ // O while permitirá que todo o código seja executado até que haja um break. Neste caso, o usuário continuará colocando o número até que o adivinhe
    
// let secondPlayer = prompt("Digita um número até adivinhar o número mágico que digitou o outro jogador. \n Se quiser sair do jogo é só digitar o número 0 e clicar OK"); 
// if (secondPlayer != 0) {
//     count++
// }

// if(secondPlayer == firstPlayer){  
//     console.log("O número chutado foi: " + secondPlayer)
//     console.log("Acertou!!  O número de tentativas foi: " + count);
//     alert("Acertou!!");
//   break;
// }
// else if(secondPlayer == 0){
//   break;
// }
// else if(secondPlayer < firstPlayer){
//     console.log("O número chutado foi: " + secondPlayer)
//     console.log("Errooooou!! \n O número é menor");
//     alert("Errooooou!! \n O número é menor");
// }
// else if(secondPlayer > firstPlayer){
//     console.log("O número chutado foi: " + secondPlayer)
//     console.log("Errooooou!! \n O número é menor");
//     alert("Errooooou!! \n O número é maior");
// }

// }




// DESAFIO 2_Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas independentemente. Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.

// Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? O que você poderia ter feito para que fosse mais fácil? **Deixe comentários no seu código sobre esta reflexão.**


let max = 100;
let min = 1; 
let computer = Math.random()*(max-min) + min; // Equação que gera um número entre o número máximo e o número mínimo que é minimo
computer = parseInt(computer); // A função parseInt recebe um parâmetro e o transforma em número inteiro, neste caso o número inteiro, neste caso o número variável gera um número entre 1 e 100 que será convertido em inteiro, no caso seja flutuante
console.log("Vamos jogar!");
let count = 1;

while(true){ // O while permitirá que todo o código seja executado até que haja um break. Neste caso, o usuário continuará colocando o número até que o adivinhe
    
    let user = prompt("Digita um número até adivinhar o número mágico. \n Se quiser sair do jogo é só digitar o número 0 e clicar OK"); 
    if (user != 0) {
        count++
    }
if(user == computer){ 
    console.log("O número chutado foi: " + user)
    console.log("Acertou!!  O número de tentativas foi: " + count);
    alert("Acertou!!");
  break;
}
else if(user == 0){
  break;
}
else if(user < computer){
    console.log("O número chutado foi: " + user)
    console.log("Errooooou!! \n O número é menor");
    alert("Errooooou!! \n O número é menor");
}
else if(user > computer){
    console.log("O número chutado foi: " + user)
    console.log("Errooooou!! \n O número é menor");
    alert("Errooooou!! \n O número é maior");
}

}


// Em ambos desafios tive que pensar na lógica do exercício,
// mas a lógica do computador, foi tranquilo (Eu gosto de um pouquinho de cálculo numérico, álgebra, probabilidade e estatística, geometria e matemática, meu gosto termina quando chegamos às integrações de equações complexas)
// mas o que mais me custou em ambos foi implementar o contador de tentativas,
// tive que fazer uma pesquisa no google para abrir um pouco o meu pensamento e poder implementá-lo.