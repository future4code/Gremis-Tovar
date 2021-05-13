import React from "react";
import PerguntaAberta from "./PerguntaAberta";

class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <h2>
          ETAPA 2: Informações educacionais para quem está cursando (ou já
          terminou) o ensino superior
        </h2>
        <PerguntaAberta question={"5. Qual curso?"} />
        <PerguntaAberta question={"6. Qual a unidade de ensino?"} />
      </div>
    );
  }
}

export default Etapa2;
