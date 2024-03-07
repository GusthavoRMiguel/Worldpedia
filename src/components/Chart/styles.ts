import styled from "styled-components";
import Chart from "react-google-charts";

export const ChartContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin-inline: auto;
  @media (max-width: 640px) {
    width: 90vw;
  }
`;

export const StyledChart = styled(Chart)`
  width: 100%;
  height: 100%;
`;
