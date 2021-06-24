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
  justify-content: space-evenly;
  background-image: url(${background});
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContainerImage = styled.div`
  /* display: flex; */
`;

export const ButtonController = styled.button`
  height: 45px;
  border-radius: 2em;
  border: none;
  color: white;
  font-size: 1vw;
  background-color: #2945ff;
  min-width: 25%;
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
