import styled from "styled-components";

export const PageInner = styled.div`
  padding: 0.5rem 2rem;
`;

export const CardsWrap = styled.div`
  padding-bottom: 1.8rem;
`;

export const CardsWrapInner = styled.div`
  display: grid;
`;

export const LoginBoxUser = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
`;

export const LoginBoxUserInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-top: 60px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
`;

export const SongList = styled.ul`
  padding: 0;
`;

export const SongListLi = styled.li`
  list-style: none;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const SongIcon = styled.div`
  padding-right: 1rem;
`;

export const SongDetailsTitle = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
`;

export const SongDetailsSpan = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

export const SongDetailsToken = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-top: 80px;
  :hover {
    cursor: pointer;
    color: blue;
  }
`;

export const SongTime = styled.div`
  margin-left: auto;
`;

export const SelectInput = styled.select`
  padding: 10px 10px;
  text-align: center;
  margin: 0 0 50px 0;
  width: 400px;
  border-radius: 20px;
`;

export const FormButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #0c131e;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  margin-left: 20px;
  letter-spacing: 4px;
  :hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const FormButtonToken = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #0c131e;
  font-size: 10px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin: 20px 0;
  :hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
`;
