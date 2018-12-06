/* eslint-disable*/
import React from "react";
import ReactGA from "react-ga";
import { Col, Row } from "react-materialize";
import ProductItem from "../pages/products/ProductItem";

import DogSlogan from "../../img/backgrounds/dog-slogan.jpg";
// Calha
// Calha
import calhaProd from "../../img/produtos/calha/calha-de-aco-prod.jpg";
import calhaThumb from "../../img/produtos/calha/calha-de-aco.jpg";
// Mesa
import mesaPantograficaProd from "../../img/produtos/mesa-pantografica/mesa-calha-pantografica-prod.jpg";
import mesaPantograficaThumb from "../../img/produtos/mesa-pantografica/mesa-calha-pantografica.jpg";
// Suporte de Soro
import suporteDeSoroProd from "../../img/produtos/suporte-soro-quadripe/suporte-soro-quadripe-prod.jpg";
import suporteDeSoroThumb from "../../img/produtos/suporte-soro-quadripe/suporte-soro-quadripe.jpg";
// Mesa calha
import mesaCalhaInoxProd from "../../img/produtos/mesa-calha/mesa-calha-inox-prod.jpg";
import mesaCalhaInoxThumb from "../../img/produtos/mesa-calha/mesa-calha-inox.jpg";
// Mesa fluidoterapia
import mesaFluidoTerapiaInoxProd from "../../img/produtos/mesa-fluidoterapia/mesa-fluidoterapia-prod.jpg";
import mesaFluidoTerapiaInoxThumb from "../../img/produtos/mesa-fluidoterapia/mesa-fluidoterapia.jpg";
// Berço Verterinário inox
import bercoVetInoxProd from "../../img/produtos/berco-vet-inox/berco-vet-inox-prod.jpg";
import bercoVetInoxThumb from "../../img/produtos/berco-vet-inox/berco-vet-inox.jpg";

export default class ProductsPageContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      calhaCirurgica: [
        {
          title: "Calha cirúrgica - Pequena",
          img: calhaProd,
          modal: calhaProd,
          content:
            "Estrutura em aço inox formato em U, possui suporte lateral para amarração do animal, calha com inclinação para escoamento de líquido, Medidas: (AxCxL): 16 x 53 x 26 cm."
        }
      ],
      suporteSoro: [
        {
          title: "Suporte para soro quadripé",
          img: suporteDeSoroProd,
          modal: suporteDeSoroProd,
          content:
            "Usado para pendurar bolsas de soro enquanto os pacientes recebem os medicamentos. Pés com ponteiras em borracha, altura regulável e dois ganchos para armazenar as bolsas de soro ou medicamento, capacidade mínima:  02 frascos e altura Máxima : 1,90m."
        }
      ],
      mesaPantografica: [
        {
          title: "Mesa Pantográfica",
          img: mesaPantograficaProd,
          modal: mesaPantograficaProd,
          content:
            "Diferenciais: Este tampo permite ao Veterinário ou Veterinária a regulagem que necessitarem devido ao grande número de ajustes e regulagens que esta Mesa é capaz de fazer atráves de suas articulações e inclinições sendo em sua altura em seu inclinamento para as laterais. Regulagem de altura entre 60 cm a 1,20 cm do chão, acionamento através de pedal elétrico, possui 2 sistemas de segurança para proteção de raios e descargas de energia indesejadas."
        }
      ],
      mesaCalha: [
        {
          title: "Mesa Calha Inox",
          img: mesaCalhaInoxProd,
          modal: mesaCalhaInoxProd,
          content:
            "Usada em procedimentos cirúrgicos,  Possui tampos de inox de alta resistência e durabilidade com vincos que escoam os líquidos em direção ao dreno. Altura 1,14m e largura 60cm."
        }
      ],
      mesaFluido: [
        {
          title: "Mesa Fluidoterapia",
          img: mesaFluidoTerapiaInoxProd,
          modal: mesaFluidoTerapiaInoxProd,
          content:
            "Usada em procedimentos cirúrgicos, Possui tampos de inox de alta resistência e durabilidade com vincos que escoam os líquidos em direção ao dreno. Altura 1,14m e largura 60cm." +
            "Possui tampos de inox de alta resistência e durabilidade com vincos que escoam os líquidos em direção ao dreno. " +
            "Comprimento 1.10m, altura 70cm a 1.00 e largura 60cm. Tampo em forma de cuba com altura de 5 cm e tela superior removível  em Inox. Pés em tubo quadrado em inox, com manípolas laterais para inclinação e regulagem da altura da mesa. " +
            "Acompanha: suporte de soro em inox com altura regulável e removível e balde em alumínio, suporte para amarras e contenção do animal"
        }
      ],
      bercoVet: [
        {
          title: "Berço Para Animais",
          img: bercoVetInoxProd,
          modal: bercoVetInoxProd,
          content:
            "Berço fabricado em Inox com prateleira inferior em inox, gaveta para armazenamento de materiais, suporte de soro removível, suporte para monitor cirúrgico, suporte para cilindro de 5 litros de oxigênio 'modelo de ferro', laterais removíveis com sistema manual para abaixar e levantar as laterais, rodízios giratórios. "
        }
      ]
    };
  }

  render() {
    const { id } = this.props.match.params;
    ReactGA.pageview(`/produtos/${id}`);
    return (
      <div>
        <Row>
          <Col offset="" s={12} m={12} l={12}>
            <h1>{id}</h1>

            {id === "Calha Cirúrgica" ? (
              <ProductItem itens={this.state.calhaCirurgica} />
            ) : (
              ""
            )}
            {id === "Suporte Para Soro" ? (
              <ProductItem itens={this.state.suporteSoro} />
            ) : (
              ""
            )}
            {id === "Mesa Pantográfica" ? (
              <ProductItem itens={this.state.mesaPantografica} />
            ) : (
              ""
            )}
            {id === "Mesa Calha Inox" ? (
              <ProductItem itens={this.state.mesaCalha} />
            ) : (
              ""
            )}
            {id === "Mesa Fluidoterapia" ? (
              <ProductItem itens={this.state.mesaFluido} />
            ) : (
              ""
            )}
            {id === "Berço Para Animais" ? (
              <ProductItem itens={this.state.bercoVet} />
            ) : (
              ""
            )}
          </Col>
        </Row>
      </div>
    );
  }
}
