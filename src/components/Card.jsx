import React from "react"

function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <h3>{props.data}</h3>
    </div>
  )
}

export default Card
