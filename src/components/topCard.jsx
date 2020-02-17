import React from "react"

var d = new Date()

function topCard() {
  return (
    <div className="cards">
      <div className="card">
        <h2>Time</h2>
        <h3>{d.getHours() + ":" + d.getMinutes()}</h3>
      </div>
      <div className="card">
        <h2>OK</h2>
        <h3>Data</h3>
      </div>
      <div className="card">
        <h2>Warning</h2>
        <h3>Data</h3>
      </div>
      <div className="card">
        <h2>Critical</h2>
        <h3>Data</h3>
      </div>
      <div className="card">
        <h2>Pending</h2>
        <h3>Data</h3>
      </div>
      <div className="card">
        <h2>Unknown</h2>
        <h3>Data</h3>
      </div>
    </div>
  )
}

export default topCard
