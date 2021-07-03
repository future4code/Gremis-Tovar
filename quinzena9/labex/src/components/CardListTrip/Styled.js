import styled from "styled-components";

export const ContainerMaincard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px;
  grid-gap: 2%;
  width: 90vw;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: normal;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
`;

export const ImagePlanet = styled.div`
  background: #fff9ee;
  border-radius: 24px;
  width: 167px;
  height: 167px;
  margin: 15px;
  padding: 10px;
`;
export const ImagePlanetImg = styled.img`
  width: 100%;
`;

export const DescriptionTrip = styled.div`
  color: white;
  margin: 10px;
`;

export const DescriptionTripH1 = styled.h1`
  font-size: 1.5rem;
`;

export const DescriptionTripH2 = styled.h2`
  font-size: 1.3rem;
`;
