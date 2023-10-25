import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import "./GraficoTabela.css";

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
  pageSize: 1,
};

function GraficoTabela() {
  const [data, setData] = useState([]); // Inicialize o estado com uma matriz vazia

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Carregue os dados do arquivo JSON
        const response = await fetch("./data/chartData.json");
        const chartData = await response.json();

        // Atualize o estado com os dados do arquivo JSON
        setData([
          ["Nome", "Salário", "Empregado por tempo integral"],
          ...chartData.graficoTabela.nome.map((nome, index) => [
            nome,
            chartData.graficoTabela.salario[index],
            chartData.graficoTabela.empregadoTempoIntegral[index],
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
        chartType="Table"
        width="100%"
        height="200px"
        data={data}
        options={options}
        className="d-flex justify-content-center align-items-center"
      />
    </>
  );
}

export default GraficoTabela;
