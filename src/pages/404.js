import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import rich from "../images/rich.jpg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="text-center">Ouch. We know how it feels.</h1>
    <p className="text-center"><img src={rich} alt="Rich" className="img-fluid" style={{ maxWidth: `400px` }} /></p>

    <p className="text-center">You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
