import React from 'react'
import { hostWarn, hostCritical } from './api'

export default function HostBottom() {
  const {
    hostWarnData,
    isLoadingHostWarnData,
    isErrorHostWarnData,
  } = hostWarn()
  const {
    hostCriticalData,
    isLoadingHostCriticalData,
    isErrorHostCriticalData,
  } = hostCritical()
  if (isErrorHostWarnData || isErrorHostCriticalData)
    return <h2>Error fetcing data</h2>
  if (isLoadingHostWarnData || isLoadingHostCriticalData)
    return <h2>Grabbing some data</h2>
  let recordCount = hostCriticalData.recordcount + hostWarnData.recordcount
  let dataCritical = hostCriticalData.hoststatus
  let dataWarn = hostWarnData.hoststatus

  return (
    <div>
      {recordCount === 0 ? (
        <h2>No issues</h2>
      ) : (
        <div>
          <div>
            {dataCritical.map((item, index) => (
              <div key={index}>
                <h2 className="card-bottom-item">
                  {item.host_name}{' '}
                  <span class="dot-critical" align="left"></span>
                </h2>
                <h3>{item.output}</h3>
                <hr size="5" width="600" />
              </div>
            ))}
          </div>
          <div>
            {dataWarn.map((item, index) => (
              <div key={index}>
                <h2 className="card-bottom-item">
                  {item.host_name} <span class="dot-warn" align="left"></span>
                </h2>
                <h3>{item.output}</h3>
                <hr size="5" width="600" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
