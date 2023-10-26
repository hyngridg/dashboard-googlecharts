import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import "./Medidor.css";

export const options = {
  width: 380,
  height: 150,
  greenFrom: 0,
  greenTo: 33.33,
  yellowFrom: 33.34,
  yellowTo: 66.66,
  redFrom: 66.67,
  redTo: 100,
  minorTicks: 5,
};

function Medidor() {
  const [data, setData] = useState([]); // Inicialize o estado com uma matriz vazia

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
          ...chartData.medidor.labels.map((label, index) => [
            label,
            chartData.medidor.values[index],
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
  }, []); // Use um array vazio para garantir que o efeito só seja executado uma vez

  return (
    <>
      <Chart
        chartType="Gauge"
        width="100%"
        height="200px"
        data={data}
        options={options}
        className="d-flex justify-content-center align-items-center"
      />
    </>
  );
}

export default Medidor;
