import React from "react";
import styled from "styled-components";

const BigcardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid black;
  padding: 20px 30px;
  margin-bottom: 10px;
  height: 200px;
`;

const BigcardContainerImg = styled.img`
  width: 100px;
  margin-right: 20px;
`;

const Title = styled.h4`
  margin-bottom: 15px;
`;

function CardGrande(props) {
  return (
    <BigcardContainer>
      <BigcardContainerImg src={props.imagem} />
      <div>
        <Title>{props.nome}</Title>
        <p>{props.descricao}</p>
      </div>
    </BigcardContainer>
  );
}

export default CardGrande;


// function CardGrande(props) {
//     return (
//         <div className="bigcard-container">
//             <img src={ props.imagem } />
//             <div>
//                 <h4>{ props.nome }</h4>
//                 <p>{ props.descricao }</p>
//             </div>
//         </div>
//     )
// }

// export default CardGrande;