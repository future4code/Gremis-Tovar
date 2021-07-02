import React from "react";
import avatar from "../../images/avatar.gif";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useHistory } from "react-router-dom";
import { goToAdminHomePage } from "../../routes/coordinator";
import useForm from "../../hooks/useForm";
import { createTrip } from "../../services/request";
import { planets } from "../../constants/planets";
import {
  ApplicationFormContainer,
  DescriptionTripH1,
  ContainerForm,
  BackgroundForm,
  FormMain,
  FormImage,
  SelectOptions,
  InputForms,
  ImageAvatar,
  ButtonsContainer,
  ButtonController,
} from "./Styled";

const CreateTripPage = () => {
  useProtectedPage();
  const history = useHistory();
  const { form, onChange, clear } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const onClickCreate = (e) => {
    e.preventDefault();
    createTrip(form, clear);
  };

  const today = new Date();
  const stringToday =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).substr(-2) +
    "-" +
    ("0" + today.getDate()).substr(-2);

  return (
    <ApplicationFormContainer>
      <DescriptionTripH1>Criar viagem</DescriptionTripH1>
      <ContainerForm onSubmit={onClickCreate}>
        <BackgroundForm>
          <FormMain>
            <SelectOptions
              placeholder={"Planeta"}
              name={"planet"}
              defaultValue={""}
              onChange={onChange}
              required
            >
              <option value={""} disabled>
                Escolha um Planeta
              </option>
              {planets.map((planet) => {
                return (
                  <option value={planet} key={planet}>
                    {planet}
                  </option>
                );
              })}
            </SelectOptions>
            <InputForms
              placeholder={"Nome da Viagem"}
              name={"name"}
              value={form.name}
              onChange={onChange}
              pattern={"^.{5,}$"}
              title={"O nome da viagem deve ter no mínimo 5 caracteres"}
              required
            />

            <InputForms
              placeholder={"Escolha uma data"}
              type={"date"}
              name={"date"}
              value={form.date}
              onChange={onChange}
              min={stringToday}
              required
            />
            <InputForms
              placeholder={"Descrição da Viagem"}
              name={"description"}
              value={form.description}
              onChange={onChange}
              pattern={"^.{30,}$"}
              title={"O nome deve ter no mínimo 30 caracteres"}
              required
            />
            <InputForms
              placeholder={"Número de dias"}
              type={"number"}
              name={"durationInDays"}
              value={form.durationInDays}
              onChange={onChange}
              min={50}
              required
            />
          </FormMain>
          <FormImage>
            <ImageAvatar src={avatar} alt="loading..." />
          </FormImage>
        </BackgroundForm>
        <ButtonsContainer>
          <ButtonController onClick={() => goToAdminHomePage(history)}>
            Voltar
          </ButtonController>
          <ButtonController type={"submit"}>Criar</ButtonController>
        </ButtonsContainer>
      </ContainerForm>
    </ApplicationFormContainer>
  );
};

export default CreateTripPage;
