//Exercício 1

function inverteArray(array) {
  //-----------------------------------
  // O que fazemos é percorrer o array de 0 até a metade e trocar o primeiro elemento pelo último, o segundo pelo penúltimo e assim por diante.
  let fixLength = array.length;

  for (let i = 0; i < fixLength / 2; i++) {
    let temporary = array[i];
    let oppositeIndex = fixLength - i - 1;
    array[i] = array[oppositeIndex];
    array[oppositeIndex] = temporary;
  }
  return array;

  //-------------------------------------
  // let result = [];
  // for (let i = array.length - 1; i >= 0; i--) {
  //   result.push(array[i]);
  // }
  // return result;

  //----------------------

  // return array.reverse();
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
  let arrayFinal = [];
  for (let x of array) {
    if (x % 2 === 0) {
      arrayFinal.push(x * x);
    }
  }
  return arrayFinal;
}

//Exercício 3

function retornaNumerosPares(array) {
  //--------------------------------
  let evenNumber = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      evenNumber.push(array[i]);
    }
  }
  return evenNumber;

  //---------------------------------

  // function searchEvenNumber(value) {
  //   if (value % 2 == 0) return value;
  // }

  // let evenNumber = array.filter(searchEvenNumber);
  // return evenNumber;
}

//Exercício 4

function retornaMaiorNumero(array) {
  let valorMaximo = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > valorMaximo) {
      valorMaximo = array[i];
    }
  }
  return valorMaximo;
}

//Exercício 5

function retornaQuantidadeElementos(array) {
  return array.length;
}

//Exercício 6

function retornaExpressoesBooleanas() {
  const booleano1 = true;
  const booleano2 = false;
  const booleano3 = !booleano2;
  const booleano4 = !booleano3;

  const arr = [
    booleano1 && booleano2 && !booleano4,
    (booleano1 && booleano2) || !booleano3,
    (booleano2 || booleano3) && (booleano4 || booleano1),
    !(booleano2 && booleano3) || !(booleano1 && booleano3),
    (!booleano1 && !booleano3) || (!booleano4 && booleano3 && booleano3),
  ];

  return arr;
}

//Exercício 7

function retornaNNumerosPares(n) {
  let evenNumberN = [];
  for (let index = 0; evenNumberN.length < n; index++) {
    if (index % 2 == 0) {
      evenNumberN.push(index);
    }
  }
  return evenNumberN;
}

// Exercício 8

