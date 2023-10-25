import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

// Rota para obter os dados do gráfico
app.get("/chart-data", (req, res) => {
  // Suponha que os dados do gráfico estejam em um arquivo JSON ou sejam gerados dinamicamente
  const chartData = {
    labels: ["Label 1", "Label 2", "Label 3"],
    values: [12, 30, 45],
  };

  res.json(chartData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
