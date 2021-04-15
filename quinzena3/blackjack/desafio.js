/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    //MEU PRÓPIO DESAFIO FOI TENTAR FAZER O PROJETO USANDO MENOS CICLOS IF, E TENTANDO FAZER MENOS LINHAS DE CÓDIGO

//1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".

console.log("Bem vindo ao jogo de Blackjack!");

//2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".

let newGame = confirm("Quer iniciar uma nova rodada?");

if (newGame == true) {
  confirm(
    "O sistema concederá a você duas cartas do baralho, então você decide se fica lá ou pega mais uma carta."
  );
  // Atribuindo valores às cartas e pontoação do jogador
  let userCards = [comprarCarta(), comprarCarta()];
  let userPoints = userCards[0].valor + userCards[1].valor;
  //Se as duas cartas iniciais do usuário forem dois ases (A), as cartas devem ser sorteadas novamente.
  while(userCards[0].valor == 11 && userCards[1].valor == 11) {
    userCards = [comprarCarta(), comprarCarta()];
  }
  // Atribuindo valores às cartas e pontoação da máquina
  let computerCards = [comprarCarta(), comprarCarta()];
  let computerPoints = computerCards[0].valor + computerCards[1].valor;
  //Se as duas cartas iniciais do usuário forem dois ases (A), as cartas devem ser sorteadas novamente.
  while (computerCards[0].valor == 11 && computerCards[1].valor == 11) {
    computerCards = [comprarCarta(), comprarCarta()];
  }

  // Imprimir as cartas atribuídas ao usuário
  console.log("Sua primeira carta é " + userCards[0].texto);
  alert("Sua primeira carta é " + userCards[0].texto);
  console.log("Sua segunda carta é " + userCards[1].texto);
  alert("Sua segunda carta é " + userCards[1].texto);

  // Imprimir as cartas atribuídas ao computador
  console.log("Minha primeira carta é " + computerCards[0].texto);
  alert("Minha primeira carta é " + computerCards[0].texto);
  console.log("Minha segunda carta vai ficar oculta por enquanto");
  alert("Minha segunda carta vai ficar oculta por enquanto");

  let userPickCard = true;
  for (let index = 2; userPickCard && userPoints <= 20; index++) {
    let userWantAnotherCard =
      prompt(
        "Até aquí você tem " +
          userPoints +
          "\n ¿Você vai ficar aquí : 0 \n ou vai continuar : 1?",
        "0"
      );
  //Decisão do usuario
    if (userWantAnotherCard == 1) {
      userCards.push(comprarCarta());
      console.log("Sua outra carta é " + userCards[userCards.length - 1].texto);
      userPoints += userCards[userCards.length -1].valor
    } else {
      userPickCard = false;
    }
  }
  //Decisão do computador
  let computerPickCard = true;
  for (let index = 2; computerPickCard && computerPoints <= 19; index++) {
    computerCards.push(comprarCarta());
    console.log("Minha outra carta é " + computerCards[computerCards.length - 1].texto);
    computerPoints += computerCards[computerCards.length -1].valor
    computerPickCard = computerPoints <= 19;
  }
  //Imprime a segunda carta
  console.log("Minha segunda carta foi " + computerCards[1].texto);

  //Imprime como ficou no final de tudo
  console.log("Pontuação final: " + "\n Você : " + userPoints + "\n Eu: " + computerPoints);

    //Comparação dos resultados finais dependendo se cada decisão tomada pelo usuário e pelo computador
  if (userPoints == 21) {
    console.log("BlackJack! Você ganhou!" + "\n O Jogo Acabou!!");
  } else if (userPoints == computerPoints) {
    console.log("Empate!" + "\n O Jogo Acabou!!");
  } else if (userPoints > 21) {
    console.log("Você perdeu!" + "\n O Jogo Acabou!!");
  } else if (userPoints > 21 && computerPoints == 21) {
    console.log("Você perdeu! \n Eu ganhei!" + "\n O Jogo Acabou!!");
  } else if (userPoints < 21 && userPoints > computerPoints) {
    console.log("Você ganhou!" + "\n O Jogo Acabou!!");
  } else if (userPoints < 21 && userPoints < computerPoints && computerPoints <= 21) {
    console.log("Você perdeu " + "\n Eu ganhei!" + "\n O Jogo Acabou!!");
  } else if (userPoints < 21 && userPoints < computerPoints && computerPoints > 21) {
    console.log("Você Ganhou!" + "\n O Jogo Acabou!!");
  }
} else{
  console.log("Você não quis jogar!! \n Para jogar ou reiniciar, recarregue a página");
}