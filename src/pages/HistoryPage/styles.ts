import styled from "styled-components";

export const HistoricContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .back--button {
    text-decoration: none;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.primary};
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 40px;
    box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.5);
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.text_hover};
    }
  }

  h2 {
    align-self: center;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.text_secondary};
  }
`;
