/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Modal, Col, Row, Button, Icon } from "react-materialize";
import PropTypes from "prop-types";
// import ReactGA from "react-ga";

class CardItem extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  //   handleEvent(action) {
  //     ReactGA.event({
  //       category: "Produto",
  //       action: `Clicou no produto ${action}`
  //     });
  //   }

  render() {
    return (
      <Col s={10} m={12} l={12}>
        <div className="card">
          <div className="card-image">
            <img
              className="materialboxed"
              src={this.props.image}
              alt={this.props.title}
              data-caption={this.props.title}
            />
            <Modal
              header={this.props.title}
              fixedFooter
              trigger={
                <a className="btn-floating halfway-fab waves-effect waves-light green">
                  <i
                    className="material-icons"
                    //analitcs feature
                    //   onClick={() => {
                    //     this.handleEvent(this.props.title);
                    //   }}
                  >
                    add
                  </i>
                </a>
              }
            >
              <Row>
                <Col offset="s3 m3 l5" s={6} m={6} l={6}>
                  <Button
                    large
                    node="a"
                    href={`/contato/${this.props.title}`}
                    className="button-market green"
                    waves="light"
                  >
                    Orçamento
                    <Icon right>add_shopping_cart</Icon>
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col offset="s3 m3 l3" s={6} m={6} l={6}>
                  <p className="center-align">clique na imagem para ampliar</p>
                  <img
                    src={this.props.modal}
                    className={`product-image materialboxed`}
                  />
                </Col>
              </Row>
              <Row>
                <Col s={12} m={12} l={12}>
                  <h3 className="hide-on-small-only">{this.props.content}</h3>
                  <p className="hide-on-med-and-up">{this.props.content}</p>
                </Col>
              </Row>
            </Modal>
          </div>
          {this.props.content.length >= 230 ? (
            <div className="card-content" style={{ padding: "10px" }}>
              <span className="card-title">
                <h5 style={{ color: "#000" }}>{this.props.title}</h5>
              </span>
              <p>{this.props.content}</p>
            </div>
          ) : (
            <div className="card-content">
              <span className="card-title">
                <h5 style={{ color: "#000" }}>{this.props.title}</h5>
              </span>
              <p>{this.props.content}</p>
            </div>
          )}
        </div>
      </Col>
    );
  }
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  modal: PropTypes.string.isRequired
};

export default CardItem;
