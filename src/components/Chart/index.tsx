import React from "react";

import { ChartContainer, StyledChart } from "./styles";
import { useTheme } from "../../hooks";

interface ChartData {
  country: string;
  pais: string;
  area: number;
  population: number;
}

interface ChartProps {
  data: ChartData[];
}

const GeoChart: React.FC<ChartProps> = ({ data }) => {
  const { theme } = useTheme();
  const chartData = [
    ["Country", "País", "Área", "População"],
    ...data.map((item) => [
      item.country,
      item.pais,
      item.area,
      item.population,
    ]),
  ];

  return (
    <ChartContainer>
      <StyledChart
        width={"100%"}
        height={"500px"}
        chartType="GeoChart"
        data={chartData}
        options={{
          colorAxis: {
            colors: [`#c8343e`],
          },
          backgroundColor: `${theme.colors.secondary}`,
          datalessRegionColor: "#dddddd",
          defaultColor: "#f5f5f5",
          legend: "none",
        }}
      />
    </ChartContainer>
  );
};

export default GeoChart;
