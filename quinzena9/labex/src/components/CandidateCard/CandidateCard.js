import React from "react";
import {
  CardContainer,
  TableMain,
  TableMainTr,
  TableMainTh,
  TableMainThText,
  TableMainTd,
  ContainerButtons,
  ImagesButtons,
} from "./Styled";
import { decideCandidate } from "../../services/request";
import yes from "../../images/yes.jpg";
import not from "../../images/not.jpg";

const CandidateCard = (props) => {
  const { id, applicationText, profession, age, name, country } =
    props.candidate;

  const decide = (decision) => {
    decideCandidate(props.tripId, id, decision, props.getTripDetails);
  };

  return (
    <CardContainer>
      <TableMain>
        <TableMainTr>
          <TableMainTh>Nome</TableMainTh>
          <TableMainTh>Profissão</TableMainTh>
          <TableMainTh>Idade</TableMainTh>
          <TableMainTh>País</TableMainTh>
          <TableMainThText>Texto de Candidatura</TableMainThText>
          <TableMainTh>Decisão</TableMainTh>
        </TableMainTr>
        <TableMainTr>
          <TableMainTd>{name}</TableMainTd>
          <TableMainTd>{profession}</TableMainTd>
          <TableMainTd>{age}</TableMainTd>
          <TableMainTd>{country}</TableMainTd>
          <TableMainTd>{applicationText}</TableMainTd>
          <TableMainTd>
            <ContainerButtons>
              <ImagesButtons src={yes} alt="sim" onClick={() => decide(true)} />{" "}
              <ImagesButtons
                src={not}
                alt="não"
                onClick={() => decide(false)}
              />
            </ContainerButtons>
          </TableMainTd>
        </TableMainTr>
      </TableMain>
    </CardContainer>
  );
};

export default CandidateCard;
