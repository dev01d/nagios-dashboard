import React from "react"
import Card from "./Card"

var statusCards = [
  {
    id: 1,
    title: "Service Status",
    data: "0"
  },
  {
    id: 2,
    title: "Host Status",
    data: "0"
  }
]

function creatCard(status) {
  return <Card key={status.id} title={status.title} data={status.data} />
}

export default () => {
  return <div className="cards">{statusCards.map(creatCard)}</div>
}
