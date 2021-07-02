import React, { useState } from "react";
import avatar from "../../images/avatar.gif";
import { useHistory } from "react-router-dom";
import { goToListTripsPage } from "../../routes/coordinator";
import useForm from "../../hooks/useForm";
import useRequestData from "../../hooks/useRequestData";
import { sendApplication } from "../../services/request";
import { countries } from "../../constants/countries";
import {
  ApplicationFormContainer,
  DescriptionTripH1,
  ContainerForm,
  BackgroundForm,
  FormMain,
  SelectOptions,
  InputForms,
  FormImage,
  ImageAvatar,
  ButtonsContainer,
  ButtonController,
} from "./Styled";

const ApplicationFormPage = () => {
  const [tripId, setTripId] = useState("");
  const { form, onChange, clear } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  const [allTrips] = useRequestData("/trips", {});
  const history = useHistory();

  const clearFields = () => {
    clear();
    setTripId("");
  };

  const onClickSend = (e) => {
    e.preventDefault();
    sendApplication(form, tripId, clearFields);
  };

  const onChangeTrip = (e) => {
    setTripId(e.target.value);
  };

  return (
    <ApplicationFormContainer>
      <DescriptionTripH1>Inscreva-se para uma viagem</DescriptionTripH1>
      <ContainerForm onSubmit={onClickSend}>
        <BackgroundForm>
          <FormMain>
            <SelectOptions defaultValue="" onChange={onChangeTrip}>
              <option value="" disabled>
                Escolha uma Viagem
              </option>
              {allTrips.trips &&
                allTrips.trips.map((trip) => {
                  return (
                    <option key={trip.id} value={trip.id}>
                      {trip.name}
                    </option>
                  );
                })}
              ;
            </SelectOptions>
            <InputForms
              placeholder={"Nome"}
              name={"name"}
              value={form.name}
              onChange={onChange}
              pattern={"^.{3,}$"}
              title={"O nome deve ter no mínimo 3 caracteres"}
              required
            />
            <InputForms
              placeholder={"Idade"}
              type={"number"}
              name={"age"}
              value={form.age}
              onChange={onChange}
              min={18}
              required
            />
            <InputForms
              placeholder={"Texto de Candidatura"}
              name={"applicationText"}
              value={form.applicationText}
              onChange={onChange}
              pattern={"^.{30,}$"}
              title={"O texto deve ter no mínimo 30 caracteres"}
              required
            />
            <InputForms
              placeholder={"Profissão"}
              name={"profession"}
              value={form.profession}
              onChange={onChange}
              pattern={"^.{10,}$"}
              title={"A profissão deve ter no mínimo 10 caracteres"}
              required
            />
            <SelectOptions
              placeholder={"País"}
              name={"country"}
              value={form.country}
              onChange={onChange}
              required
            >
              <option value={""} disabled>
                Escolha um País
              </option>
              {countries.map((country) => {
                return (
                  <option value={country} key={country}>
                    {country}
                  </option>
                );
              })}
            </SelectOptions>
          </FormMain>
          <FormImage>
            <ImageAvatar src={avatar} alt="loading..." />
          </FormImage>
        </BackgroundForm>
        <ButtonsContainer>
          <ButtonController onClick={() => goToListTripsPage(history)}>
            Voltar
          </ButtonController>
          <ButtonController type={"submit"}>Enviar</ButtonController>
        </ButtonsContainer>
      </ContainerForm>
    </ApplicationFormContainer>
  );
};

export default ApplicationFormPage;
