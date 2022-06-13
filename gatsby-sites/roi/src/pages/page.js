import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Page = () => (
  <Layout>
	<Seo title="404: Not found" />
	<h1>Aint this some shit.</h1>
	<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default Page