function checaTriangulo(a, b, c) {
  if (a == b && b == c) {
    return "Equilátero";
  } else if (a !== b && b !== c && a !== c) {
    return "Escaleno";
  } else {
    return "Isósceles";
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
  let majorNumber;
  let majorDivisibleByMinor;
  let subtraction;

  if (num1 > num2 && num1 % num2 === 0) {
    majorNumber = num1;
    majorDivisibleByMinor = true;
    subtraction = num1 - num2;
  } else if (num2 > num1 && num2 % num1 === 0) {
    majorNumber = num2;
    majorDivisibleByMinor = true;
    subtraction = num2 - num1;
  } else if (num1 > num2 && num1 % num2 !== 0) {
    majorNumber = num1;
    majorDivisibleByMinor = false;
    subtraction = num1 - num2;
  } else if (num2 > num1 && num2 % num1 !== 0) {
    majorNumber = num2;
    majorDivisibleByMinor = false;
    subtraction = num2 - num1;
  }

  return {
    maiorNumero: majorNumber,
    maiorDivisivelporMenor: majorDivisibleByMinor,
    diferenca: subtraction,
  };
}

// Exercício 10

function segundoMaiorEMenor(array) {
  //---------------------------------------------
  // let copyArray = [0];

  // for (i = 0; i < array.length; i++) {
  //   copyArray[i] = array[i];
  // }

  // let secondMajor = Math.max.apply(Math, copyArray);
  // copyArray.splice(copyArray.indexOf(secondMajor), 1);
  // secondMajor = Math.max.apply(Math, copyArray);

  // let secondMinor = Math.min.apply(Math, copyArray);
  // copyArray.splice(copyArray.indexOf(secondMinor), 1);
  // secondMinor = Math.min.apply(Math, copyArray);

  // const secondMajorAndMinor = [secondMajor, secondMinor];

  // return secondMajorAndMinor;

  //---------------------------------------------
  // let increasing = [];
  // let position = 0;
  // let maximumValue = array[0];
  // let minimumValue = array[0];

  // for (let i = 0; i < array.length; i++) {
  //   if (maximumValue < array[i]) {
  //     maximumValue = array[i];
  //   }
  // }

  // for (let j = 0; j < array.length; j++) {
  //   for (let k = 0; k < array.length; k++) {
  //     if (array[k] != null) {
  //       if (minimumValue > array[k]) {
  //         minimumValue = array[k];
  //         position = k;
  //       }
  //     }
  //   }
  //   increasing[j] = minimumValue;
  //   array[position] = null;
  //   minimumValue = maximumValue;
  // }
  // array = increasing;
  // const secondMinorAndMajor = [array[array.length - 2], array[1]];
  // return secondMinorAndMajor;

  //-----------------------------------------
  // Esta resposta é a mais ótima porque funciona sem importar se o array tem números repetidos

  let maximumValue = array[0];
  let maximumIndex = 0;
  let minimumValue = array[0];
  let minimumIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maximumValue) {
      maximumValue = array[i];
      maximumIndex = i;
    }
    if (array[i] < minimumValue) {
      minimumValue = array[i];
      minimumIndex = i;
    }
  }

  let secondMaximumValue = -1;
  let secondMaximumIndex = -1;
  let secondMinimumValue = -1;
  let secondMinimumIndex = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > secondMaximumValue && i != maximumIndex) {
      secondMaximumValue = array[i];
      secondMaximumIndex = i;
    }
    if (secondMinimumValue == -1 && i != minimumIndex) {
      secondMinimumValue = array[i];
      secondMinimumIndex = i;
    }
    if (array[i] < secondMinimumValue) {
      secondMinimumValue = array[i];
      secondMinimumIndex = i;
    }
  }
  const secondMinorAndMajor = [secondMaximumValue, secondMinimumValue];
  return secondMinorAndMajor;
}

//Exercício 11

function ordenaArray(array) {
  //-----------------------------------------
  // return array.sort(function (a, b) {
  //   return a - b;
  // });

  // -----------------------------------------
  // let order = false;
  // while (!order) {
  //   order = true;
  //   for (let i = 1; i < array.length; i += 1) {
  //     if (array[i - 1] > array[i]) {
  //       order = false;
  //       const increasing = array[i - 1];
  //       array[i - 1] = array[i];
  //       array[i] = increasing;
  //     }
  //   }
  // }
  // return array;

  // ----------------------------------------
  let increasing = [];
  let position = 0;
  let maximumValue = array[0];
  let minimumValue = array[0];

  for (let i = 0; i < array.length; i++) {
    if (maximumValue < array[i]) {
      maximumValue = array[i];
    }
  }

  for (let j = 0; j < array.length; j++) {
    for (let k = 0; k < array.length; k++) {
      if (array[k] != null) {
        if (minimumValue > array[k]) {
          minimumValue = array[k];
          position = k;
        }
      }
    }
    increasing[j] = minimumValue;
    array[position] = null;
    minimumValue = maximumValue;
  }
  return increasing;
}

// Exercício 12

function filmeFavorito() {
  let object = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  };

  return object;
}

// Exercício 13

function imprimeChamada() {
  let object = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: [
      "Meryl Streep",
      " Anne Hathaway",
      " Emily Blunt",
      " Stanley Tucci",
    ],
  };

  return `Venha assistir ao filme ${object.nome}, de ${object.ano}, dirigido por ${object.diretor} e estrelado por ${object.atores}.`;
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
  let rectangularProperties = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2,
  };

  return rectangularProperties;
}

