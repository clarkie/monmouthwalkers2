import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import { Container, Row } from "react-bootstrap"
const WalkPage = props => {
  const { pageContext } = props
  const { id, title, intro, content } = pageContext

  return (
    <Layout>
      <Container>
        <Row>
          <h2>
            Walk No. {id} - {title}
          </h2>
        </Row>
        <Row>{intro}</Row>
        {content.map((contentItem, index) => (
          <Row key={index}>{contentItem}</Row>
        ))}
      </Container>
    </Layout>
  )
}
export default WalkPage
