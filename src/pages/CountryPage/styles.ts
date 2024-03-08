import styled from "styled-components";

export const CountryPage = styled.main`
  min-height: calc(100vh - 10vh);
  background-color: ${(props) => props.theme.background.colors.secondary};
  transition: all ease 0.2s;
  .container {
    width: 90vw;
    margin: auto;
    padding: 40px 0px;
  }

  .back--button {
    text-decoration: none;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.primary};
    margin-bottom: 1rem;
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

  @media (min-width: 768px) and (max-width: 1023px) {
    & {
      padding: 20px;
    }
    .container {
      width: auto;
    }
  }

  @media (max-width: 767px) {
    & {
      padding: 10px;
    }
    .container {
      width: auto;
      padding: 0;
    }
    .back--button {
      width: 90px;
      height: 30px;
      margin-bottom: 3rem;
    }
  }
`;