// Exercício 15

function anonimizaPessoa(pessoa) {
  pessoa.nome = "ANÔNIMO";
  return pessoa;
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
];

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
  //-----------------------------
  let arrayMajor = [];
  for (let i = 0; i < arrayDePessoas.length; i++) {
    if (arrayDePessoas[i].idade >= 18) {
      arrayMajor.push(arrayDePessoas[i]);
    }
  }
  return arrayMajor;

  //-------------------------------

  // let newUsers = arrayDePessoas.filter((people) => {
  //   if (people.idade >= 18) {
  //     return people;
  //   }
  // });
  // return newUsers;
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
  //-----------------------------------
  let arrayMinor = [];

  for (let i = 0; i < arrayDePessoas.length; i++) {
    if (arrayDePessoas[i].idade <= 18) {
      arrayMinor.push(arrayDePessoas[i]);
    }
  }
  return arrayMinor;

  //-------------------------------------
  // let newUsers = arrayDePessoas.filter((people) => {
  //   if (people.idade <= 18) {
  //     return people;
  //   }
  // });
  // return newUsers;
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
  //------------------------------------
  let multiplyByTwo = [];
  for (let x of array) {
    multiplyByTwo.push(x * 2);
  }
  return multiplyByTwo;
  //------------------------------------
  // const multiplyByTwo = array.map((two) => {
  //   return two * 2;
  // });
  // return multiplyByTwo;
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  //------------------------------------
  let multiplyStringByTwo = [];
  for (let x of array) {
    multiplyStringByTwo.push(String(x * 2));
  }
  return multiplyStringByTwo;
  //------------------------------------
  // const multiplyStringByTwo = array.map((two) => {
  //   return (two * 2).toString();
  // });
  // return multiplyStringByTwo;
}

// Exercício 17, letra C

function verificaParidade(array) {
  let numberString = [];
  for (let x of array) {
    if (x % 2 == 0) {
      numberString.push(`${x} é par`);
    } else {
      numberString.push(`${x} é ímpar`);
    }
  }
  return numberString;
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
  //-----------------------------------
  let peopleCan = [];

  for (let i = 0; i < pessoas.length; i++) {
    if (
      pessoas[i].altura >= 1.5 &&
      pessoas[i].idade >= 14 &&
      pessoas[i].idade <= 60
    ) {
      peopleCan.push(pessoas[i]);
    }
  }
  return peopleCan;
}
// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
  let peopleCanNot = [];

  for (let i = 0; i < pessoas.length; i++) {
    if (
      pessoas[i].altura < 1.5 ||
      pessoas[i].idade < 14 ||
      pessoas[i].idade > 60
    ) {
      peopleCanNot.push(pessoas[i]);
    }
  }
  return peopleCanNot;
}

//Exercício 19 A

const consultas = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", dataDaConsulta: "04/05/2021" },
];

function ordenaPorNome() {
  //-------------------------------------
  // consultas.sort(function (a, b) {
  //   var nomeA = a.nome.toLowerCase(),
  //     nomeB = b.nome.toLowerCase();
  //   if (nomeA < nomeB) return -1;
  //   if (nomeA > nomeB) return 1;
  //   return 0;
  // });
  // return consultas;

  //-------------------------------------
  let letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Y",
    "Z",
  ];
  let orderedConsults = [];
  let finalConsults = [];

  for (let i = 0; i < consultas.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (letters[j] == consultas[i].nome[0]) {
        if (orderedConsults[j] == undefined) {
          orderedConsults[j] = consultas[i];
        } else {
          orderedConsults[j + 1] = consultas[i];
          let secondLetterPositionA = 0;
          let secondLetterPositionB = 0;
          for (let k = 0; k < letters.length; k++) {
            if (orderedConsults[j].nome[1] == letters[k].toLowerCase()) {
              secondLetterPositionA = k;
            }
            if (orderedConsults[j + 1].nome[1] == letters[k].toLowerCase()) {
              secondLetterPositionB = k;
            }
          }

          let firstPosition = orderedConsults[j];
          let secondPosition = orderedConsults[j + 1];
          if (secondLetterPositionA > secondLetterPositionB) {
            orderedConsults[j] = secondPosition;
            orderedConsults[j + 1] = firstPosition;
          }
        }
      }
    }
  }

  orderedConsults.forEach((item) => finalConsults.push(item));

  return finalConsults;
}

