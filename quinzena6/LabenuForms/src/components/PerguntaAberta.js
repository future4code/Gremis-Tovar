import React from "react";

function PerguntaAberta(props) {
  return (
    <div>
      <p>{props.question}</p>
      <input onChange={props.onChange} value={props.value} />
    </div>
  );
}

export default PerguntaAberta;
