import styled from "styled-components";

export const ApplicationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

export const DescriptionTripH1 = styled.h1`
  color: white;
  font-size: 1.5rem;
`;

export const ContainerForm = styled.form`
  background: #fff9ee;
  border-radius: 24px;
  width: 770px;
  height: 460px;
  margin: 15px;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

export const FormMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const FormImage = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;

export const ButtonController = styled.button`
  height: 45px;
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
