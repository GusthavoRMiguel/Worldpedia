import styled from "styled-components";

export const CountriesArea = styled.main`
  min-height: calc(100vh - 10vh);
  background-color: ${(props) => props.theme.background.colors.secondary};
  transition: all ease 0.2s;
  .countries {
    display: grid;
    width: 90vw;
    margin: auto;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
  }

  .pagination {
    display: flex;
    list-style: none;
    justify-content: center;
    margin-top: 4rem;
    padding: 20px 0px;

    button {
      height: 35px;
      width: 35px;
      border-radius: 4px;
      background-color: ${(props) => props.theme.colors.tertiary};
      color: ${(props) => props.theme.colors.text_hover};
      border: none;
      box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);
      margin: 0px 5px;
      cursor: pointer;
    }

    .active {
      font-weight: bold;
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  @media (max-width: 1024px) {
    .countries {
      width: auto;
      padding: 0px 20px;
    }
  }

  @media (max-width: 768px) {
    .countries {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 440px) {
    .countries {
      grid-template-columns: 1fr;
    }
  }
`;
