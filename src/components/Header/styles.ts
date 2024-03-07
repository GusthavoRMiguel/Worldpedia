import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 90px;
  background-color: ${(props) => props.theme.colors.menu};
  color: ${(props) => props.theme.colors.text_secondary};
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
      font-size: 2.5rem;
      @media (max-width: 440px) {
        font-size: 1.5rem;
      }
    }
  }
`;
