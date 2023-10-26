import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import "./GraficoLinhasEvolutivas.css";

export const options = {
  title: "Desempenho da Empresa",
  curveType: "function",
  legend: { position: "bottom" },
};

function GraficoLinhasEvolutivas() {
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
          ["Ano", "Vendas", "Despesas"],
          ...chartData.graficoLinhasEvolutivas.ano.map((ano, index) => [
            ano,
            chartData.graficoLinhasEvolutivas.vendas[index],
            chartData.graficoLinhasEvolutivas.despesas[index],
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
