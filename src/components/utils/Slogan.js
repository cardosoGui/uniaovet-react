import React from "react";
import { Col, Parallax, Icon } from "react-materialize";
import PropTypes from "prop-types";

const Slogan = ({ title, content, image, icon }) => (
  <div>
    <div className="capa-site">
      <Parallax imageSrc={image} />
    </div>
    <Col className="center-text slogan" offset="s1" s={10} m={12}>
      <h1>{title}</h1>
      <Icon large>{icon}</Icon>
      <h3>{content}</h3>
    </Col>
  </div>
);

Slogan.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.element.isRequired
};

export default Slogan;
