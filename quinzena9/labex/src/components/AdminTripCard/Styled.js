import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: white;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerDetails = styled.div`
  box-shadow: 0 4px 8px 0 rgb(255 255 255 / 30%);
  padding: 30px 15px;
  border-radius: 10px;
  margin: 10px 15px;
  align-items: center;
  justify-content: center;
  width: 300px;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const NameTrip = styled.p`
  text-transform: uppercase;
  font-weight: 600;
`;

export const DescriptionTrip = styled.p`
  font-size: 0.8rem;
`;

export const SeeDetails = styled.p`
  cursor: pointer;
  font-weight: 800;
  font-size: 1.2rem;
`;

export const ContainerImage = styled.div`
  cursor: pointer;
`;

export const IconDelete = styled.img`
  width: 40%;
`;
