import { Input } from "./index";
import styled from "styled-components";

export const InputArea = styled.section<{ theme: string }>`
  display: flex;
  width: 90vw;
  margin: auto;
  justify-content: space-between;
  padding: 40px 0px;
  transition: all ease 0.2s;

  input {
    border-radius: 8px;
    padding: 1rem 15rem;
    border: none;
    box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
    outline: 0;
    font-size: 14px;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};

    ::placeholder {
      color: ${(props) => props.theme.colors.text};
    }
  }

  div {
    display: flex;
    gap: 2rem;

    select {
      border-radius: 8px;
      padding: 1rem 3rem;
      border: none;
      box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
      outline: 0;
      font-size: 14px;
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.text};

      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.text_secondary};
      }

      > option {
        background-color: ${(props) => props.theme.colors.secondary};
      }
    }

    button {
      border-radius: 8px;
      padding: 1rem 3rem;
      border: none;
      box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
      outline: 0;
      font-size: 14px;
      background-color: ${(props) => props.theme.colors.secondary};

      a {
        color: ${(props) => props.theme.colors.text};
        text-decoration: none;
        &:hover {
          color: ${(props) => props.theme.colors.text_secondary};
        }
      }

      &:hover {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.text_secondary};
      }
    }
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 0px;

    input {
      padding: 8px 30px;
      text-align: center;
    }

    div {
      justify-content: space-between;
      select,
      button {
        padding: 5px 15px;
      }
    }
  }
`;
