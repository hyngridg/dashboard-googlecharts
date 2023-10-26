import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import "./GraficoBarrasHorizontais.css";

// export const data = [
//   ["City", "2010 população", "2000 população"],
//   ["New York City, NY", 8175000, 8008000],
//   ["Los Angeles, CA", 3792000, 3694000],
//   ["Chicago, IL", 2695000, 2896000],
//   ["Houston, TX", 2099000, 1953000],
//   ["Philadelphia, PA", 1526000, 1517000],
// ];

export const options = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};

function GraficoBarrasHorizontais() {
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
          ["Cidade", "População 1", "População 2"],
          ...chartData.graficoBarrasHorizontais.city.map((city, index) => [
            city,
            chartData.graficoBarrasHorizontais.population1[index],
            chartData.graficoBarrasHorizontais.population2[index],
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
        chartType="BarChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
        className="d-flex justify-content-center align-items-center"
      />
    </>
  );
}

export default GraficoBarrasHorizontais;
