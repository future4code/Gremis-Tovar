import React from "react";
import avatar from "../../images/avatar.gif";
import { useHistory } from "react-router-dom";
import { goToListTripsPage } from "../../routes/coordinator";
import {
  ApplicationFormContainer,
  DescriptionTripH1,
  ContainerForm,
  FormMain,
  SelectOptions,
  InputForms,
  FormImage,
  ImageAvatar,
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
          <SelectOptions>
            <option value="" disabled>
              Escolha uma Viagem
            </option>
            <option>Viaje 1 </option>
            <option>Viaje 2 </option>
          </SelectOptions>
          <InputForms placeholder={"Nome"} name={"name"} required />
          <InputForms
            placeholder={"Idade"}
            type={"number"}
            name={"age"}
            min={18}
            required
          />
          <InputForms
            placeholder={"Texto de Candidatura"}
            name={"applicationText"}
            required
          />
          <InputForms placeholder={"Profissão"} name={"profession"} required />
          <SelectOptions placeholder={"País"} name={"country"} required>
            <option value={""} disabled>
              Escolha um País
            </option>
            <option>Venezuela </option>
            <option>Brasil </option>
          </SelectOptions>
        </FormMain>
        <FormImage>
          <ImageAvatar src={avatar} alt="loading..." />
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
