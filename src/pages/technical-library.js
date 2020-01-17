import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"


import { graphql } from 'gatsby';

import caseStudy from "../pdf/AeroBarrier-Case-Study.pdf"
import safetyDataSheet from "../pdf/AeroBarrier-Safety-Data-Sheet.pdf"
import caBuilder from "../pdf/California-Builder-1-Phase-I-Report.pdf"
import mnBuilder from "../pdf/Minnesota-Builder-Phase-I-Report.pdf"
import ngbs from "../pdf/NGBS-Certificate-AeroBarrier-2018-2019-.pdf"


const technicalLibrary = props => (
  <Layout>
        <SEO title="Technical Library & Specifications"/>
        <section className="page-section">
          <Container>
          <h1>Technical Library & Specifications</h1>
          <ul>
            <li><a href={caseStudy}>AeroBarrier Case Study (PDF)</a></li>
            <li><a href={safetyDataSheet}>AeroBarrier Safety Data Sheet: (PDF)</a></li>
            <li><a href={ngbs}>NGBS Green Cerified (PDF)</a></li>
            <li><a href={caBuilder}>Study: When is the Best Time to Apply AeroBarrier? (U.C. Davis Western Cooling Efficiency Center Research) (PDF)</a></li>
            <li><a href={mnBuilder}>Study: How Does AeroBarrier Stack Up with Traditional Air Sealing Methods? (U.S. Department of Energy & U.C. Davis Center for Energy and Environment) (PDF)</a></li>
          </ul>
          </Container>
             
        </section>
        
      </Layout>
);

export default technicalLibrary;

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