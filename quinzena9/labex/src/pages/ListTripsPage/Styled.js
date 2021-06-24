import styled from "styled-components";

export const ListScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px;
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

export const TitleTrips = styled.h1`
  color: white;
  font-size: 2vw;
`;
