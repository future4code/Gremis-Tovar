import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerButtons = styled.div`
  width: 100%;
`;

export const TableMain = styled.table`
  border: 1px solid transparent;
  border-collapse: collapse;
  font-size: 0.6rem;
`;

export const TableMainTr = styled.tr`
  align-items: center;
`;

export const TableMainTh = styled.th`
  background-color: gray;
  width: 1vw;
  height: 1vh;
`;
export const TableMainThText = styled.th`
  background-color: gray;
  width: 35vw;
`;

export const TableMainTd = styled.td`
  background-color: white;
  width: 8vw;
`;

export const ImagesButtons = styled.img`
  width: 35%;
  cursor: pointer;
`;
