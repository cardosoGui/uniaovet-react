import React from "react";

import { Col } from "react-materialize";

import { Link } from "react-router-dom";

import "../../css/ItemHover.css";

const ItemHover = () => (
  <div className="hide-on-small-only">
    <Link to="/produtos">
      <div className="content-itens">
        <Col className="span-itens center-align row-itens" m={2}>
          <div className="item01 background-item z-depth-3" />
        </Col>
        <Col offset="m2" className="span-itens center-align row-itens" m={2}>
          <div className="item02 background-item z-depth-3" alt="Calha" />
        </Col>
        <Col offset="m4" className="span-itens center-align row-itens" m={2}>
          <div className="item03 background-item z-depth-3" />
        </Col>
        <Col offset="m6" className="span-itens center-align row-itens" m={2}>
          <div className="item04 background-item z-depth-3" />
        </Col>
        <Col offset="m8" className="span-itens center-align row-itens" m={2}>
          <div className="item05 background-item z-depth-3" />
        </Col>
        <Col offset="m10" className="span-itens center-align row-itens" m={2}>
          <div className="item06 background-item z-depth-3" />
        </Col>
      </div>
    </Link>
  </div>
);

export default ItemHover;
