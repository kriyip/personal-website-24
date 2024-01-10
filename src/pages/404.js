import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import * as styles from "../components/404.module.css"

const NotFoundPage = () => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.centered}>
        <h1>404: Not Found</h1>
        <p>The route you're looking for doesn't seem to exist...</p>
        <Link to ="/">Go back home</Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
