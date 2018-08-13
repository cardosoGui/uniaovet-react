import React from "react";
import {
  Navbar,
  NavItem,
  SideNav,
  SideNavItem,
  Button,
  Icon
} from "react-materialize";
import { Link } from "react-router-dom";
import "../../css/Navigation.css";

const Navigation = () => (
  <div>
    <div>
      <Navbar className="color-site" brand="UniVet" fixed left>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/sobre">Sobre nós</NavItem>
        <NavItem href="/produtos">Produtos</NavItem>
        <NavItem href="/contato">Contato</NavItem>
      </Navbar>
    </div>
    <div>
      <SideNav
        trigger={
          <div className="navbar-button">
            <Button floating style={{ position: "fixed" }} icon="menu" />
          </div>
        }
        options={{ closeOnClick: true }}
      >
        <Link to="/">
          <div className="nav-item-menu">
            <Icon>home</Icon>
            <span className="nav-item-text">Home</span>
          </div>
        </Link>
        <Link to="/sobre">
          <div className="nav-item-menu">
            <Icon>more</Icon>
            <span className="nav-item-text">Sobre nós</span>
          </div>
        </Link>
        <Link to="/produtos">
          <div className="nav-item-menu">
            <Icon>work</Icon>
            <span className="nav-item-text">Produtos</span>
          </div>
        </Link>
        <Link to="/contato">
          <div className="nav-item-menu">
            <Icon>contacts</Icon>
            <span className="nav-item-text">Contato</span>
          </div>
        </Link>
        <SideNavItem divider />
        <SideNavItem subheader>Crie seu App</SideNavItem>
        <SideNavItem>Site & Aplicativo</SideNavItem>
      </SideNav>
    </div>
  </div>
);

export default Navigation;
