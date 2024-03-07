import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #153386;
  overflow-y: hidden;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: max-content;
    height: max-content;
    @media (max-width: 640px) {
      width: 100%;
    }
  }
`;
