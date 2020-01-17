import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

import indexImage from "../images/house-big-image.jpg"
import stepOne from "../images/step-icons/01-Fresh-Air-White-Right.png"
import stepTwo from "../images/step-icons/Spray-Nozzle-white.png"
import step3 from "../images/step-icons/03-Air-Leak.png"
import step4 from "../images/step-icons/04-House-Seal.png"
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
import doubleSprayImg from "../images/Double-Spray-Nozzle-dark.jpg"


import usgbc from "../images/USGBCC.png"
import homeInnovation from "../images/NGBS-Home-InnovationC.png"
import greenGuard from "../images/Greenguard-GoldC.png"
import ibs from "../images/IBS-Most-Innovative.png"



const aboutTheBook = props => (
  <Layout>
        <SEO title="What is Aero Barrier?"/>
        <section className="page-section">
        <div className="masthead fixed" style={{ backgroundImage: `url(${indexImage})` }}>
          <Container className="container h-100">
            <Row className="row h-100 align-items-center">
              <Col md="12" className="text-center">
                <h1>What is Aero Barrier?</h1>
                <h2><small>AeroBarrier is an automated process for plugging all of the air leaks in your building. Using a high-powered fan, we blow a 40 mph wind into the building. As the wind blows out of the cracks, we fog the interior with an airborne sealant, which plugs the holes as it gets forced out.</small></h2>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <h2>The Aerobarrier Process</h2>
          <Row>
            <Col lg={6} className="text-center">
              <h3>Step 1</h3>
              <p><img src={stepOne} alt="Step 1" class="image-fluid" style={{ maxHeight: `100px` }} /></p>
              <p><strong>BLOW 40 MPH WIND</strong> into the building using a high-powered fan. The pressure forces the wind out of all the holes, cracks, and gaps of the building.</p>
            </Col>
            <Col lg={6} className="text-center">
            <h3>Step 2</h3>
              <p><img src={stepTwo} alt="Step 2" class="image-fluid" style={{ maxHeight: `100px` }} /></p>
              <p><strong>FOG THE INTERIOR</strong>  using sprayers placed throughout the building. As the sprayers mist the sealant, the wind forces sealant out of the all of the holes, cracks and gaps.</p>
            </Col>
          </Row>

          <Row>
            <Col lg={6} className="text-center">
              <h3>Step 3</h3>
              <p><img src={step3} alt="Step 3" class="image-fluid" style={{ maxHeight: `100px` }} /></p>
              <p><strong>PLUG THE AIR LEAKS</strong>  in the entire building as the sealant gets forced out, sealing gaps as thin as a human hair or as thick as a 1/2 inch.</p>
            </Col>
            <Col lg={6} className="text-center">
            <h3>Step 4</h3>
              <p><img src={step4} alt="Step 4" class="image-fluid" style={{ maxHeight: `100px` }} /></p>
              <p><strong>SEAL THE ENTIRE BUILDING</strong> all-at-once with our patented, computerized process. Typical installations take less than 2 hours, and with prep and clean up we can be in-and-out before lunchtime.</p>
            </Col>
          </Row>
          
        </Container>
        <div className="masthead fixed" style={{ backgroundImage: `url(${doubleSprayImg})` }}>
          <Container className="container h-100">
            <Row className="row h-100 align-items-center">
              <Col md="12" className="text-center">
                
                <h2>THE SEALANT</h2>
                <h3>AeroBarrier is a non-toxic, water-borne acrylic sealant</h3>
                <ul>
                  <li>GreenGuard Gold certified</li>
                  <li>No off-gassing</li>
                  <li>Withstands 50-year durability tests with virtually no degradation or loss of seal</li>
                  <li>Meets the strictest certification requirements for use in schools and hospitals</li>
                  <li>Non-flammable</li>
                  <li>Red List Free*</li>
                </ul>
                <p><small>*AeroBarrier contains no ingredients or components from the ILFI Red List of building materials</small></p>
              </Col>
            </Row>
          </Container>
        </div>

        

        <Container>
          <h2>Approved for Any Type of Project</h2>
          <Row>
            <Col lg={3} className="text-center">
              <img src={usgbc} className="img-fluid" alt="USGBC logo" />
            </Col>
            <Col lg={3} className="text-center">
              <img src={homeInnovation} className="img-fluid" alt="Home Innovation Logo" />
            </Col>
            <Col lg={3} className="text-center">
              <img src={greenGuard} className="img-fluid" alt="GreenGuard Logo" />
            </Col>
            <Col lg={3} className="text-center">
              <img src={ibs} className="img-fluid" alt="IBS logo" />
            </Col>
          </Row>
        </Container>

        {/* <Container>
          <h2>THE SEALANT</h2>
          <Row>
            <Col lg={12}>
            <p><strong>AeroBarrier is a non-toxic, water-borne acrylic sealant</strong></p>
            <ul>
              <li>GreenGuard Gold certified</li>
              <li>No off-gassing</li>
              <li>Withstands 50-year durability tests with virtually no degradation or loss of seal</li>
              <li>Meets the strictest certification requirements for use in schools and hospitals</li>
              <li>Non-flammable</li>
              <li>Red List Free*</li>
            </ul>
            <p><small>*AeroBarrier contains no ingredients or components from the ILFI Red List of building materials
</small></p>






            </Col>
          </Row>

        </Container> */}
        <Container>
        {/* <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
          <Tab eventKey="home" title="Aero Barrier Process">
            Show Steps
          </Tab>
          <Tab eventKey="profile" title="Case Studies">
            Show Case Studies
          </Tab>
          <Tab eventKey="contact" title="Contact" >
            Test
          </Tab>
        </Tabs> */}
        </Container>

        {/* <div className="vert-align position-relative">
          <div className="inside-grid">
          Test
          </div>
        </div> */}
        </section>
        
      </Layout>
);

export default aboutTheBook;

export const pageQuery = graphql`
  query {
    iBookstore: file(relativePath: { eq: "ibookstore-500x155.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;