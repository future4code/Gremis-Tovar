// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */

// //1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".

// console.log("Bem vindo ao jogo de Blackjack!");

// //2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".

// let newGame = confirm("Quer iniciar uma nova rodada?");

// if (newGame == true) {
//   confirm(
//     "O sistema concederá a você duas cartas do baralho, então você decide se fica lá ou pega mais uma carta."
//   );
//   // Atribuindo valores às cartas de jogador
//   let cardOneUser = comprarCarta();
//   let cardTwoUser = comprarCarta();
//   let cardThreeUser = comprarCarta();
//   let cardForUser = comprarCarta();
//   //Se as duas cartas iniciais do usuário forem dois ases (A), as cartas devem ser sorteadas novamente.
//   if(cardOneUser.valor == 11 && cardTwoUser.valor == 11){
//     cardOneUser = comprarCarta();
//     cardTwoUser = comprarCarta();
//   }
//   // Atribuindo valores às cartas da máquina
//   let cardOneComputer = comprarCarta();
//   let cardTwoComputer = comprarCarta();
//   let cardThreeComputer = comprarCarta();
//   let cardFourComputer = comprarCarta();
//   //Se as duas cartas iniciais do usuário forem dois ases (A), as cartas devem ser sorteadas novamente.
//   if(cardOneComputer.valor == 11 && cardTwoComputer.valor == 11){
//     cardOneComputer = comprarCarta();
//     cardTwoComputer = comprarCarta();
//   }
//   // Soma a puntuação das cartas atribuídas ao usuário
//   let scoreOneUser = cardOneUser.valor + cardTwoUser.valor;
//   let scoreTwoUser = scoreOneUser + cardThreeUser.valor;
//   let scoreThreeUser = scoreTwoUser + cardForUser.valor;
//   // Soma a puntuação das cartas atribuídas ao computador
//   let scoreOneComputer = cardOneComputer.valor + cardTwoComputer.valor;
//   let scoreTwoComputer = scoreOneComputer + cardThreeComputer.valor;
//   let scoreFourComputer = scoreTwoComputer + cardFourComputer.valor;
//   // Imprimir as cartas atribuídas ao usuário
//   console.log("Sua primeira carta é " + cardOneUser.texto);
//   alert("Sua primeira carta é " + cardOneUser.texto);
//   console.log("Sua segunda carta é " + cardTwoUser.texto);
//   alert("Sua segunda carta é " + cardTwoUser.texto);
//   // Imprimir as cartas atribuídas ao computador
//   console.log("Minha primeira carta é " + cardOneComputer.texto);
//   alert("Minha primeira carta é " + cardOneComputer.texto);
//   console.log("Minha segunda carta vai ficar oculta por enquanto");
//   alert("Minha segunda carta vai ficar oculta por enquanto");
//   // Decisão do computador se fica ou continua com 3 ou 4 cartas, depende da puntuação
//   let decisionComputer = scoreOneComputer <= 19;
//   let scoreThreeComputer = scoreOneComputer;
//   if (decisionComputer) {
//     cardThreeComputer;
//     console.log("Minha terceira carta é " + cardThreeComputer.texto);
//     alert("Minha terceira carta é " + cardThreeComputer.texto);
//     scoreThreeComputer = scoreTwoComputer;
//     if(scoreThreeComputer <= 19 ){
//       cardFourComputer;
//     console.log("Minha quarta carta é " + cardFourComputer.texto);
//     alert("Minha quarta carta é " + cardFourComputer.texto);
//     scoreThreeComputer = scoreFourComputer;
//     }
//   } else {
//     console.log("Eu vou ficar aqui!!")
//   }
//   // Perguntamos ao usuário se quer continuar com outra carta ou se fica com a puntuação atual
//   let userDecisions = prompt("Até aquí você tem " + scoreOneUser + "\n ¿Você vai ficar aquí : 0 \n ou vai continuar : 1?","0");
//   // Condicionais: o jogador permanece
//   if (userDecisions == 0) {console.log("Você ficou com " + scoreOneUser + " pontos. \n Minha segunda carta é " + cardTwoComputer.texto + ". \n Eu fiquei com " + scoreThreeComputer + " pontos.");

