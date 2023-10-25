import { Chart } from "react-google-charts";
import "./Pizza.css";

export const data = [
  ["Task", "Hours per Day"],
  ["Item 1", 11],
  ["Item 2", 2],
  ["Item 3", 5],
  ["Item 4", 2],
  ["Item 5", 4],
];

export const options = {
  title: "Título do gráfico",
};

function Pizza() {
  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"100%"}
        className="d-flex justify-content-center align-items-center"
      />
    </>
  );
}

export default Pizza;
