import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: inherit;
  place-content: center;

  @media (max-width: 640px) {
    img {
      width: 70vw;
    }
  }
`;
