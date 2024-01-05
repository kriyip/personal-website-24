import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutSection from "../components/about"
import ResumeSection from "../components/resume"

const SecondPage = () => (
  <Layout>
    <AboutSection />
    <ResumeSection />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