//     if (scoreOneUser == 21) {
//       console.log("BlackJack! Você ganhou!" + "\n O Jogo Acabou!!");
//     } else if (scoreOneUser == scoreThreeComputer) {
//       console.log("Empate!" + "\n O Jogo Acabou!!");
//     } else if (scoreOneUser > 21) {
//       console.log("Você perdeu!" + "\n O Jogo Acabou!!");
//     } else if (scoreOneUser > 21 && scoreThreeComputer == 21) {
//       console.log("Você perdeu! \n Eu ganhei!" + "\n O Jogo Acabou!!");
//     } else if (scoreOneUser < 21 && scoreOneUser > scoreThreeComputer) {
//       console.log("Você ganhou!" + "\n O Jogo Acabou!!");
//     } else if (scoreOneUser < 21 && scoreOneUser < scoreThreeComputer && scoreThreeComputer <= 21) {
//       console.log("Você perdeu " + "\n Eu ganhei!" + "\n O Jogo Acabou!!");
//     } else if (scoreOneUser < 21 && scoreOneUser < scoreThreeComputer && scoreThreeComputer > 21) {
//       console.log("Você Ganhou!" + "\n O Jogo Acabou!!");
//     }
//   } else if (userDecisions == 1) { // Condicionais: o jogador continua
//     console.log("Sua terceira carta é " + cardThreeUser.texto);
//     alert("Sua terceira carta é " + cardThreeUser.texto);
//     // console.log("Agora você tem uma puntuação de " + scoreTwoUser + "\n E eu tenho uma puntuação de " + scoreThreeComputer);
//     // alert("Agora você tem uma puntuação de " + scoreTwoUser + "\n E eu tenho uma puntuação de " + scoreThreeComputer);

//     // Perguntamos ao usuário se quer continuar com outra carta ou se fica com a puntuação atual
//     let userDecisionsNew = prompt("Até aquí você tem " + scoreTwoUser + "\n ¿Você vai ficar aquí : 0 \n ou vai continuar : 1?","0");

//     // Condicionais: o jogador fica
//     if (userDecisionsNew == 0) {
//     console.log("Você ficou com " + scoreTwoUser + " pontos. \n Minha segunda carta é " + cardTwoComputer.texto + ". \n Eu fiquei com " + scoreThreeComputer + " pontos.");

//       if (scoreTwoUser == 21) {
//         console.log("BlackJack! Você ganhou!" + "\n O Jogo Acabou!!");
//       } else if (scoreTwoUser == scoreThreeComputer) {
//         console.log("Empate!" + "\n O Jogo Acabou!!");
//       } else if (scoreTwoUser > 21) {
//         console.log("Você perdeu!" + "\n O Jogo Acabou!!");
//       } else if (scoreTwoUser > 21 && scoreThreeComputer == 21) {
//         console.log("Você perdeu! \n Eu ganhei!" + "\n O Jogo Acabou!!");
//       } else if (scoreTwoUser < 21 && scoreTwoUser > scoreThreeComputer) {
//         console.log("Você ganhou!" + "\n O Jogo Acabou!!");
//       } else if (scoreTwoUser < 21 && scoreTwoUser < scoreThreeComputer && scoreThreeComputer <= 21) {
//         console.log("Você perdeu " + "\n Eu ganhei!" + "\n O Jogo Acabou!!");
//       } else if (scoreTwoUser < 21 && scoreTwoUser < scoreThreeComputer && scoreThreeComputer > 21) {
//         console.log("Você Ganhou!" + "\n O Jogo Acabou!!");
//       }
//     } else if (userDecisionsNew == 1) {     // Condicionais: o jogador continua com a 4ta carta
//       console.log("Sua quarta carta é " + cardForUser.texto);
//       alert("Sua quarta carta é " + cardForUser.texto);

//       //Imprimo a segunda carta do computador que estava oculta até o momento
//       console.log("Você ficou com " + scoreThreeUser + " pontos. \n Minha segunda carta foi " + cardTwoComputer.texto + ". \n Eu fiquei com " + scoreThreeComputer + " pontos.");
//       if (scoreThreeUser == 21) {
//         console.log("BlackJack! Você ganhou!" + "\n O Jogo Acabou!!");
//       } else if (scoreThreeUser == scoreThreeComputer) {
//         console.log("Empate!" + "\n O Jogo Acabou!!");
//       } else if (scoreThreeUser > 21) {
//         console.log("Você perdeu!" + "\n O Jogo Acabou!!");
//       } else if (scoreThreeUser > 21 && scoreThreeComputer == 21) {
//         console.log("Você perdeu! \n Eu ganhei!" + "\n O Jogo Acabou!!");        
//       } else if (scoreThreeUser < 21 && scoreThreeUser > scoreThreeComputer) {
//         console.log("Você ganhou!" + "\n O Jogo Acabou!!");
//       } else if (scoreThreeUser < 21 && scoreThreeUser < scoreThreeComputer && scoreThreeUser <= 21) {
//         console.log("Você perdeu " + "\n Eu ganhei!" + "\n O Jogo Acabou!!");
//       } else if (scoreThreeUser < 21 && scoreThreeUser < scoreThreeComputer && scoreThreeUser > 21) {
//         console.log("Você Ganhou!" + "\n O Jogo Acabou!!");
//       }
//     }
//   } else {
//     console.log("O jogo Acabou!!");
//   }
// }
