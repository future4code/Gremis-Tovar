//Exercícios de interpretação de código

/*1. Analise o programa abaixo e diga o que será impresso no
console, SEM EXECUTAR o programa*/

// a = 10
// b = 10

// console.log(b) -> Vai imprimir o número 10 correspondente ao valor de b

// b = 5

// console.log(a, b) -> Vai imprimir o número 10 correspondente ao valor de a, e o número 5 correpondente à redeclaração do b.

/* Analise o programa abaixo e diga o que será impresso no
console, SEM EXECUTAR o programa */

// a = 10
// b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c) -> Vai imprimir 10 para cada letra, porque a foi redeclarada no final como igual ao b, b foi redeclarada também como igual à c, da mesma forma que c foi redeclarada como igual à a, que é 10, ou seja, as 3 letras são iguais a 10.

//Exercícios de escrita de código

/*1. Construa um programa, seguindo os seguintes passos:*/

// a) Declare uma variável para armazenar um nome, sem atribuir um valor.

let nome;

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

let idade;

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

console.log(typeof nome);
console.log(typeof idade);

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
/* O resultado retorna indefinido porque a variável que está sendo
avaliada não tem um valor atribuído */

// d) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

let nomeUsuario = prompt("Qual é o seu nome?");
let idadeUsuario = prompt("Qual é sua idade?");

//Redeclaro as variáveis

nome = nomeUsuario;
idade = idadeUsuario;

console.log(nome, idade);

// e) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

console.log(typeof nome);
console.log(typeof idade);

/* O resultado é que as duas variáveis são de tipo string, porque o
método Prompt em JavaScript sempre irá converter os dados do usuário
a uma string(texto). Para que retorne outro valor se deve convertir
o que se recebe do usuário a outro tipo de dados usando outras funções
 */

// f) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu

console.log("Olá", nome, "você tem", idade, "anos.");

/*2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui) */

let perguntas = [
  prompt("1. Qual é o seu filme favorito?"),
  prompt("2. Qual é o sua música favorita?"),
  prompt("3. Qual é o seu país favorito?"),
  prompt("4. Qual é o sua comida favorita?"),
  prompt("5. Quantos projetos de programação tem feito até agora?"),
];

console.log("1. Qual é o seu filme favorito?", "\n", "Resposta:", perguntas[0]);
console.log("2. Qual é o sua música favorita?", "\n", "Resposta:", perguntas[1]);
console.log("3. Qual é o seu país favorito?", "\n", "Resposta:", perguntas[2]);
console.log("4. Qual é o sua comida favorita?", "\n","Resposta:", perguntas[3]);
console.log("5. Quantos projetos de programação tem feito até agora?", "\n","Resposta:", perguntas[4]);

/*3. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. */

let comidaPreferida = [
  "Arepa",
  "Cachapa",
  "Macarrâo com frango guisado",
  "Arroz chinês",
  "Shawarma",
];

console.log(comidaPreferida);

console.log(
  "Essas são as minhas comidas preferidas:",
  "\n",
  "1.",
  comidaPreferida[0],
  "\n",
  "2.",
  comidaPreferida[1],
  "\n",
  "3.",
  comidaPreferida[2],
  "\n",
  "4.",
  comidaPreferida[3],
  "\n",
  "5.",
  comidaPreferida[4]
);

let comidaUsuario = prompt("Qual é sua comida preferida?");

comidaPreferida[1] = comidaUsuario;

console.log(
  "Essas são as comidas preferidas do usuário:",
  "\n",
  "1.",
  comidaPreferida[0],
  "\n",
  "2.",
  comidaPreferida[1],
  "\n",
  "3.",
  comidaPreferida[2],
  "\n",
  "4.",
  comidaPreferida[3],
  "\n",
  "5.",
  comidaPreferida[4]
);

//   c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

let questions = [
  "Você está estudando programação hoje?",
  "Você conhece São Paulo?",
  "Você gosta do Carnaval?",
];

let answers = [true, true, false];

console.log(questions[0], answers[0]);
console.log(questions[1], answers[1]);
console.log(questions[2], answers[2]);
