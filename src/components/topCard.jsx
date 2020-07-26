import React from 'react'
import Clock from 'react-live-clock'
import {
  serviceTopOk,
  hostTopOk,
  serviceTopWarn,
  hostTopWarn,
  serviceTopCritical,
  hostTopCritical,
} from './Data'

export default function topCard() {
  const {
    serviceTopOkData,
    isLoadingServiceTopOkData,
    isErrorServiceTopOkData,
  } = serviceTopOk()
  const {
    hostTopOkData,
    isLoadingHostTopOkData,
    isErrorHostTopOkData,
  } = hostTopOk()

  const {
    serviceTopWarnData,
    isLoadingServiceTopWarnData,
    isErrorServiceTopWarnData,
  } = serviceTopWarn()
  const {
    hostTopWarnData,
    isLoadingHostTopWarnData,
    isErrorHostTopWarnData,
  } = hostTopWarn()

  const {
    serviceTopCriticalData,
    isLoadingServiceTopCriticalData,
    isErrorServiceTopCriticalData,
  } = serviceTopCritical()
  const {
    hostTopCriticalData,
    isLoadingHostTopCriticalData,
    isErrorHostTopCriticalData,
  } = hostTopCritical()

  return (
    <div className="cards">
      <div className="card gray">
        <h1>Time</h1>
        <h2>
          <Clock />
        </h2>
      </div>
      <div className="card" id="ok">
        <h1>OK</h1>
        {isErrorServiceTopOkData || isErrorHostTopOkData ? (
          <h2>Error</h2>
        ) : (
          <h2>
            {isLoadingServiceTopOkData || isLoadingHostTopOkData
              ? 'Loading'
              : serviceTopOkData.recordcount + hostTopOkData.recordcount}
          </h2>
        )}
      </div>
      <div className="card" id="warning">
        <h1>Warning</h1>
        {isErrorServiceTopWarnData || isErrorHostTopWarnData ? (
          <h2>Error</h2>
        ) : (
          <h2>
            {isLoadingServiceTopWarnData || isLoadingHostTopWarnData
              ? 'Loading'
              : serviceTopWarnData.recordcount + hostTopWarnData.recordcount}
          </h2>
        )}
      </div>
      <div className="card" id="critical">
        <h1>Critical</h1>
        {isErrorServiceTopCriticalData || isErrorHostTopCriticalData ? (
          <h2>Error</h2>
        ) : (
          <h2>
            {isLoadingServiceTopCriticalData || isLoadingHostTopCriticalData
              ? 'Loading'
              : serviceTopCriticalData.recordcount +
                hostTopCriticalData.recordcount}
          </h2>
        )}
      </div>
      <div className="card" id="pending">
        <h1>Pending</h1>
        <h2>0</h2>
      </div>
      <div className="card gray">
        <h1>Unknown</h1>
        <h2>0</h2>
      </div>
    </div>
  )
}
