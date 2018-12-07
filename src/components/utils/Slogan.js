import React from "react";
import { Col, Parallax, Icon } from "react-materialize";
import PropTypes from "prop-types";
import logo from "../../img/logo/logo.png";

const Slogan = ({ title, content, image, icon }) => (
  <div>
    <div className="capa-site">
      <Parallax imageSrc={image} />
    </div>
    <Col className="center-text slogan" offset="s1" s={10} m={12}>
      <img className="image-logo" src={logo} alt="logo" width="500px" />
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
