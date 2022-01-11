/* eslint-disable */
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

function serviceOk() {
  const { data, error } = useSWR('/api/serviceOk', fetcher, {
    refreshInterval: 30000,
    refreshWhenHidden: true,
  })
  return {
    serviceOkData: data,
    isLoadingServiceOkData: !error && !data,
    isErrorServiceOkData: error,
  }
}
function hostOk() {
  const { data, error } = useSWR('/api/hostOk', fetcher, {
    refreshInterval: 30000,
    refreshWhenHidden: true,
  })
  return {
    hostOkData: data,
    isLoadingHostOkData: !error && !data,
    isErrorHostOkData: error,
  }
}
function serviceWarn() {
  const { data, error } = useSWR('/api/serviceWarn', fetcher, {
    refreshInterval: 30000,
    refreshWhenHidden: true,
  })
  const count = data?.recordcount?.toString()
  return {
    serviceWarnData: data,
    serviceWarnDataCount: count,
    isLoadingServiceWarnData: !error && !data,
    isErrorServiceWarnData: error,
  }
}
function hostWarn() {
  const { data, error } = useSWR('/api/hostWarn', fetcher, {
    refreshInterval: 30000,
    refreshWhenHidden: true,
  })
  return {
    hostWarnData: data,
    isLoadingHostWarnData: !error && !data,
    isErrorHostWarnData: error,
  }
}
function serviceCritical() {
  const { data, error } = useSWR('/api/serviceCrit', fetcher, {
    refreshInterval: 30000,
    refreshWhenHidden: true,
  })
  // console.log(count)
  return {
    serviceCriticalData: data,
    isLoadingServiceCriticalData: !error && !data,
    isErrorServiceCriticalData: error,
  }
}
function hostCritical() {
  const { data, error } = useSWR('/api/hostCrit', fetcher, {
    refreshInterval: 30000,
    refreshWhenHidden: true,
  })
  const count = data?.recordcount.toString()
  return {
    hostCriticalData: data,
    hostCriticalDataCount: count,
    isLoadingHostCriticalData: !error && !data,
    isErrorHostCriticalData: error,
  }
}

export {
  serviceOk,
  hostOk,
  serviceWarn,
  hostWarn,
  serviceCritical,
  hostCritical,
}
