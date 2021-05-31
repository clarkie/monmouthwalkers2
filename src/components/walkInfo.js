import React from "react"
import { Row } from "react-bootstrap"
import styled from "styled-components"

const WalkSubheader = styled(Row)`
  color: #666;
`

export const WalkInfo = ({ info }) => <WalkSubheader>{info}</WalkSubheader>
