import styled from "styled-components";

export const PageInner = styled.div`
  padding: 0.5rem 2rem;
`;

export const CardsWrap = styled.div`
  padding-bottom: 1.8rem;
`;

export const CardsWrapInner = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(164px, 1fr));
`;

export const CardsWrapCard = styled.div`
  background: #282828;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  padding: 1.2rem 1.2rem 0.8rem;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

export const LoginBoxUser = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
`;

export const CardsWrapCardAdd = styled.div`
  cursor: pointer;
  background: #282828;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  padding: 1.2rem 1.2rem 0.8rem;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

export const CardImage = styled.div`
  height: 160px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 0.4rem 0;
`;

export const CardContentTitle = styled.h3`
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0;
  letter-spacing: 0.6px;
`;

export const CardplayIcon = styled.span`
  width: 40px;
  height: 40px;
  overflow: hidden;
  display: flex;
  margin-left: auto;
  opacity: 0.2;
  position: absolute;
  right: 4rem;
  bottom: 0.7rem;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const PlayIconImage = styled.img`
  width: 100%;
  margin: auto;
`;

export const CardIconDelete = styled.span`
  width: 54px;
  height: 54px;
  overflow: hidden;
  display: flex;
  margin-left: auto;
  opacity: 0.2;
  position: absolute;
  right: 0.4rem;
  bottom: 0.2rem;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const DeleteIconImage = styled.img`
  width: 100%;
  margin: auto;
`;

export const LoginBoxUserInput = styled.input`
  width: 100%;
  font-size: 16px;
  color: #fff;
  margin-top: 60px;
  border: none;
  height: fit-content;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
`;

export const FormButton = styled.button`
  position: relative;
  padding: 5px 10px;
  color: #0c131e;
  font-size: 10px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 20px;
  :hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const CardsWrapCardName = styled.div`
  cursor: pointer;
  background: #282828;
  position: relative;
  border-radius: 10px;
  display: inline-grid;
  overflow: hidden;
  padding: 1.2rem 1.2rem 0.8rem;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;