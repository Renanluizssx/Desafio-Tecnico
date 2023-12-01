import "./App.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  const [numero, setNumero] = useState(0);
  const [soma, setSoma] = useState(0);
  const somaTecla = () => {
    let soma = 0;

    for (let n = 1; n < numero; n++) {
      if (n % 3 === 0 || n % 5 === 0) {
        soma = soma + n;
      }
    }
    return setSoma(soma);
  };
  return (
    <div className="App bg-dark vh-100 text-light overflow-hidden">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={2}>
          <div>
            <h1 className="text-center">Bem vindo</h1>
            <Form className="text-center">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  onChange={(tecla) => setNumero(tecla.target.value)}
                  placeholder="Digite um número inteiro"
                />
              </Form.Group>
              <Button variant="primary" onClick={() => somaTecla()}>
                Gerar
              </Button>
            </Form>

            <p className="text-center">{soma}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
