import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h2>ETAPA 1: Dados Gerais</h2>
        <PerguntaAberta question={"1. Qual o seu nome?"} />
        <PerguntaAberta question={"2. Qual sua idade?"} />
        <PerguntaAberta question={"3. Qual seu e-mail?"} />
        <PerguntaFechada
          question={"4. Grau de escolaridade"}
          options={[
            "Ensino Médio Incompleto",
            "Ensino Médio Completo",
            "Ensino Superior Incompleto",
            "Ensino Superior Completo",
          ]}
        />
      </div>
    );
  }
}

export default Etapa1;
