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
  align-items: center;
  margin-top: 2vh;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  padding: 10px;
  height: 70vh;
  border-radius: 20px;
  background-position: center;
  box-shadow: 0 20px 25px 0 rgba(0, 0, 0, 0.356);
  img {
    max-width: 40%;
    max-height: 70%;
    margin-top: -30px;
    object-fit: contain;
  }
`;

export const DescriptionProfile = styled.div`
  position: relative;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-top: 20px;
`;

export const DescriptionProfileH3 = styled.h3`
  margin-top: -10px;
`;

export const DescriptionProfileP = styled.p`
  margin-top: -50px;
  padding: 40px;
`;

