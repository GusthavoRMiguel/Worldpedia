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
    height: 50px;
    width: 40vw;
    border-radius: 8px;
    padding: 0px 10px;
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

  select {
    border-radius: 8px;
    padding: 0px 30px;
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
    padding: 0px 30px;
    border: none;
    box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
    outline: 0;
    font-size: 14px;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};

    a {
      &:hover {
        color: ${(props) => props.theme.colors.text_secondary};
      }
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.text_secondary};
    }
  }

  @media (max-width: 440px) {
    display: flex;
    flex-direction: column;
    gap: 15px;

    input,
    select,
    button {
      width: 90vw;
      height: 30px;
      text-align: center;
    }
  }
`;
