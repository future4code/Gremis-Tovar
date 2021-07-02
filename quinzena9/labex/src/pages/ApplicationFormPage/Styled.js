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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BackgroundForm = styled.div`
  background: white;
  border-radius: 24px;
  width: 770px;
  height: 460px;
  margin: 15px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


export const FormMain = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  width: 100%;
`;

export const FormImage = styled.div``;

export const ImageAvatar = styled.img`
  width: 90%;
`;

export const SelectOptions = styled.select`
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 100px;
  padding: 8px;
  margin: 15px;
`;

export const InputForms = styled.input`
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 100px;
  padding: 8px;
  margin: 15px;
`;

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
