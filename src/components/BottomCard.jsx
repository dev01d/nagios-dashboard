import React from 'react'
import HostBottom from './HostBottom'
import ServiceBottom from './ServiceBottom'

function Target() {
  return (
    <div className="status">
      <div className="card card-bottom gray">
        <h1>Host</h1>
        <div>
          <HostBottom />
        </div>
      </div>
      <div className="card card-bottom gray">
        <h1>Services</h1>
        <div className="scroll">
          <ServiceBottom />
        </div>
      </div>
    </div>
  )
}

export default Target
