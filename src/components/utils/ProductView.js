import React from "react";
import { Modal, Button, Col, Tabs, Tab, Icon } from "react-materialize";
import FormProduct from "../forms/FormProduct";
import PropTypes from "prop-types";

import "../../css/ProductView.css";

const ProductView = ({ title, text, image, category, link, thumbnail }) => (
  <Col className="width-ajust" s={10} m={4}>
    <div className="flex-ajust">
      <img className="product-thumb" src={thumbnail} alt="produto união-vet" />
    </div>
    <Modal
      header={category}
      fixedFooter
      trigger={
        <div className="flex-ajust">
          <div className="width-ajust product-button">
            <Button style={{ margin: "1em" }} className="red" waves="light">
              {category}
            </Button>
          </div>
        </div>
      }
    >
      <Tabs className="tab-demo z-depth-1">
        <Tab title={title} active>
          <Col m={6} s={8}>
            <div className="product-image width-ajust">
              <div className="card">
                <div className="card-image">
                  <img
                    align="absmiddle"
                    className="materialboxed"
                    src={image}
                    alt={title}
                  />
                  <span className="card-title">{title}</span>
                  <a class="btn-floating halfway-fab waves-effect waves-light red">
                    <i class="material-icons">add</i>
                  </a>
                </div>
                <div class="card-content">
                  <p>{text}</p>
                </div>
              </div>
            </div>

            <Col className="width-ajust " m={12} s={10}>
              <Button
                style={{ margin: "1em" }}
                className="blue"
                node="a"
                target="_blank"
                href={link}
              >
                Ver Detalhes
                <Icon left>shopping_cart</Icon>
              </Button>
            </Col>
          </Col>
          <Col s={10} m={5}>
            <div>
              <FormProduct />
            </div>
          </Col>
        </Tab>
      </Tabs>
    </Modal>
  </Col>
);

ProductView.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.element,
  thumbnail: PropTypes.element,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default ProductView;
