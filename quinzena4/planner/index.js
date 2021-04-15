let dias = [
  document.getElementById("domingo"),
  document.getElementById("segunda"),
  document.getElementById("terca"),
  document.getElementById("quarta"),
  document.getElementById("quinta"),
  document.getElementById("sexta"),
  document.getElementById("sabado"),
];

let contador=[0, 0, 0, 0, 0, 0, 0]

function criarTarefa() {
  let inputTarefa = document.getElementById("tarefa");
  let diasSemana = document.getElementById("dias-semana");
  if (inputTarefa.value !== "") {
    carregarCadaTarefa(inputTarefa, diasSemana);
    inputTarefa.value = "";
  } else {
    alert("Tem que adicionar uma tarefa");
  }
}

function carregarCadaTarefa(inputTarefa, diasSemana) {
  switch (diasSemana.value) {
    case "domingo":
      contador[0]++;
      dias[0].innerHTML += `<li id="D${contador[0]}" onclick="riscarTarefa(D${contador[0]})">${inputTarefa.value}</li>`;
      break;
    case "segunda":
      contador[1]++;
      dias[1].innerHTML +=  `<li id="SG${contador[1]}" onclick="riscarTarefa(SG${contador[1]})">${inputTarefa.value}</li>`;
      break;
    case "terca":
      contador[2]++;
      dias[2].innerHTML +=  `<li id="T${contador[2]}" onclick="riscarTarefa(T${contador[2]})">${inputTarefa.value}</li>`;
      break;
    case "quarta":
      contador[3]++;
      dias[3].innerHTML +=  `<li id="QR${contador[3]}" onclick="riscarTarefa(QR${contador[3]})">${inputTarefa.value}</li>`;
      break;
    case "quinta":
      contador[4]++;
      dias[4].innerHTML +=  `<li id="QN${contador[4]}" onclick="riscarTarefa(QN${contador[4]})">${inputTarefa.value}</li>`;
      break;
    case "sexta":
      contador[5]++;
      dias[5].innerHTML +=  `<li id="SX${contador[5]}" onclick="riscarTarefa(SX${contador[5]})">${inputTarefa.value}</li>`;
      break;
    case "sabado":
      contador[6]++;
      dias[6].innerHTML +=  `<li id="SB${contador[6]}" onclick="riscarTarefa(SB${contador[6]})">${inputTarefa.value}</li>`;
      break;
  }
}

function limparTudo() {
  contador=[0, 0, 0, 0, 0, 0, 0]

  for (let i = 0; i < 7; i++) {
    dias[i].innerHTML = ``;
  }
}

function riscarTarefa(element) {
  element.style.textDecoration = "line-through red";
}