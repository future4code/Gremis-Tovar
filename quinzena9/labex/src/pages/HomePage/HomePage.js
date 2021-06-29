import React from "react";
import logo from "../../images/logo.png";
import { goToListTripsPage, goToLoginPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import {
  ContainerMain,
  ContainerImage,
  ContainerButtons,
  ButtonController,
} from "./Styled";

const HomePage = () => {
  const history = useHistory();
  return (
    <ContainerMain>
      <ContainerImage>
        <img src={logo} alt="logo" />
      </ContainerImage>
      <ContainerButtons>
        <ButtonController onClick={() => goToLoginPage(history)}>
          Área de ADMIN
        </ButtonController>
        <ButtonController onClick={() => goToListTripsPage(history)}>
          Área de Usuários
        </ButtonController>
      </ContainerButtons>
    </ContainerMain>
  );
};

export default HomePage;
