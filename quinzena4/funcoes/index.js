/*Exercícios de Interpretação */

//EXERCÍCIO 1_Leia o código abaixo:

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//a. O que vai ser impresso no console?

//O código faz as oprações:
// 2 x 5 = 10 e 10 x 5 = 50
//Então vai imprimir o número 10 e 50 respectivamente

//b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// Se retirasse o `console.log` não vai se imprimir nada na consola do navegador, pois a função do return não é imprimir na consola e sim é retornar um valor da função na memória

//EXERCÍCIO 2_ Leia o código abaixo:

// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

//a. Explicite quais são as saídas impressas no console

//Esse programa está pedindo para imprimir os index que sejam menores do que 2, ou seja o [0] e o [1].
// então a salida no console seriam os dois primeiros nomes: "Darvas" e "Caio".

//b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?

//Seguiria imprimendo na consola os dois primeiros nomes.
//Nesse caso se o array tem só esses dois nomes, vai imprimir eles: "Amanda" e "Caio".


//EXERCÍCIO 3_ O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!

// const operationsEvent = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//       if (x % 2 === 0) {
//           arrayFinal.push(x * x) //cada número par multiplicado por si mesmo dá outro número par
//       }
//     }
  
//     return arrayFinal;
//   }

// Para cada index del `array`, se o index resulta ser um número par,
//multiplica esse index por ele mesmo e colocalo ao final do `arrayFinal`,
//ou seja, o array final vai ficar igual, mas o array que recebe como parámetro vai tomar os números pares e vai multiplicar por ele mesmo.
// Isso acontece supondo que receba o valor de tipo número, se recebe outro valor, simplesmente vai retornar os valores do `arrayFinal`, embora esteja vazio.
// É claro, do jeito que está a função agora, não retorna nada, a solução seria adicionar no final a seguinte linha:
// console.log(operationsEvent([])) e adicionar números dentro de cada array para entender melhor o método;
// O nome que eu daria para a função seria `operationsEvent`


/*Exercícios de Escrita de Código */

//EXERCÍCIO 4_ Escreva as funções explicadas abaixo:

// a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprimir essa mensagem.

// let presentation = () => {
//     let data = ['Gremis', 31, 'Fortaleza', true]
//     if (data[3] == true){
//         data[3]= 'sou estudante';
//     } else if(data[3] == false) {
//         data[3]= 'não sou estudante';
//     }
//     return `Eu sou ${data[0]}, tenho ${data[1]} anos, moro em ${data[2]} e ${data[3]}.`
//   };
  
//   console.log( presentation() );

//b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e um `boolean` que representa se é estudante ou não. Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.

// let newPresentation = (data) => {
//     if (data[3] == true){
//         data[3]= 'sou estudante';
//     } else if(data[3] == false) {
//         data[3]= 'não sou estudante';
//     }
//     return `Eu sou ${data[0]}, tenho ${data[1]} anos, moro em ${data[2]} e ${data[3]}.`
// };

// console.log( newPresentation(['Gremis', 31, 'Fortaleza', true]) );

//EXERCÍCIO 5_Escreva as funções explicadas abaixo:

// a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// let sum = (a, b) => {
//     return a + b
// };

// console.log( sum(1, 2) );

// b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// let comparison = (a, b) => {
//     if(a>=b){
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log( comparison(8, 4) );

// c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 `console.log` dentro da função. Use outra estrutura de código para isso)

// let greetings = (message) => {
//     let total = 10;
//     for (let i = 0; i < total; i++){
//         console.log(message);
//     }
// };

// greetings("Lo único imposible es aquello que no intentas");


//EXERCÍCIO 6
    // const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

// let newArray = (array) => {
//     console.log("A quantidade de elementos deste array é: " + array.length)
// };

// newArray([10, 23, 45, 78, 90, 52, 35, 67, 84, 22]);

// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// let number = (a) => {
//     if ( a % 2 === 0){
//     return true
//     }else{
//     return false
//     }
// };

// console.log(number(8));

// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

// let otherArray = (array) => {
//     let evenArray = []
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] % 2 == 0){
//            evenArray.push(array[i])
//         }
//     }
//     console.log(evenArray);
//     console.log("O array de números pares é: " + evenArray + " e a quantidade de elementos pares é: " + evenArray.length);
// };

// otherArray([10, 23, 45, 78, 90, 52, 35, 67, 84, 22]);

// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par

// let listNumbers = (array) => {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] % 2 == 0){
//            console.log(array[i] + ': ' + true);
//         } else {
//             console.log(array[i] + ': ' + false);
//         }
//     }
// };

// console.log(listNumbers([10, 23, 45, 78, 90, 52, 35, 67, 84, 22]));

/*DESAFIOS*/

// EXERCÍCIO 1.1_ Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro.

// (parameter) => {
//    return parameter;
// };

// console.log(("oi") );


// EXERCÍCIO 1.2_Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimí-lo.

// let values = (a, b) => {
//     console.log(a + b)
// };

// values(1, 2);

//EXERCÍCIO 2.a_ Escreva uma função que receba um array como parâmetro e retorne um array com apenas os números pares e multiplicados por 2.

// const numeros = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//       if (x % 2 === 0) {
//           arrayFinal.push(x * 2)
//       }
//     }
//     return arrayFinal;
//   }

//   console.log(numeros([0, 8, 23, 16, 10, 15, 41, 12, 13]))

//EXERCÍCÍO 2.b_Escreva uma função que receba um array como parâmetro e retorne o maior número deste array.

// const numeros = (array) => {
//     let valorMaximo = 0;
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] > valorMaximo){
//             valorMaximo = array[i]
//         }
//     }
//     console.log("O maior número e: ", valorMaximo)
//   }

// numeros([0, 8, 23, 16, 10, 15, 41, 12, 13]);

//EXERCÍCIO 2.c_c. Escreva uma função que receba um array como parâmetro e retorne o índice do maior número deste array.


// const numeros = (array) => {
//     let valorMaximo = 0;
//     let indexMaximo = 0;
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] > valorMaximo){
//             valorMaximo = array[i]
//             indexMaximo = [i]
//         }
//     }
//     console.log("O indice do maior número do array é: " + indexMaximo)
//   }

// numeros([0, 8, 23, 16, 10, 15, 41, 12, 13]);

//EXERCÍCIO 2.d_ Escreva uma função que recebe um array como parâmetro e retorne este array invertido.
//Pode ser desse jeito
// const numeros = (array) => {
//    let arrayReverse= array.reverse();
//     return arrayReverse;
// }

// console.log(numeros([0, 8, 23, 16, 10, 15, 41, 12, 13]));

// Pode ser também desse jeito

const numeros = (array) => {
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i]);
    }
    return result;
  };
  
  console.log(numeros([0, 8, 23, 16, 10, 15, 41, 12, 13]));