/* eslint-disable*/
import React from "react";

import { Row, Col, Button } from "react-materialize";
import "../../css/SlideItem.css";
// import ReactGA from "react-ga";

// Imagens

import DogSlogan from "../../img/backgrounds/dog-slogan.jpg";
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

import "../../css/ProductsPage.css";

export default class ProductsPageAnother extends React.Component {
  constructor() {
    super();

    // ReactGA.pageview("/produtos");
  }

  //   handleEvent(action) {
  //     ReactGA.event({
  //       category: "Entrando no site",
  //       action: `Clicou no botão ${action}, pela HomePage`
  //     });
  //   }
  render() {
    return (
      <Row>
        <Col offset="s2" s={10} m={12} l={12}>
          <Col s={10} m={4} l={4}>
            <br />
            <div className="align-item-flex">
              <img className="thumbnail small" src={calhaThumb} alt="calha" />
            </div>
            <br />
            <div className="align-item-flex">
              <Button
                className="green"
                large
                node="a"
                // onClick={() => {
                //   this.handleEvent("Alinhadores");
                // }}
                href="/todos-produtos/Calha Cirúrgica"
              >
                Calha
              </Button>
            </div>
          </Col>
          <Col s={10} m={4} l={4}>
            <br />
            <div className="align-item-flex">
              <img
                className="thumbnail small"
                src={suporteDeSoroThumb}
                alt="suporte para soro quadripé"
              />
            </div>
            <br />
            <div className="align-item-flex">
              <Button
                className="green"
                large
                node="a"
                // onClick={() => {
                //   this.handleEvent("Alinhadores");
                // }}
                href="/todos-produtos/Suporte Para Soro"
              >
                Suporte para soro
              </Button>
            </div>
          </Col>
          <Col s={10} m={4} l={4}>
            <br />
            <div className="align-item-flex">
              <img
                className="thumbnail small"
                src={mesaPantograficaThumb}
                alt="mesa pantografica"
              />
            </div>
            <br />
            <div className="align-item-flex">
              <Button
                className="green"
                large
                node="a"
                // onClick={() => {
                //   this.handleEvent("Alinhadores");
                // }}
                href="/todos-produtos/Mesa Pantográfica"
              >
                Mesa Pantográfica
              </Button>
            </div>
          </Col>
          <Col s={10} m={4} l={4}>
            <br />
            <div className="align-item-flex">
              <img
                className="thumbnail small"
                src={mesaCalhaInoxThumb}
                alt="Mesa Calha Inox"
              />
            </div>
            <br />
            <div className="align-item-flex">
              <Button
                className="green"
                large
                node="a"
                // onClick={() => {
                //   this.handleEvent("Alinhadores");
                // }}
                href="/todos-produtos/Mesa Calha Inox"
              >
                Mesa Calha Inox
              </Button>
            </div>
          </Col>
          <Col s={10} m={4} l={4}>
            <br />
            <div className="align-item-flex">
              <img
                className="thumbnail small"
                src={mesaFluidoTerapiaInoxThumb}
                alt="Mesa Fluidoterapia"
              />
            </div>
            <br />
            <div className="align-item-flex">
              <Button
                className="green"
                large
                node="a"
                // onClick={() => {
                //   this.handleEvent("Alinhadores");
                // }}
                href="/todos-produtos/Mesa Fluidoterapia"
              >
                Mesa Fluidoterapia
              </Button>
            </div>
          </Col>
          <Col s={10} m={4} l={4}>
            <br />
            <div className="align-item-flex">
              <img
                className="thumbnail small"
                src={bercoVetInoxThumb}
                alt="Berço Para Animais"
              />
            </div>
            <br />
            <div className="align-item-flex">
              <Button
                className="green"
                large
                node="a"
                // onClick={() => {
                //   this.handleEvent("Alinhadores");
                // }}
                href="/todos-produtos/Berço Para Animais"
              >
                Berço Para Animais
              </Button>
            </div>
          </Col>
        </Col>
      </Row>
    );
  }
}
