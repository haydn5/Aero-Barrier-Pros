import React from "react"
import { Row, Col, Container, Carousel } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

import typicalHome from "../images/typical-home.jpg"
import oneStep from "../images/1-STEP.png"
import fifteenSteps from "../images/15-steps.png"
import traditionalVsAB from "../images/traditional-vs-ab.jpg"
import healthier from "../images/healthier.jpg"

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import indexImage from "../images/spray-bg.jpg"
import multiFamilyPDF from "../images/air-sealing-multi-family.pdf"

import usgbc from "../images/USGBCC.png"
import homeInnovation from "../images/NGBS-Home-InnovationC.png"
import greenGuard from "../images/Greenguard-GoldC.png"
import ibs from "../images/IBS-Most-Innovative.png"

import sealingSize from "../images/Sealing-Sizes-01.png"
import awardsWhite from "../images/aero-barrier-awards-white.png"


import icon01 from "../images/icons/01-single-family.png"
import icon02 from "../images/icons/02-multi-family.png"
import icon03 from "../images/icons/03-schools.png"
import icon04 from "../images/icons/04-hospitals.png"
import icon05 from "../images/icons/05-offices.png"
import icon06 from "../images/icons/06-commerical.png"

// Gallery

import carousel01 from "../images/index-carousel/01-key.jpeg"
import carousel02 from "../images/index-carousel/02-lighting-outet.jpg"
import carousel03 from "../images/index-carousel/03-electrical.jpg"
import carousel04 from "../images/index-carousel/04-light-fixture.jpg"
import carousel05 from "../images/index-carousel/05-punchouts.jpg"

import doubleSprayImg from "../images/Double-Spray-Nozzle-dark.jpg"


