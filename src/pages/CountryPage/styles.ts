import styled from "styled-components";

export const CountryPage = styled.main`
  min-height: calc(100vh - 90px);
  background-color: ${(props) =>
    props.theme.title === "light" ? "" : "rgb(32, 45, 54)"};
  transition: all ease 0.2s;
  .container {
    width: 90vw;
    margin: auto;
    padding: 40px 0px;

    .loading {
      min-height: 100vh;
      color: ${(props) => (props.theme.title === "light" ? "" : "#FFF")};
    }
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
      padding: 20px;
    }
    .container {
      width: auto;
      padding: 20px 0px;
    }
  }
`;