//Exercício 19 B

function ordenaPorData() {
  //--------------------------------------
  // consultas.sort(function (a, b) {
  //   let aa = a.dataDaConsulta.split("/").reverse().join(),
  //     bb = b.dataDaConsulta.split("/").reverse().join();
  //   return aa < bb ? -1 : aa > bb ? 1 : 0;
  // });
  // return consultas;

  //---------------------------------------
  const consultas = [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", dataDaConsulta: "04/05/2021" },
  ];

  //Conver to mm/dd/yyyy
  for (let i = 0; i < consultas.length; i++) {
    let datearray = consultas[i].dataDaConsulta.split("/");
    let newDate = datearray[1] + "/" + datearray[0] + "/" + datearray[2];
    consultas[i].dataDaConsulta = newDate;
  }

  // compare first two elements and the last two elements
  let order = [];
  for (let i = 0; i < consultas.length; i++) {
    if (i == 0) {
      if (
        new Date(consultas[i].dataDaConsulta).getTime() >
        new Date(consultas[i + 1].dataDaConsulta).getTime()
      ) {
        order.push(consultas[i + 1]);
        order.push(consultas[i]);
      } else {
        order.push(consultas[i]);
        order.push(consultas[i + 1]);
      }
    }
    if (i == consultas.length - 1) {
      if (
        new Date(consultas[i - 1].dataDaConsulta).getTime() >
        new Date(consultas[i].dataDaConsulta).getTime()
      ) {
        order.push(consultas[i]);
        order.push(consultas[i - 1]);
      }
    }
  }

  // compare the two minor elements and the two bigger elements
  let finalConsults = [];
  for (let i = 0; i < order.length; i++) {
    if (i == 0) {
      if (
        new Date(order[i].dataDaConsulta).getTime() >
        new Date(order[order.length - 2].dataDaConsulta).getTime()
      ) {
        finalConsults.push(order[order.length - 2]);
        finalConsults.push(order[i]);
      } else {
        finalConsults.push(order[order.length - 2]);
        finalConsults.push(order[i]);
      }
    }
    if (i == 1) {
      if (
        new Date(order[1].dataDaConsulta).getTime() >
        new Date(order[order.length - 1].dataDaConsulta).getTime()
      ) {
        finalConsults.push(order[order.length - 1]);
        finalConsults.push(order[1]);
      } else {
        finalConsults.push(order[1]);
        finalConsults.push(order[order.length - 1]);
      }
    }
  }

  //Conver to dd/mm/yyyy
  for (let i = 0; i < finalConsults.length; i++) {
    let datearray = finalConsults[i].dataDaConsulta.split("/");
    let newDate = datearray[1] + "/" + datearray[0] + "/" + datearray[2];
    finalConsults[i].dataDaConsulta = newDate;
  }
  return finalConsults;
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

function atualizaSaldo() {
  //---------------------------------
  for (let i = 0; i < contas.length; i++) {
    let totalBuy = 0;
    for (let j = 0; j < contas[i].compras.length; j++) {
      totalBuy += contas[i].compras[j];
    }
    contas[i].saldoTotal -= totalBuy;
  }
  return contas;

  //------------------------------------

  // contas.forEach(function callback (count) {
  //   let totalBuy = 0;
  //   count.compras.forEach((price) => {
  //     totalBuy += price;
  //   });
  //   count.saldoTotal -= totalBuy;
  // });
  // return contas;
}
