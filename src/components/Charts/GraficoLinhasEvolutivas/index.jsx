import { Chart } from "react-google-charts";
import "./GraficoLinhasEvolutivas.css";

export const data = [
  ["Ano", "Vendas", "Despesas"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  title: "Desempenho da Empresa",
  curveType: "function",
  legend: { position: "bottom" },
};

function GraficoLinhasEvolutivas() {
  return (
    <>
      <Chart
        chartType="LineChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
        className="d-flex justify-content-center align-items-center"
      />
    </>
  );
}

export default GraficoLinhasEvolutivas;
