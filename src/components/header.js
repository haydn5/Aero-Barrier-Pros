import React from "react"

import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'
import { Link } from 'gatsby'

import logo from "../images/aerobarrier-pro-logo.svg"

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
     
      <div className="container">
        <Navbar className="navbar  navbar-expand-md navbar-light" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          
            <Link className="navbar-brand">
              <img src={logo} alt={'Aero Barrier Logo'} className="imgFullCol" width="270" />
            </Link>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav text-center ml-auto">
              <ul className="navbar-nav  text-center">
	              
                <li><Link to="/about/" className="nav-link" activeClassName="active">About</Link></li>
                <li><Link to="/benefits/" className="nav-link" activeClassName="active">Benefits</Link></li>
                <li><Link to="/find-a-dealer/" className="nav-link" activeClassName="active">Find a Dealer</Link></li>
              </ul>
              </Nav>
            </Navbar.Collapse>
          
        </Navbar>
        </div>
      </>
    );
  }
}
