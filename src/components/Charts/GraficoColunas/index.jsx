import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import "./GraficoColunas.css";

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Vendas, Despesas, and Lucro: 2020-2023",
  },
};

function GraficoColunas() {
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
          ["Ano", "Vendas", "Despesas", "Lucro"],
          ...chartData.graficoColunas.ano.map((ano, index) => [
            ano,
            chartData.graficoColunas.vendas[index],
            chartData.graficoColunas.despesas[index],
            chartData.graficoColunas.lucro[index],
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
