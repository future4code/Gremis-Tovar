let dias = [
  document.getElementById("domingo"),
  document.getElementById("segunda"),
  document.getElementById("terca"),
  document.getElementById("quarta"),
  document.getElementById("quinta"),
  document.getElementById("sexta"),
  document.getElementById("sabado"),
];

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
      dias[0].innerHTML += `<li onclick="riscarTarefa()">${inputTarefa.value}</li>`;
      break;
    case "segunda":
      dias[1].innerHTML += `<li onclick="riscarTarefa()">${inputTarefa.value}</li>`;
      break;
    case "terca":
      dias[2].innerHTML += `<li onclick="riscarTarefa()">${inputTarefa.value}</li>`;
      break;
    case "quarta":
      dias[3].innerHTML += `<li onclick="riscarTarefa()">${inputTarefa.value}</li>`;
      break;
    case "quinta":
      dias[4].innerHTML += `<li onclick="riscarTarefa()">${inputTarefa.value}</li>`;
      break;
    case "sexta":
      dias[5].innerHTML += `<li onclick="riscarTarefa()">${inputTarefa.value}</li>`;
      break;
    case "sabado":
      dias[6].innerHTML += `<li onclick="riscarTarefa()">${inputTarefa.value}</li>`;
      break;
  }
}

function limparTudo() {
  for (let i = 0; i < 7; i++) {
    dias[i].innerHTML = ``;
  }
}

function riscarTarefa(){
    console.log("hola");
}

