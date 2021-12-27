import { serviceWarn, serviceCritical } from './api'

export default function ServiceBottom() {
  const { serviceWarnData, isLoadingServiceWarnData, isErrorServiceWarnData } =
    serviceWarn()
  const {
    serviceCriticalData,
    isLoadingServiceCriticalData,
    isErrorServiceCriticalData,
  } = serviceCritical()
  if (isErrorServiceWarnData || isErrorServiceCriticalData)
    return <h2>Error fetcing data</h2>
  if (isLoadingServiceWarnData || isLoadingServiceCriticalData)
    return (
      <div className="loader-container-bottom">
        <div className="loader"></div>
      </div>
    )
  let recordCount =
    serviceCriticalData.recordcount + serviceWarnData.recordcount
  let dataCritical = serviceCriticalData.servicestatus
  let dataWarn = serviceWarnData.servicestatus

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
                  <span className="dot-critical" align="left"></span>
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
                  {item.host_name}{' '}
                  <span className="dot-warn" align="left"></span>
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
