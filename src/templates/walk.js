import * as React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import { WalkInfo } from "../components/walkInfo"

const WalkPage = props => {
  const { pageContext } = props
  const {
    id,
    title,
    intro,
    content,
    distance,
    totalClimb,
    extraInfo,
  } = pageContext

  return (
    <Layout>
      <Container>
        <Row>
          <h2>
            Walk No. {id} - {title}
          </h2>
        </Row>
        <WalkInfo {...{ distance, totalClimb, extraInfo }} />
        <Row>{intro}</Row>
        {content.map((contentItem, index) => (
          <Row key={index}>{contentItem}</Row>
        ))}
      </Container>
    </Layout>
  )
}
export default WalkPage
