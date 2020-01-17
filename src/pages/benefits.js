import React from "react"
import { Row, Col, Container, Table  } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"


import indexImage from "../images/index-image.jpg"
import { graphql } from 'gatsby'

import freshAir from "../images/education/Fresh-Air.png"
import snowFlakes from "../images/education/Snowflakes.png"
import waterDroplet from "../images/education/Water-Droplet-b.png" 

import easyChair from "../images/education/Easy-Chair.png"
import money from "../images/education/Money.png"
import muscles from "../images/education/Muscles.png"

import noSpray from "../images/No-Spray-Foam-01.jpg"
import acUnit from "../images/AC-Unit-smaller-cropped.jpg"

import rebates from "../images/Rebates.png"
import costsOverTime from "../images/Utility-Costs-Over-Time-v2.png"
import waterdiffusion from "../images/Water-diffusion-vs-air-leakage-2.jpg"

import wood from "../images/Wood.png"
import mold from "../images/Mold.png"
import broken from "../images/Broken.png"

const benefits = props => (
  <Layout>
        <SEO title="Benefits"/>
        <section className="page-section">
        <div className="masthead fixed" style={{ backgroundImage: `url(${indexImage})` }}>
          <Container className="container h-100">
            <Row className="row h-100 align-items-center">
              <Col md="12" className="text-center">
                <h1>WHY AIR SEALING MATTERS</h1>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="pt-3 oneCol">
            <p>To understand air sealing benefits, it helps to understand what an air barrier is.</p>
            <p>
An air barrier is a system for controlling the air flow between conditioned and unconditioned spaces. This air barrier system is the primary air enclosure boundary that separates indoor (conditioned) air from outdoor (unconditioned) air.</p>
<p>
In a multi-unit building (office, townhouse or apartment) the air barrier system also mitigates the air and noise sharing between adjacent units.</p>
            
        </Container>
        <Container>
        <Row>
            <Col lg={4} className="text-center">
              <p><img src={freshAir} alt="Fresh Air" class="img-fluid img-max-height-150" /></p>
              <p><strong>Keeps conditioned air in conditioned spaces</strong></p>
            </Col>
            <Col lg={4} className="text-center">
              <p><img src={snowFlakes} alt="Snowflake" class="img-fluid img-max-height-150"  /></p>
              <p><strong>Prevents air leaks through cracks</strong></p>
            </Col>
            <Col lg={4} className="text-center">
              <p><img src={waterDroplet} alt="Water Droplet" class="img-fluid img-max-height-150" /></p>
              <p><strong>Stops interior moist air from entering wall cavities</strong></p>
            </Col>
          </Row>
        </Container>

        <div className="dark-blue-graident">
        <Container>
          <Row>
            <Col lg={3} className="text-center">
              <h2 class="display-1"><strong>10x</strong></h2>
            </Col>
            <Col lg={9}>
              <p>The State of Utah published a study, explaining that:</p>
              <p className="font-size-lg">Every $1.00 spent on energy engineering pays off with a minimum of $10.00 in cost & operational savings.</p>
              <p>Source: DCFM 2016 SBEEP Annual Report</p>
            </Col>
          </Row>
        </Container>
        </div>
        
          
        
        <Container>
          <h2>Benefits of an Air Barrier</h2>
          
          <Row>
            <Col lg={4} className="text-center">
              <p><img src={easyChair} alt="Easy Chair" class="image-fluid img-max-height-150" /></p>
              <p><strong>COST SAVINGS</strong></p>
              <p>Reduce both the initial cost and the ongoing utilities of the HVAC system</p>
            </Col>
            <Col lg={4} className="text-center">
              <p><img src={money} alt="Money" class="image-fluid img-max-height-150" /></p>
              <p><strong>DURABILITY</strong></p>
              <p>Protect the structural integrity of the building by preventing air & moisture transfer</p>
            </Col>
            <Col lg={4} className="text-center">
              <p><img src={muscles} alt="Muscles" class="image-fluid img-max-height-150" /></p>
              <p><strong>COMFORT</strong></p>
              <p>Achieve a more consistent temperature throughout the house or unit</p>
            </Col>
          </Row>
        </Container>

        <Container >
          <h2>Air Tight without Spray Foam</h2>
          <Row>
            <Col lg={6}>
              <img src={noSpray} className="img-fluid" alt="No Spray" />
            </Col>
            <Col lg={6} className="vert-align">
              <Container className="container h-100">
                <Row className="row h-100 align-items-center">
                  <Col md={12}>
                  <p>› No need to rely on spray foam as an interior air barrier</p>
                  <p>› Achieve air tightness in hours rather than days/weeks</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>

        <Container>
          <h2>Shrink Your HVAC Systems</h2>
          <Row>
            <Col lg={6} className="vert-align">
            <Container className="container h-100">
                <Row className="row h-100 align-items-center">
                  <Col md={12}>
                    <p>› Tighter buildings have smaller HVAC systems</p>
                    <p>› Reduced wear & tear because of the reduced HVAC load</p>
                    <p>› Avoid over-sizing your mechanical systems</p>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col lg={6} className="h-100 middle">
              
              <img src={acUnit} className="img-fluid" alt="AC Unity" />
            </Col>
          </Row>
        </Container>
        
        <hr className="gradient-blue" />

        <Container className="oneCol">
          
            
          <h2>ROI Story: 29-Unit Apartment Building</h2>
          <p>To discover the ROI from installing AeroBarrier, one customer built a robust energy model of their project.* Below are some of the findings from that model.</p>
          
              <h3><strong>By the Numbers</strong></h3>
                <Row>
                  <Col lg={4}>
                    <h3><strong>12.2X</strong></h3>
                    <p>Utility cost savings yielded a <strong>12.2X ROI</strong> over the next 30 years</p>
                  </Col>
                  <Col lg={4}>
                    <h3><strong>25.7%</strong></h3>
                    <p>Installing AeroBarrier resulted in a <strong>25.7% reduction</strong> in Annual Energy Usage.</p>
                  </Col>
                  <Col lg={4}>
                    <h3><strong>116,000</strong></h3>
                    <p>Reducing the air leakage saved <strong>116,000 kWh</strong> of electricity every single year</p>
                  </Col>
          </Row>
          <h3>Maximizing Enery Rebates</h3>
          <p>The energy model looked closely at the effect of AeroBarrier on the overall energy consumption of the building. Below we break out the numbers related to AeroBarrier, which was only one component of the overall energy model.</p>
          <Table bordered striped>
            <thead>
              <tr>
                <th>Energy Model</th>
                <th>Energy Usage</th>
                <th>Energy Savings</th>
                <th>Installation Cost</th>
                <th>Rebates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Code-built</strong></td>
                <td>450,000 kWh</td>
                <td>0 kWh</td>
                <td>$0</td>
                <td>$0</td>
              </tr>
              <tr className="green">
                <td><strong>Code-built with AeroBarrier</strong></td>
                <td>334,000 kWh</td>
                <td>116,000 kWh</td>
                <td>$31,500</td>
                <td>$29,000</td>
              </tr>
            </tbody>
          </Table>

          <Row>
            <Col lg={6} className="text-center">
              <img src={rebates} className="img-fluid" alt="Rebate Pie Chart" />
            </Col>
            <Col lg={6} className="vert-align">
              <Container className="container h-100">
                <Row className="row h-100 align-items-center">
                  <Col md={12}>
                  <h3>Rebates Cover Most of the Cost</h3>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <h3 className="text-center">Code-built + AeroBarrier = High Performance Without a High Price</h3>
          <div className="text-center">
            <img src={costsOverTime} className="img-fluid" alt="Costs over Time Bar Chart" />
          </div>
          <h3 className="text-center">Carbon Savings</h3>
          <p className="text-center"><strong>EVERY YEAR, 71 TONS OF AIR-BOURNE CARBON ARE SAVED, THE EQUIVALENT OF 18 FORD F-150 TRUCKS</strong></p>
          <p className="text-center"><small>*Energy modeling performed by the Wasatch Group. For inquiries about energy modeling contact us and we will get you a quote.</small></p>
        </Container>

        <hr className="gradient-blue" />
        
        <Container className="oneCol"> 
            <h2>Building Durability</h2>
            <p>Plugging air leaks is about more than just escaping air–it also means escaping moisture. Air barriers prevent the interior, moisture-laden air from entering the wall cavity where it can damage materials and promote mold growth.</p>
            <h3>Air Leakage Allows 100X More Moisture Transfer</h3>
            <p>In most Utah buildings, drywall is the primary interior air barrier. The Building Science Corporation studied how much moisture passes through a drywall barrier during a typical year.</p>
              <p>
  The control included a full sheet of drywall, and that was compared with a full sheet that had a 1″ hole cut out of it. That one, tiny hole allowed 100X the moisture to pass through it, adding up to 7.5 gallons of water.</p>
              <p>
              <img src={waterdiffusion} class="img-fluid" alt="Water Diffusion Chart" />
              </p>
              <h3>Moisture Problems Related to Air Leakage</h3>
              <p>As moisture-laden air leaks out of your building, it often deposits moisture in the wall cavity, causing all sorts of unseen problems. From mold growth to wall failure, the effects of moisture deposits over time are devastating.</p>
              <Row className="text-center">
                <Col lg={4}>
                  <img src={wood} class="img-fluid" alt="Wood" />
                  <p>Warped & Swollen Wood</p>
                </Col>
                <Col lg={4}>
                  <img src={mold} class="img-fluid" alt="Mold" />
                  <p>Mold in the Wall Cavity</p>
                </Col>
                <Col lg={4}>
                  <img src={broken} class="img-fluid" alt="Loss of Structural Integrity" />
                  <p>Loss of Structural Integrity</p>
                </Col>
              </Row>

        </Container>

        </section>
        
      </Layout>
);

export default benefits;

export const pageQuery = graphql`
  query {
    diffusionVsAir2: file(relativePath: { eq: "Water-diffusion-vs-air-leakage-2jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;