import styled from "styled-components";

export const CardTinder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CardTinderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  height: 100%;
  border-radius: 20px;
  background-position: center;
  box-shadow: 0 20px 25px 0 rgba(0, 0, 0, 0.356);
`;

export const CardImage = styled.image`
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  position: absolute;
  bottom: 10px;
  color: rgb(240, 32, 32);
`;