import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Medidor from "./components/Charts/Medidor";
import Pizza from "./components/Charts/Pizza";
import GraficoColunas from "./components/Charts/GraficoColunas";
import GraficoTabela from "./components/Charts/GraficoTabela";
import GraficoBarrasHorizontais from "./components/Charts/GraficoBarrasHorizontais";
import GraficoLinhasEvolutivas from "./components/Charts/GraficoLinhasEvolutivas";
import chartData from "../data/chartData.json";

function App() {
  const statusGrafico = [
    {
      variant: ["success", "danger", "warning", "info", "light", "dark"],
      status: ["NORMAL", "LENTO", "CRITICO"],
    },
  ];

  const getStatus = (value) => {
    if (value >= 0 && value <= 33) {
      return statusGrafico[0].status[0];
    } else if (value >= 34 && value <= 66) {
      return statusGrafico[0].status[1];
    } else if (value >= 67 && value <= 100) {
      return statusGrafico[0].status[2];
    } else {
      return "";
    }
  };

  const operationStatus = getStatus(chartData.medidor.values);

  return (
    <>
      <h1 className="mb-4">Projeto Google Charts</h1>

      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Gráfico Medidor</Card.Title>
              <Medidor />
            </Card.Body>
            <Card.Footer className={`text-muted bg-${operationStatus}`}>
              {operationStatus !== ""
                ? `Operação em estado ${operationStatus}.`
                : ""}
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Gráfico Pizza</Card.Title>
              <Card.Text>
                <Pizza />
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer
              className={`text-muted text-bg-${statusGrafico.variant}`}
            >
              Status
            </Card.Footer> */}
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Gráfico de Colunas</Card.Title>
              <Card.Text>
                <GraficoColunas />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Gráfico Barras Horizontais</Card.Title>
              <Card.Text>
                <GraficoBarrasHorizontais />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Gráfico Linhas Evolutivas</Card.Title>
              <Card.Text>
                <GraficoLinhasEvolutivas />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Gráficos de Tabela</Card.Title>
              <Card.Text>
                <GraficoTabela />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default App;
