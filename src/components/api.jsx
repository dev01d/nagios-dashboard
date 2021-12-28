//! eslint is disabled because it complains about SWR not being a recognized react hook
/* eslint-disable */
import useSWR from 'swr'

const URL = process.env.URL
const APIKEY = process.env.APIKEY

const fetcher = (url) => fetch(url).then((res) => res.json())

// TODO: Write logic to check if alert has been acknowledged
function serviceOk() {
  const { data, error } = useSWR(
    URL + 'servicestatus' + APIKEY + '&current_state=0',
    fetcher,
    {
      refreshInterval: 30000,
      refreshWhenHidden: true,
    }
  )
  return {
    serviceOkData: data,
    isLoadingServiceOkData: !error && !data,
    isErrorServiceOkData: error,
  }
}
function hostOk() {
  const { data, error } = useSWR(
    URL + 'hoststatus' + APIKEY + '&current_state=0',
    fetcher,
    {
      refreshInterval: 30000,
      refreshWhenHidden: true,
    }
  )
  return {
    hostOkData: data,
    isLoadingHostOkData: !error && !data,
    isErrorHostOkData: error,
  }
}
function serviceWarn() {
  const { data, error } = useSWR(
    URL + 'servicestatus' + APIKEY + '&current_state=1',
    fetcher,
    {
      refreshInterval: 30000,
      refreshWhenHidden: true,
    }
  )
  return {
    serviceWarnData: data,
    isLoadingServiceWarnData: !error && !data,
    isErrorServiceWarnData: error,
  }
}
function hostWarn() {
  const { data, error } = useSWR(
    URL + 'hoststatus' + APIKEY + '&current_state=1',
    fetcher,
    {
      refreshInterval: 30000,
      refreshWhenHidden: true,
    }
  )
  return {
    hostWarnData: data,
    isLoadingHostWarnData: !error && !data,
    isErrorHostWarnData: error,
  }
}
function serviceCritical() {
  const { data, error } = useSWR(
    URL + 'servicestatus' + APIKEY + '&current_state=2',
    fetcher,
    {
      refreshInterval: 30000,
      refreshWhenHidden: true,
    }
  )
  return {
    serviceCriticalData: data,
    isLoadingServiceCriticalData: !error && !data,
    isErrorServiceCriticalData: error,
  }
}
function hostCritical() {
  const { data, error } = useSWR(
    URL + 'hoststatus' + APIKEY + '&current_state=2',
    fetcher,
    {
      refreshInterval: 30000,
      refreshWhenHidden: true,
    }
  )
  return {
    hostCriticalData: data,
    isLoadingHostCriticalData: !error && !data,
    isErrorHostCriticalData: error,
  }
}
function acknowledged() {
  const { data, error } = useSWR(
    URL + 'hoststatus' + APIKEY + '&current_state=2',
    fetcher,
    {
      refreshInterval: 30000,
      refreshWhenHidden: true,
    }
  )
  return {
    acknowledgedData: data,
    isLoadingAcknowledged: !error && !data,
    isErrorAcknowledged: error,
  }
}

export {
  serviceOk,
  hostOk,
  serviceWarn,
  hostWarn,
  serviceCritical,
  hostCritical,
  acknowledged,
}
