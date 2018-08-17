import React from "react";
import { Modal, Button, Col, Tabs, Tab, Icon } from "react-materialize";
import PropTypes from "prop-types";

import "../../css/ProductView.css";

const ProductView = ({ title, text, image, category, link, thumbnail }) => (
  <Col className="width-ajust" s={10} m={4}>
    <div>
      <img className="product-thumb" src={thumbnail} alt="produto união-vet" />
    </div>
    <Modal
      header={category}
      fixedFooter
      trigger={
        <div className="width-ajust product-button">
          <Button style={{ margin: "1em" }} className="red" waves="light">
            {category}
          </Button>
        </div>
      }
    >
      <Tabs className="tab-demo z-depth-1">
        <Tab title={title} active>
          <Col m={12} s={10}>
            <h4>
              <strong> Especificações: </strong>
            </h4>
            <p>{text}</p>
          </Col>

          <Col offset="m2 s1" m={8} s={10}>
            <div className="product-image width-ajust">
              <img
                align="absmiddle"
                className="product-image-content"
                src={image}
                alt={title}
              />
            </div>
            <Col className="width-ajust " m={12} s={10}>
              <Button
                style={{ margin: "1em" }}
                className="blue"
                node="a"
                href={link}
              >
                Ver Detalhes
                <Icon left>shopping_cart</Icon>
              </Button>
            </Col>
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
