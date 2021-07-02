import styled from "styled-components";

export const AdminHomeScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const TitleListTrips = styled.h1`
  color: white;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin: 10px 0;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;
