import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"


import { graphql } from 'gatsby';
import indexImage from "../images/monitoring-aerobarrier.jpg"

const aboutTheAuthor = props => (
  <Layout>
        <SEO title="Find a Dealer"/>
        <section className="page-section">

        <div className="masthead fixed" style={{ backgroundImage: `url(${indexImage})` }}>
          <Container className="container h-100">
            <Row className="row h-100 align-items-center">
              <Col md="12" className="text-center">
                <h1>Find a Dealer</h1>
              </Col>
            </Row>
          </Container>
        </div>

          <Container>
            <Row>
              <Col lg={4}>
                <h3>Arizona</h3>
                <p>
                  Kirk Evans <br />
                  (480) 748-1385  <br />
                  <a href="mailto:sales@aerobarrierarizona.com">sales@aerobarrierarizona.com</a>
                </p>
              </Col>
              <Col lg={4}>
              <h3>California</h3>
                <p>
                  Rich Williams <br />
                  (855) 855-2376  <br />
                  <a href="mailto:sales@aerobarriercalifornia.com">sales@aerobarriercalifornia.com</a>
                </p>
              </Col>
              <Col lg={4}>
                <h3>Idaho</h3>
                <p>
                  Mitch Spence <br />
                  (800) 693-2376  <br />
                  <a href="mailto:sales@aerobarrieridaho.com">sales@aaerobarrieridaho.com</a>
                </p>
              </Col>
              <Col lg={4}>
                <h3>Nevada</h3>
                <p>
                  Rich Williams <br />
                  (855) 855-2376  <br />
                  <a href="mailto:sales@aerobarriernevada.com">sales@aerobarriernevada.com</a>
                </p>

                
              </Col>
              
              <Col lg={4}>
                <h3>Texas</h3>
                <p>
                  Sean Harris <br />
                  (512) 850-4479  <br />
                  <a href="mailto:sales@aerobarriertexas.com">sales@aerobarriertexas.com</a>
                </p>
              </Col>
              <Col>
                <h3>Utah</h3>
                <p>
                  Mitch Spence <br />
                  (800) 693-2376  <br />
                  <a href="mailto:sales@aerobarrierutah.com">sales@aerobarrierutah.com</a>
                </p>
              
              </Col>
              <Col>
                <h3>Wyoming</h3>
                <p>
                  Mitch Spence <br />
                  (800) 693-2376  <br />
                  <a href="mailto:sales@aerobarrierwyoming.com">sales@aerobarrierwyoming.com</a>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        
      </Layout>
);

export default aboutTheAuthor;

export const pageQuery = graphql`
  query {
    haydn: file(relativePath: { eq: "haydn-smaller.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
`;