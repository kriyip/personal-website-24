import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutSection from "../components/about"
import ResumeSection from "../components/resume"
import { graphql } from "gatsby"

const SecondPage = ({ data }) => (
  <Layout>
    <AboutSection data={data.contentJson}/>
    <ResumeSection data={data.contentJson}/>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export const resumeQuery = graphql`
query resumeQuery {
    contentJson(basics: {}) {
      basics {
        summary
        profiles {
          network
          url
          username
        }
        name
        email
      }
      education {
        GPA
        degree
        endDate
        institution
        startDate
        courses {
          grade
          code
          name
        }
      }
      work {
        company
        endDate
        startDate
        position
        highlights
        future
        summary
      }
    }
  }
`

export default SecondPage
