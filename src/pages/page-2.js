import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutSection from "../components/about"
import ResumeSection from "../components/resume"
import PortfolioSection from "../components/portfolio"
import ContactSection from "../components/contact"
import { graphql } from "gatsby"

const SecondPage = ({ data }) => (
  <Layout>
    <AboutSection data={data.contentJson}/>
    <ResumeSection data={data.contentJson}/>
    <PortfolioSection data={data.contentJson.featured_projects}/>
    <ContactSection data={data.contentJson}/>
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
      featured_projects {
        description
        endDate
        highlights
        name
        startDate
        url
      }
    }
  }
`

export default SecondPage
