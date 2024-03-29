import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 10vh;
  background-color: ${(props) => props.theme.colors.menu};

  transition: all ease 0.2s;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: all ease 0.2s;
  display: flex;
  padding-inline: 2rem;

  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    a {
      font-size: 3rem;
      font-family: "Slackside One", cursive;
      color: ${(props) => props.theme.colors.text_secondary};
      text-decoration: none;
      @media (max-width: 440px) {
        font-size: 2rem;
      }
    }
  }
`;
