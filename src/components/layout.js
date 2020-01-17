/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.scss"
import "../css/custom.css"
import { Row, Col, Container } from "react-bootstrap"
import { Link } from 'gatsby'
import logo from "../images/aerobarrier-pro-logo.svg"

const getScrollNode = (element) => {
  return element.ownerDocument.scrollingElement || element.ownerDocument.documentElement
}

const isScrolled = (element) => {
  const scrollNode = getScrollNode(element)
  return scrollNode.scrollTop > 0
}

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.siteContainer = React.createRef()
    this.state = {
      scrolled: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  render() {
    let className = "site-container"
    if (this.props.className) className += ` ${this.props.className}`
    if (this.state.scrolled) className += " navbar-scrolled"

    return (
      <div
        className={className}
        ref={this.siteContainer}
        id="page-top">
        <Header/>
        <main>{this.props.children}</main>
        <footer className="py-5">
          <Container>
            <Row>
              <Col lg={6}>
                <p>
                  <img src={logo} alt="Aerobarrier Pros Logo" className="img-fluid" />
                </p>
                <p>AeroBarrier can help builders meet any IECC, Energy Star, or passive house requirement more consistently and more importantly, more cost-effectively than traditional envelope sealing methods. AeroBarrier is a proprietary technology that takes the guesswork out of sealing the envelope.</p>
                <p>
                  AeroBarrier is a first of its kind, cutting-edge envelope sealing technology for commercial, residential and multi-family applications with tested and proven results.</p>
              </Col>
              <Col lg={2}></Col>
              <Col lg={2}>
              <h2>Sitemap</h2>
              <ul>
                  <li><Link to="/about/">About</Link></li>
                  <li><Link to="/benefits/">Benefits</Link></li>
                  <li><Link to="/find-a-dealer/">Find a Dealer</Link></li>
                  <li><Link to="/technical-library/">Technical Library</Link></li>
                </ul>
              </Col>
              
              <Col lg={2}>
                <h2>Locate a Dealer</h2>
                <ul>
                  <li><Link to="/find-a-dealer/">Arizona</Link></li>
                  <li><Link to="/find-a-dealer/">California</Link></li>
                  <li><Link to="/find-a-dealer/">Idaho</Link></li>
                  <li><Link to="/find-a-dealer/">Nevada</Link></li>
                  <li><Link to="/find-a-dealer/">New Mexico</Link></li>
                  <li><Link to="/find-a-dealer/">Texas</Link></li>
                  <li><Link to="/find-a-dealer/">Utah</Link></li>
                  <li><Link to="/find-a-dealer/">Wyoming</Link></li>
                </ul>
              </Col>
            </Row>
            <p className="text-center"><small>©2019 Aerobarrier Pros | Site designed by <a href="https://nautilusdesigns.com">Nautilus Designs</a></small></p>
          </Container>
        </footer>
        
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}