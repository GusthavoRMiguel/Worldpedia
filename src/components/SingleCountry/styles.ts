import styled from "styled-components";

export const CountryData = styled.div`
  display: flex;
  justify-content: space-between;
  transition: all ease 0.2s;
  color: ${(props) => props.theme.colors.text_secondary_hover};

  .capa {
    display: flex;
    gap: 1rem;

    img {
      width: 440px;
      height: 300px;
    }

    .data-type {
      display: flex;
      height: 300px;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      justify-content: space-between;

      button {
        padding: 1rem;
        border-radius: 8px;
        background-color: ${(props) => props.theme.colors.primary};

        &.active {
          background-color: ${(props) => props.theme.colors.tertiary};
          color: ${(props) =>
            props.theme.title === "light"
              ? props.theme.colors.text_secondary
              : props.theme.colors.text};
        }

        color: ${(props) => props.theme.colors.text};
      }
    }
  }

  .data--area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: max-content;

    h1 {
      margin: 0px;
      color: ${(props) => props.theme.colors.text_secondary};
    }

    .data--firstArea {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 20px;

      p {
        margin: 5px 10px;
        span {
          font-weight: bold;
          margin-left: 5px;
          color: ${(props) => props.theme.colors.text_hover};
        }
      }

      .language {
        font-weight: normal;
        margin-right: 5px;
      }
    }

    .border--area {
      margin-top: 20px;
      p {
        font-weight: bold;
        color: ${(props) => props.theme.colors.text_secondary};
      }

      .borders {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 5px;
        width: 100%;
        margin-top: 1rem;

        a {
          text-decoration: none;
          color: ${(props) => props.theme.colors.text_secondary};
          display: flex;
          min-height: 25px;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-size: 13px;
          flex: 1;
          font-weight: 300;
          box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);

          &:hover {
            background-color: ${(props) => props.theme.colors.primary};
            color: ${(props) => props.theme.colors.text_secondary_hover};
            box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
  }

  @media (max-width: 440px) {
    & {
      flex-direction: column;

      .capa {
        flex-direction: column;
        img {
          width: 280px;
          height: 180px;
          margin: auto;
        }
        .data-type {
          flex-direction: row;
          height: fit-content;
          margin-bottom: 2rem;
          justify-content: space-around;

          svg {
            width: 20px;
            height: 20px;
          }
        }
      }

      .data--area {
        width: 280px;
        margin: auto;
        margin-top: 30px;

        h1 {
          font-size: 17px;
        }

        .data--firstArea {
          grid-template-columns: 1fr;
          p,
          span {
            font-size: 12px;
          }
        }

        .border--area {
          .borders {
            grid-template-columns: repeat(3, 1fr);
          }
          p,
          span,
          a {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
