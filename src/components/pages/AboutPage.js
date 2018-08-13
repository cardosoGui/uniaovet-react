import React from "react";
import { Row, Col, Parallax } from "react-materialize";
import Slogan from "../utils/Slogan";

import SloganWallpaper from "../../img/backgrounds/dicas-background.jpg";

const AboutPage = () => (
  <div>
    <Row>
      <Slogan
        title={"União Veterinária"}
        content={"Materiais Veterinários"}
        image={SloganWallpaper}
        icon={"pets"}
      />
    </Row>
    <Row>
      <Col className="offset-s1 offset-m2" s={10} m={8}>
        <div className="text-header">
          <h4>Aqui, queremos ganhar a atenção do nosso cliente</h4>
        </div>
        <div className="text-content">
          <p>
            Por isso, aqui vamos escrever, promoções e outras coisas que possam
            interessar nossos clientes, como por exemplo, podemos dar destaque
            aos produtos que mais são vendidos, além de falar dos serviços
            também.
          </p>
        </div>
      </Col>
    </Row>
    <Parallax imageSrc={SloganWallpaper} />
  </div>
);

export default AboutPage;
