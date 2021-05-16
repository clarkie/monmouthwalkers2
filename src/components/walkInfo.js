import React from "react"
import { Row } from "react-bootstrap"
import styled from "styled-components"

const WalkSubheader = styled(Row)`
  color: #666;
`

export const WalkInfo = ({ distance, totalClimb, extraInfo }) => (
  <WalkSubheader>
    {distance} miles long and a total climb of {totalClimb}ft.{" "}
    {extraInfo ? extraInfo : null}
  </WalkSubheader>
)
