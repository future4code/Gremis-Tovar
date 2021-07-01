import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useHistory } from "react-router-dom";
import { goToCreateTripPage } from "../../routes/coordinator";
import { logout } from "../../services/request";
import {
  AdminHomeScreenContainer,
  TitleListTrips,
  ButtonsContainer,
  ButtonController,
} from "./Styled";
import useRequestData from "../../hooks/useRequestData";
import AdminTripCard from "../../components/AdminTripCard/AdminTripCard";

const AdminHomePage = () => {
  useProtectedPage();
  const history = useHistory();
  const [tripsData, getTrips] = useRequestData("/trips", {});

  return (
    <AdminHomeScreenContainer>
      <ButtonsContainer>
        <ButtonController onClick={() => goToCreateTripPage(history)}>
          Criar Viagem
        </ButtonController>
        <ButtonController onClick={() => logout(history)}>
          Sair
        </ButtonController>
      </ButtonsContainer>
      <TitleListTrips>Painel Administrativo</TitleListTrips>
      <AdminTripCard tripsData={tripsData} getTrips={getTrips} />{" "}
    </AdminHomeScreenContainer>
  );
};

export default AdminHomePage;
