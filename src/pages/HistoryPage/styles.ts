import styled from "styled-components";

export const HistoricContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 10vh);
  background-color: ${(props) => props.theme.background.colors.secondary};
  display: flex;
  flex-direction: column;
  .heading {
    display: flex;
    justify-content: space-between;
    .back--button {
      text-decoration: none;
      border-radius: 8px;
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.primary};
      margin: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-inline: 2rem;
      height: 40px;
      width: max-content;
      box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);

      &:hover {
        box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.5);
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.text_hover};
      }
    }

    .clear--button {
      border-radius: 8px;
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.primary};
      border: none;
      margin: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: max-content;
      padding-inline: 2rem;
      box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);
      &:hover {
        box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.5);
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.text_hover};
      }
    }

    @media (max-width: 640px) {
      .back--button {
        padding-inline: 1rem;
        height: 30px;
        margin-bottom: 3rem;
      }

      .clear--button {
        height: 30px;
        padding-inline: 1rem;
        margin-bottom: 3rem;
      }
    }
  }

  .emptyBox {
    display: flex;
    place-content: center;

    img {
      width: 30rem;
    }
  }
  h2 {
    align-self: center;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.text_secondary};
  }
`;
