import styled from "styled-components";

export const TableContainer = styled.div`
  padding-inline: 1rem;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 440px) {
    width: 90vw;
    overflow-x: scroll;
    padding-bottom: 2rem;
  }
`;

export const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: white;
  border-radius: 10px;

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
  border: 0.5px solid ${(props) => props.theme.colors.text};
  text-align: center;
  padding: 8px;
`;

export const TableCell = styled.td`
  color: ${(props) => props.theme.colors.text_hover};
  border: 0.5px solid ${(props) => props.theme.colors.text};
  text-align: center;
  padding: 10px;
  font-size: 1rem;
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
