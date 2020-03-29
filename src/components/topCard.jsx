import React from "react"

var d = new Date()

function topCard() {
  return (
    <div className="cards">
      <div className="card gray">
        <h1>Time</h1>
        <h2>{d.getHours() + ":" + d.getMinutes()}</h2>
      </div>
      <div className="card" id="ok">
        <h1>OK</h1>
        <h2>Data</h2>
      </div>
      <div className="card" id="warning">
        <h1>Warning</h1>
        <h2>Data</h2>
      </div>
      <div className="card" id="critical">
        <h1>Critical</h1>
        <h2>Data</h2>
      </div>
      <div className="card" id="pending">
        <h1>Pending</h1>
        <h2>Data</h2>
      </div>
      <div className="card gray">
        <h1>Unknown</h1>
        <h2>Data</h2>
      </div>
    </div>
  )
}

export default topCard
