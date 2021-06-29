import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: white;
`;

export const ContainerDetails = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  border-radius: 4px;
  margin: 10px 0;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  color: white;
`;

export const SeeDetails = styled.p`
  cursor: pointer;
  font-weight: 800;
`;
