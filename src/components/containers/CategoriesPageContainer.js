import React from "react";
import CategoriesPage from "../pages/CategoriesPage";

import ReactGA from "react-ga";

//Calha

import calhaThumb from "../../img/produtos/calha/calha-de-aco.jpg";
// Mesa

import mesaPantograficaThumb from "../../img/produtos/mesa-pantografica/mesa-calha-pantografica.jpg";
// Suporte de Soro

import suporteDeSoroThumb from "../../img/produtos/suporte-soro-quadripe/suporte-soro-quadripe.jpg";
// Mesa calha

import mesaCalhaInoxThumb from "../../img/produtos/mesa-calha/mesa-calha-inox.jpg";
// Mesa fluidoterapia

import mesaFluidoTerapiaInoxThumb from "../../img/produtos/mesa-fluidoterapia/mesa-fluidoterapia.jpg";
// Berço Verterinário inox

import bercoVetInoxThumb from "../../img/produtos/berco-vet-inox/berco-vet-inox.jpg";

export default class CategoriesPageContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      calhas: {
        categories: [
          { title: "Calha Cirúrgica", img: kmc3D },
          { title: "KMC CCD", img: kmcCCD },
          { title: "KMC FLEX", img: kmcFLEX }
        ]
      },
      rampas: {
        categories: [
          { title: "Rampas Hidráulicas", img: rampaHidraulica },
          { title: "Rampas Pneumáticas", img: rampaPneumatica }
        ]
      },
      elevadores: {
        categories: [
          { title: "Elevadores Eletromecânicos", img: elevadorEletroMecanico },
          { title: "Elevadores Hidráulicos", img: elevadorPneumatico }
        ]
      },
      linhapesada: {
        categories: [
          { title: "Linha Pesada - Alinhadores", img: kmcPesadaAlinhadores },
          {
            title: "Linha Pesada - Balanceadoras",
            img: kmcPesadaBalanceadoras
          },
          { title: "Linha Pesada - Desmontadoras", img: kmcPesadaDesmontadoras }
        ]
      }
    };
  }

  render() {
    const { id } = this.props.match.params;

    ReactGA.pageview(`/categoria/${id}`);

    return (
      <div>
        {id === "alinhadores" ? (
          <CategoriesPage itensArray={this.state.alinhadores.categories} />
        ) : (
          ""
        )}
        {id === "rampas" ? (
          <CategoriesPage itensArray={this.state.rampas.categories} />
        ) : (
          ""
        )}
        {id === "elevadores" ? (
          <CategoriesPage itensArray={this.state.elevadores.categories} />
        ) : (
          ""
        )}
        {id === "linha-pesada" ? (
          <CategoriesPage itensArray={this.state.linhapesada.categories} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
