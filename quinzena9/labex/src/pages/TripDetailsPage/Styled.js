import styled from "styled-components";

export const TripContainerMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const DescriptionTripDetails = styled.p`
  border-bottom: 1px dashed white;
`;

export const TripContainer = styled.p`
  padding: 10px 20px;
  border-radius: 4px;
  margin: 15px 0;
  max-width: 500px;
  color: white;
  font-size: 1.5rem;
`;

export const CandidatesContainer = styled.div`
  background: white;
  border-radius: 24px;
  width: 500px;
  height: 460px;
  margin: 15px;
  padding: 10px;
`;
export const CandidatesPending = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CandidatesAproved = styled.div`
  background: gray;
  border-radius: 24px;
  width: 450px;
  height: 160px;
  margin: 15px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonController = styled.button`
  height: 45px;
  border-radius: 2em;
  border: none;
  color: white;
  font-size: 1vw;
  background-color: #2945ff;
  min-width: 15%;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: #ecdbdc;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
