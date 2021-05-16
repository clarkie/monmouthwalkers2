import React from "react"

import { Link } from "gatsby"
const WalkPage = props => {
  const { pageContext } = props
  const { id, title } = pageContext

  return (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <h2>
        Walk No. {id} - {title}
      </h2>
      <ul>
        {/* {pageContent.map((data, index) => (
          <li key={`content_item_${index}`}>{data.item}</li>
        ))} */}
      </ul>
      <ul>
        {/* {links.map((item, index) => (
          <li key={`link_${index}`}>
            <Link to={item.to}>{item.to}</Link>
          </li>
        ))} */}
      </ul>
    </div>
  )
}
export default WalkPage
