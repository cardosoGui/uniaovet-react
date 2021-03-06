import React from "react";
import { Row, Input, Button, Col, Icon, Preloader } from "react-materialize";
import axios from "axios";
import history from "../utils/History";

class FormProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      send: false
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if ((name && email && message && phone) !== "") {
      axios(
        {
          method: "POST",
          url:
            "https://us-central1-pwa-experiment-eb2bd.cloudfunctions.net/enviarEmail",
          data: {
            name: name,
            email: email,
            phone: phone,
            message: message
          }
        },
        this.setState({ loading: true })
      ).then(response => {
        if (response.data.msg === "success") {
          this.setState({ loading: false });
          window.Materialize.toast(
            "Mensagem Enviada, aguarde nosso contato!",
            5000
          );
          setTimeout(() => {
            history.push("/");
          }, 3000);
        } else if (response.data.msg === "fail") {
          alert("Message failed to send.");
        }
      });
    } else {
      window.Materialize.toast("Por favor, preencha os campos!", 3000);
    }
  }
  toast = () => {
    window.Materialize.toast("Enviando menssagem", 5000);
  };
  render() {
    return (
      <div>
        <Row>
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <Col className="center-align" offset="s2 m4" s={8} m={4} l={12}>
              <h3>Faça seu pedido</h3>
            </Col>
            <Col>
              <Input
                autoComplete="off"
                id="name"
                label="Nome Completo"
                s={11}
                m={10}
                l={12}
                validate
              >
                <Icon>account_circle</Icon>
              </Input>
              <Input
                autoComplete="off"
                id="phone"
                s={11}
                m={10}
                l={12}
                label="Telefone"
                type="tel"
                validate
              >
                <Icon>phone</Icon>
              </Input>
              <Input
                autoComplete="off"
                id="email"
                type="email"
                label="Email"
                s={11}
                m={10}
                l={12}
                validate
              >
                <Icon>email</Icon>
              </Input>
              <Input
                autoComplete="off"
                id="message"
                label="Mensagem"
                type="textarea"
                data-length="120"
                s={11}
                m={10}
                l={12}
                validate
              >
                <Icon>message</Icon>
              </Input>
              <Input
                s={11}
                m={10}
                l={12}
                type="select"
                label="Tamanhos"
                icon="weekend"
                defaultValue="2"
              >
                <option value="1">1,60m</option>
                <option value="2">1,90m</option>
                <option value="3">2,60m</option>
              </Input>
            </Col>
            {this.state.loading ? (
              <Col
                className="center-align"
                style={{ marginBottom: "1em" }}
                s={12}
                m={12}
              >
                <Preloader size="big" />
              </Col>
            ) : (
              ""
            )}
            <Col className="center-align" s={12} m={12}>
              <Button className="blue" large type="submit">
                Enviar
              </Button>
            </Col>
          </form>
        </Row>
      </div>
    );
  }
}

export default FormProduct;
