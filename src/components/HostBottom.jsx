import { hostWarn, hostCritical } from '../../pages/api/data'

export default function HostBottom() {
  const { hostWarnData, isLoadingHostWarnData, isErrorHostWarnData } =
    hostWarn()
  const {
    hostCriticalData,
    isLoadingHostCriticalData,
    isErrorHostCriticalData,
  } = hostCritical()
  if (isErrorHostWarnData || isErrorHostCriticalData)
    return <h2>Error fetcing data</h2>
  if (isLoadingHostWarnData || isLoadingHostCriticalData)
    return (
      <div className="loader-container-bottom">
        <div className="loader"></div>
      </div>
    )
  let dataWarn = hostCriticalData.hoststatus.filter(
    (data) => data.problem_has_been_acknowledged == '0'
  )
  let dataCritical = hostWarnData.hoststatus.filter(
    (data) => data.problem_has_been_acknowledged == '0'
  )
  let recordCount = dataCritical.length + dataWarn.length
  console.log(dataWarn)
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