const indexPage = props => (
  <Layout>
        <SEO title="100% Air Sealing Guaranteed"/>
        <section className="page-section">

        <div className="masthead fixed" style={{ backgroundImage: `url(${indexImage})` }}>
          <Container className="container h-100">
            <Row className="row h-100 align-items-center">
              <Col md="12" className="text-center">
                <h1>TIGHTER IS BETTER</h1>
                <h2>Sealed The First Time, Guaranteed</h2>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="gray-box">
          <Container>
            <h2 className="text-center">AeroBarrier seals gaps & invisible air leaks. <br />
  Low ACH means comfort you can feel & energy savings you’ll enjoy.</h2>
            <Row className="pt-2">
              <Col lg={2} xs={6} className="text-center">
              <img src={icon01} alt="Residential" className="img-fluid" style={{ maxWidth: `100px` }} />
              <p><strong>Residential</strong></p>
              </Col>
              <Col lg={2} xs={6} className="text-center">
              <img src={icon02} alt="Multi-Family" className="img-fluid" style={{ maxWidth: `100px` }} />
              <p><strong>Multi-Family</strong></p>
              </Col>
              <Col lg={2} xs={6} className="text-center">
              <img src={icon03} alt="Schools" className="img-fluid" style={{ maxWidth: `100px` }} />
              <p><strong>Schools</strong></p>
              </Col>
              <Col lg={2} xs={6} className="text-center">
              <img src={icon04} alt="Hospitals" className="img-fluid" style={{ maxWidth: `100px` }} />
              <p><strong>Hospitals</strong></p>
              </Col>
              <Col lg={2} xs={6} className="text-center">
              <img src={icon05} alt="Offices" className="img-fluid" style={{ maxWidth: `100px` }} />
              <p><strong>Offices</strong></p>
              </Col>
              <Col lg={2} xs={6} className="text-center">
              <img src={icon06} alt="Commerical" className="img-fluid" style={{ maxWidth: `100px` }} />
              <p><strong>Commerical</strong></p>
              </Col>
            </Row>
            
            <Row>
              <Col lg={2}></Col>
              <Col lg={8} className="tealBox">
              <h2>New Construction & Retrofits</h2>
              <div className="video-responsive">
                <iframe title="Video" src="https://www.youtube.com/embed/WRskuIto5J4" width="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
              </div>
              <img src={awardsWhite} alt="Awards" className="img-fluid" />
              </Col>
              <Col lg={2}></Col>
            </Row>
          </Container>
        </div>
        
        <div className="light-gray-box">
          <h2 className="text-center pt-2">Air Sealing Solved</h2>
        </div>
        <Container className="pt-3">
          
          <Row>
            <Col lg={6} className="text-center">
            <img src={oneStep} alt="1 Step" className="img-fluid" style={{ maxWidth: `300px` }} />
            </Col>
            <Col lg={6} className="pt-2">
              <h3>Simple, One Step Air Sealing</h3>
              <p>Consolidate your air sealing with AeroBarrier, and meet code requirements simply, easily, and consistently. We guarantee that you will pass code.</p>
            </Col>
          </Row>
          <p className="text-center font-size-lg">OR</p>
          <Row>
            <Col lg={6} className="text-center">
            <img src={fifteenSteps} alt="15 Step" className="img-fluid" style={{ maxWidth: `300px` }} />
            </Col>
            <Col lg={6} className="pt-2">
              <h3>The Traditional Approach</h3>
              <p>Traditional air sealing approaches are a hodge podge effort from multiple trades that requires all sorts of babysitting. Results are never certain, and there’s nothing worse than failing a blower door test just before occupancy. </p>
            </Col>
          </Row>
          <p className="text-center"><a href={multiFamilyPDF}>Download the PDF that compares the different sealing approaches</a></p>
        </Container>

        <div className="gray-box-title">
        <h2 className="text-center">Understanding Air Leakages</h2>
        </div>
        <Container className="pt-4">
          
          <Row>
            <Col lg={3}>
              <img src={typicalHome} alt="Typical Home Graphic" className="img-fluid" />
            </Col>
            <Col lg={6}>
              <img src={traditionalVsAB} alt="Typical Home Graphic" className="img-fluid" />
            </Col>
            <Col lg={3}>
              <img src={healthier} alt="Healthier Graphic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="blueBox">
                <h2>Save Time</h2>
                <ul>
                  <li>Typically in and out within 3 hours</li>
                  <li>Meet code requirements the first time</li>
                  <li>Airtight in hours instead of days/weeks</li>
                </ul>
                <Img fluid={props.data.indexImage.childImageSharp.fluid} className="img-fluid"   alt="Person Sweeping" />
                <h3>Resume Work the Same Day</h3>
                <p>Resume all work 30 minutes after the sealant process is complete.</p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="tealBox">
                <h2>Save Money</h2>
                <ul>
                  <li>Tight buildings require smaller HVAC systems</li>
                  <li>Stop overspending on utilities</li>
                  <li>High Performance Without a High Price</li>
                </ul>
                <Img fluid={props.data.doubleSpray.childImageSharp.fluid} className="img-fluid"   alt="Double Spray" />
                <h3>Fix Workmanship Error</h3>
                <p>Aerobarrier fills gaps as small as a human hair and up to 1/2 inch wide. All sorts of gaps left by tradesmen get filled with AeroBarrier–things like drywall or sheathing overcuts, gaps between boards, and unsealed penetrations.</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="gold-bar">
          <Container className="text-center">
            <h3>CONTACT US FOR A FREE BID</h3>
          <button to="/find-a-dealer/" class="btn btn-light text-center text-uppercase"><strong>Find a Dealer</strong></button>
            
          </Container>
        </div>

          <Container className="py-3">
            <Row>
            <Col lg={6}>
              <h2>Seal Every Nook & Cranny</h2>
              <p>AeroBarrier makes it easy to seal gaps as tiny as a human hair or as large as 1/2 an inch. </p>
              <p><img src={sealingSize} className="img-fluid" alt="Sealing Size Guage" /></p>
            </Col>
            <Col lg={6}>
              <Carousel >
                <Carousel.Item>
                  <img src={carousel01} alt="First slide" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={carousel02} alt="First slide" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={carousel03} alt="First slide" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={carousel04} alt="First slide" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={carousel05} alt="First slide" className="d-block w-100" />
                </Carousel.Item>
              </Carousel>
            </Col>
            </Row>
          </Container>


        <Container>
          <h2 className="text-center">APPROVED FOR ANY TYPE OF PROJECT</h2>
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


        </section>
        
      </Layout>
);

export default indexPage;

export const pageQuery = graphql`
  query {
    iBookstore: file(relativePath: { eq: "ibookstore-500x155.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    buyAmazon: file(relativePath: { eq: "buy-button-amazon.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    indexImage: file(relativePath: { eq: "index-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    doubleSpray: file(relativePath: { eq: "Double-Spray-Nozzle-dark.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;