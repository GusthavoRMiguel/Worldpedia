import styled from "styled-components";

export const CountryItem = styled.div<{ theme: string }>`
  background-color: ${(props) => props.theme.colors.primary};
  transition: all ease 0.2s;
  box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
  }
  .img--area {
    img {
      width: 100%;
      height: 150px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  .data--area {
    color: ${(props) => props.theme.colors.text_secondary};
    padding: 10px 20px;
    p {
      font-size: 13px;
      font-weight: 500;
      margin: 10px 0px;
      span {
        font-weight: 300;
        margin-left: 5px;
        color: ${(props) => props.theme.colors.text};
      }
    }
    .country--name {
      font-size: 17px;
      margin: 10px 0px;
    }
  }

  @media (max-width: 768px) {
    .img--area {
      img {
        height: 180px;
      }
    }
  }
`;
