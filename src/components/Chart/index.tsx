import React from "react";

import { ChartContainer, StyledChart } from "./styles";
import { useTheme } from "../../hooks";

interface ChartData {
  country: string;
  area: number;
  population: number;
}

interface ChartProps {
  data: ChartData[];
}

const GeoChart: React.FC<ChartProps> = ({ data }) => {
  const { theme } = useTheme();
  const chartData = [
    ["País", "Área", "População"],
    ...data.map((item) => [item.country, item.area, item.population]),
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
            colors: ["#e7711c", `${theme.colors.secondary}`],
          },
          backgroundColor: `${theme.colors.primary}`,
          datalessRegionColor: "#dddddd",
          defaultColor: "#f5f5f5",
          legend: "none",
        }}
      />
    </ChartContainer>
  );
};

export default GeoChart;
