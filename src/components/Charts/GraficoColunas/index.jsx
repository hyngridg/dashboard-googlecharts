import { Chart } from "react-google-charts";
import "./GraficoColunas.css";

export const data = [
  ["Ano", "Vendas", "Despesas", "Lucro"],
  ["2020", 1000, 400, 200],
  ["2021", 1170, 460, 250],
  ["2022", 660, 1120, 300],
  ["2023", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Vendas, Despesas, and Lucro: 2020-2023",
  },
};

function GraficoColunas() {
  return (
    <>
      <Chart
        chartType="Bar"
        width="100%"
        height="100%"
        data={data}
        options={options}
        className="d-flex justify-content-center"
      />
    </>
  );
}

export default GraficoColunas;
