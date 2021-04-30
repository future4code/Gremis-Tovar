import React from "react";
import styled from "styled-components";

const SmallcardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  border: 1px solid black;
  padding: 20px 30px;
  margin-bottom: 10px;
  height: 70px;
`;

const Line = styled.div`
  display: inline-flex;
  padding: 20px;
  margin-top: 10px;
`;

const SmallcardContainerImg = styled.img`
  width: 35px;
`;

const Title = styled.h4`
  margin-bottom: 15px;
`;

const Paragrafo = styled.p`
  margin-left: 5px;
`;

function CardPequeno(props) {
  return (
    <SmallcardContainer>
      <SmallcardContainerImg src={props.imagem} />
      <Line>
        <Title>{props.titulo} </Title>
        <Paragrafo>{props.descricao}</Paragrafo>
      </Line>
    </SmallcardContainer>
  );
}

export default CardPequeno;





// function CardPequeno(props) {
//     return (
//       <div className="smallcard-container">
//         <img src={props.imagem} />
//         <div className="line">
//           <h4>{props.titulo} </h4>
//           <p>{props.descricao}</p>
//         </div>
//       </div>
//     );
//   }
  
//   export default CardPequeno;
  
