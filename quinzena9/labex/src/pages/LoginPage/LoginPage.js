import React from "react";
import useForm from "../../hooks/useForm";
import { login } from "../../services/request";
import { useHistory } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {
  ContainerMain,
  ContainerImage,
  TitleLogin,
  ContainerForm,
  ContainerFormInput,
  ContainerButtons,
  ButtonController,
} from "./Styled";
import logo from "../../images/logo.png";
import { goToHomePage } from "../../routes/coordinator";

const LoginPage = () => {
  useUnprotectedPage();
  const history = useHistory();
  const { form, onChange } = useForm({ email: "", password: "" });

  const onClickLogin = (e) => {
    e.preventDefault();
    login(form, history);
  };

  return (
    <ContainerMain>
      <ContainerImage>
        <img src={logo} alt={logo} />
      </ContainerImage>
      <TitleLogin>Login</TitleLogin>
      <ContainerForm onSubmit={onClickLogin}>
        <ContainerFormInput
          placeholder={"E-mail"}
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
        />
        <ContainerFormInput
          placeholder={"Senha"}
          type={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          required
        />
        <ContainerButtons>
          <ButtonController onClick={() => goToHomePage(history)}>
            Voltar
          </ButtonController>
          <ButtonController type="submit">Entrar</ButtonController>
        </ContainerButtons>
      </ContainerForm>
    </ContainerMain>
  );
};

export default LoginPage;
