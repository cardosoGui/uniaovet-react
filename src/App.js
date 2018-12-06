import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ProductsPage from "./components/pages/ProductsPage";
import ContactPage from "./components/pages/ContactPage";

import Navigation from "./components/header/Navigation";

import { Footer } from "react-materialize";
import ProductsPageAnother from "./components/pages/ProductsPageAnother";
import ProductsPageContainer from "./components/containers/ProductsPageContainer";

const App = () => (
  <div>
    <Navigation />
    <Route path="/" exact component={HomePage} />
    <Route path="/sobre" exact component={AboutPage} />
    <Route path="/produtos" exact component={ProductsPage} />
    <Route path="/produtos-outros" exact component={ProductsPageAnother} />
    <Route path="/todos-produtos/:id" exact component={ProductsPageContainer} />
    <Route path="/contato" exact component={ContactPage} />
    <Route path="/contato/:id" exact component={ContactPage} />
    <Footer
      copyrights="&copy 2018 Copyright Todos os direitos reservados a União-Veterinária"
      links={
        <ul>
          <li>
            <a className="grey-text text-lighten-3" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="/sobre">
              Sobre nós
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="/produtos">
              Produtos
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="/contato">
              Contato
            </a>
          </li>
        </ul>
      }
      className="color-site"
    >
      <h5 className="white-text">União-Veterinária</h5>
      <p className="grey-text text-lighten-4">
        Tudo que você precisa esta aqui.
      </p>
    </Footer>
  </div>
);

export default App;
