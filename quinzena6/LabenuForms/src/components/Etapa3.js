import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <h2>
          ETAPA 3: Informações sobre quem não se formou no ensino superior nem
          está cursando
        </h2>
        <PerguntaAberta
          question={"5. Por que você não terminou um curso de graduação?"}
        />
        <PerguntaFechada
          question={"6. Você fez algum curso complementar?"}
          options={[
            "Curso técnico",
            "Cursos de inglês",
            "Não fiz curso complementar",
          ]}
        />
      </div>
    );
  }
}

export default Etapa3;
