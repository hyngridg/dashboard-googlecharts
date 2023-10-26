import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import "./Pizza.css";

export const options = {
  title: "Título do gráfico",
};

function Pizza() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Carregue os dados do arquivo JSON
        const response = await fetch(
          import.meta.env.BASE_URL + "data/chartData.json"
        );
        const chartData = await response.json();

        // Atualize o estado com os dados do arquivo JSON
        setData([
          ["Label", "Value"],
          ...chartData.pizza.labels.map((label, index) => [
            label,
            chartData.pizza.values[index],
          ]),
        ]);
      } catch (error) {
        console.error("Erro ao carregar os dados do JSON:", error);
      }
    };

    fetchData();

    const id = setInterval(() => {
      fetchData();
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, []);

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
