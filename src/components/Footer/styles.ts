import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 6vh;
  position: relative;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.menu};
  transition: all ease 0.2s;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: all ease 0.2s;
  display: flex;

  .container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    a,
    p {
      font-size: 2rem;
      font-family: "Slackside One", cursive;
      color: ${(props) => props.theme.colors.text_secondary};
      text-decoration: none;
      @media (max-width: 440px) {
        font-size: 1rem;
      }
    }
  }
`;
