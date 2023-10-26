import styled from "styled-components";

export const TransactionsHistory = styled.table`
width: 100%;
`
export const TransactionsTableHead = styled.thead`
  font-weight: 500;
  text-align: center;
  border: none;
  background: rgb(160, 184, 205);
  font-size: 18px;
  border-top: 1px solid;
  border-color: transparent;
`
export const TableTrStyled = styled.tr`
  border: 1px solid;
  border-color: transparent;
`;
export const TableThStyled = styled.th`
  border: 1px solid;
  border-color: transparent;
  padding: 7px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(208, 155, 75);
  color: rgb(97, 58, 7);
`;

export const TransactionsTableBody = styled.tbody`
  font-weight: 500;
  text-align: center;
  border: none;
  padding: 10px 15px;
  background: rgb(215, 209, 201);
  font-size: 14px;
  border-top: 1px solid;
`;

export const TransactionsTableBodyItem = styled.td`
  border: 1px solid;
  border-color: transparent;
  padding: 8px;
`;
