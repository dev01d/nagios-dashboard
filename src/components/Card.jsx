import React from "react"

function Card(props) {
  return (
    <div className="card gray">
      <h1>{props.title}</h1>
      <h2>{props.data}</h2>
    </div>
  )
}

export default Card
