import React from "react";

function PerguntaFechada(props) {
  return (
    <div>
      <p>{props.question}</p>
      <select>
        {props.options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default PerguntaFechada;
