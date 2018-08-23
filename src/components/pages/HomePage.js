import React from "react";
import { Row, Col, Button, Icon, Slider, Slide } from "react-materialize";
import { Link } from "react-router-dom";
import ItemHover from "../utils/ItemHover";
import "../../css/HomePage.css";
import DogSlogan from "../../img/backgrounds/dog-slogan02.jpg";
import Slide01 from "../../img/backgrounds/veterinario.jpg";
import Doctor from "../../img/backgrounds/doctor.jpg";

import Slogan from "../utils/Slogan";

const Homepage = () => (
  <div className="homepage">
    <Row>
      <Slogan
        title={"União Veterinária"}
        content={"Materiais Veterinários"}
        image={DogSlogan}
        icon={"pets"}
      />
    </Row>
    <Row>
      <Col m={10} l={12}>
        <ItemHover />
      </Col>
    </Row>
    <Row>
      <Col className="offset-s1 offset-m1" s={10} m={6}>
        <div className="text-header">
          <h4>Nosso Propósito</h4>
        </div>
        <div className="text-content">
          <p>
            A União-Veterinaria, esta no mercado a mais de 10 anos, focada em
            manter a qualidade sempre excelente, não medimos esforços em trazer
            soluções para o seu negócio. <br />A empresa vem desenvolvendo
            móveis e equipamentos de uso veterinário que são reconhecidos pela
            excelência na qualidade. Aqui na nossa pagina, você encontrar todos
            os produtos que precisa, para a sua <strong>Veterinaria</strong>,
            fique a vontade, encontre tudo em nossa pagina de produtos clicando
            em saiba mais.
          </p>
        </div>
      </Col>
      <Col className="offset-s2 offset-m1" s={10} m={4}>
        <Link to="/produtos">
          <div alt="Garantia de Qualidade" className="image-home hoverable" />
        </Link>
      </Col>
      <Col className="offset-s3 offset-m5" s={8} m={7}>
        <Link to="/produtos">
          <Button large waves="light" className="blue">
            <Icon left>pets</Icon>
            saiba mais
          </Button>
        </Link>
      </Col>
    </Row>
    <hr />
    <Row>
      <Col className="offset-s1 offset-m2" s={10} m={8}>
        <div className="text-header">
          <h4>Nossa Fábrica</h4>
        </div>
        <div className="text-content">
          <p>
            Localizada no bairro das Nações Unidas em São Paulo a
            <Link to="sobre">
              <span className="blue-text text-darken-2">
                {" "}
                União-Veterinária{" "}
              </span>
            </Link>
            dispõe de um parque fabril de 1.200 metros quadrados, conta com uma
            equipe de alta capacitação técnica e utiliza matéria-prima de
            primeira qualidade.
          </p>
        </div>
        <Link to="/produtos">
          <Button>saber mais</Button>
        </Link>
        <hr />
      </Col>
    </Row>
    <Row>
      <Col className="offset-s1 offset-m2" s={10} m={8}>
        <Link to="/produtos">
          <Slider>
            <Slide
              alt="equipamentos-veterinarios"
              src={Slide01}
              title="Produtos em Destaque"
            >
              <div className="text-content">
                <p>Clique Aqui</p>
              </div>
            </Slide>
            <Slide
              alt="equipamentos-veterinarios"
              src={Doctor}
              title="Outros Produtos em Destaque"
            >
              <div className="text-content">
                <p>Clique Aqui</p>
              </div>
            </Slide>
          </Slider>
        </Link>
      </Col>
    </Row>
  </div>
);

export default Homepage;
