import React from "react";
import { useHistory } from "react-router-dom";
import { goToListTripsPage } from "../../routes/coordinator";
import {
  ApplicationFormContainer,
  DescriptionTripH1,
  ContainerForm,
  FormMain,
  FormImage,
  ButtonsContainer,
  ButtonController,
} from "./Styled";

const ApplicationFormPage = () => {
  const history = useHistory();

  return (
    <ApplicationFormContainer>
      <DescriptionTripH1>Inscreva-se para uma viagem</DescriptionTripH1>
      <ContainerForm>
        <FormMain>
          <select>
            <option value="" disabled>
              Escolha uma Viagem
            </option>
            <option>Viaje 1 </option>
            <option>Viaje 2 </option>
          </select>
          <input placeholder={"Nome"} name={"name"} required />
          <input
            placeholder={"Idade"}
            type={"number"}
            name={"age"}
            min={18}
            required
          />
          <input
            placeholder={"Texto de Candidatura"}
            name={"applicationText"}
            required
          />
          <input placeholder={"Profissão"} name={"profession"} required />
          <select placeholder={"País"} name={"country"} required>
            <option value={""} disabled>
              Escolha um País
            </option>
            <option>Venezuela </option>
            <option>Brasil </option>
          </select>
        </FormMain>
        <FormImage>
        </FormImage>
      </ContainerForm>
      <ButtonsContainer>
        <ButtonController onClick={() => goToListTripsPage(history)}>
          Voltar
        </ButtonController>
        <ButtonController type={"submit"}>Enviar</ButtonController>
      </ButtonsContainer>
    </ApplicationFormContainer>
  );
};

export default ApplicationFormPage;
