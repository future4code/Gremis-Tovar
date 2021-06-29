import React from "react";
import CardListTrip from "../../components/CardListTrip/CardListTrip";
import {
  goToHomePage,
  goToApplicationFormPage,
} from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import {
  ButtonsContainer,
  ListScreenContainer,
  ButtonController,
  TitleTrips,
} from "./Styled";

const ListTripsPage = () => {
  const history = useHistory();
  const [tripsData] = useRequestData("/trips", {});

  return (
    <ListScreenContainer>
      <ButtonsContainer>
        <ButtonController onClick={() => goToHomePage(history)}>
          Voltar ao Inicio
        </ButtonController>
        <ButtonController onClick={() => goToApplicationFormPage(history)}>
          Inscrever-se
        </ButtonController>
      </ButtonsContainer>
      <TitleTrips>LISTA DE VIAGENS DISPONÍVEIS</TitleTrips>
      <CardListTrip tripsData={tripsData} />;
    </ListScreenContainer>
  );
};

export default ListTripsPage;
