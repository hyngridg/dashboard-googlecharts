import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 3000;

app.use(express.json());

// Obter o caminho do diretório do módulo atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Rota para obter os dados do gráfico
app.get("/chart-data", (req, res) => {
  const chartDataPath = path.join(__dirname, "data", "chartData.json");

  // Lê o arquivo "chartData.json"
  fs.readFile(chartDataPath, "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo chartData.json:", err);
      return res.status(500).json({ error: "Erro ao ler o arquivo" });
    }

    // Envia os dados como resposta
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
