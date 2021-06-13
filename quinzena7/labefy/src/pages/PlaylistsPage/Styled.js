import styled from "styled-components";

export const PageInner = styled.div`
  padding: 0.5rem 2rem;
`;

export const CardsWrap = styled.div`
  padding-bottom: 1.8rem;
`;

export const CardsWrapTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
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
  right: 1.2rem;
  bottom: 1.2rem;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const PlayIconImage = styled.img`
  width: 100%;
  margin: auto;
`;