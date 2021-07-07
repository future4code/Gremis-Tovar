import styled from "styled-components";
import background from "../../images/background.png";

export const ContainerMain = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContainerImage = styled.div`
  margin: 60px;
`;

export const TitleLogin = styled.h1`
  margin: 50px;
  color: white;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 500px;
`;

export const ContainerFormInput = styled.input`
  width: 80%;
  height: 30px;
  border-radius: 20px;
  padding: 4px 8px;
  background-color: transparent;
  border-color: gray;
  color: white;
  margin: 0px 0px 35px;
`;

export const ButtonController = styled.button`
  height: 35px;
  border-radius: 2em;
  border: none;
  color: white;
  font-size: 1vw;
  background-color: #2945ff;
  min-width: 35%;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: #ecdbdc;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;
