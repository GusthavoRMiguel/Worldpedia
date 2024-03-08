import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
`;

export const TableContainer = styled.div`
  display: flex;
  width: 94vw;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  margin-bottom: 20px;
  @media (max-width: 440px) {
    overflow-x: auto;
    padding: 1rem;
  }
`;

export const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;

  thead {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
  }

  tbody {
    background-color: ${(props) => props.theme.colors.tertiary};

    tr {
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`;

export const TableHeader = styled.th`
  color: ${(props) => props.theme.colors.text};

  text-align: center;
  padding: 8px;

  @media (max-width: 640px) {
    text-wrap: nowrap;
  }
`;

export const TableCell = styled.td`
  color: ${(props) => props.theme.colors.text_hover};
  border: 0.5px solid ${(props) => props.theme.colors.text};
  text-align: center;
  padding: 10px;
  font-size: 1rem;
  @media (max-width: 640px) {
    text-wrap: nowrap;
  }
`;

export const DownloadButton = styled.button`
  align-self: center;
  margin-top: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.5);
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text_hover};
  }
`;
