//! eslint is disabled because it complains about SWR not being a recognized react hook
/* eslint-disable */
import useSWR from 'swr'

const {
  REACT_APP_SERVICE,
  REACT_APP_HOST,
  REACT_APP_OK,
  REACT_APP_CRITICAL,
  REACT_APP_WARNING,
  REACT_APP_URL,
  REACT_APP_APIKEY
} = process.env;

const fetcher = (url) => fetch(url).then((res) => res.json())

// TODO: Write logic to check if alert has been acknowledged
function serviceOk() {
  const { data, error } = useSWR(
    REACT_APP_URL +
      REACT_APP_SERVICE +
      REACT_APP_APIKEY +
      REACT_APP_OK,
    fetcher,
    {
      refreshInterval: 30000,
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
    REACT_APP_URL +
      REACT_APP_HOST +
      REACT_APP_APIKEY +
      REACT_APP_OK,
    fetcher,
    {
      refreshInterval: 30000,
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
    REACT_APP_URL +
      REACT_APP_SERVICE +
      REACT_APP_APIKEY +
      REACT_APP_WARNING,
    fetcher,
    {
      refreshInterval: 30000,
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
    REACT_APP_URL +
      REACT_APP_HOST +
      REACT_APP_APIKEY +
      REACT_APP_WARNING,
    fetcher,
    {
      refreshInterval: 30000,
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
    REACT_APP_URL +
      REACT_APP_SERVICE +
      REACT_APP_APIKEY +
      REACT_APP_CRITICAL,
    fetcher,
    {
      refreshInterval: 30000,
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
    REACT_APP_URL +
      REACT_APP_HOST +
      REACT_APP_APIKEY +
      REACT_APP_CRITICAL,
    fetcher,
    {
      refreshInterval: 30000,
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
    REACT_APP_URL +
      REACT_APP_HOST +
      REACT_APP_APIKEY +
      REACT_APP_CRITICAL,
    fetcher,
    {
      refreshInterval: 30000,
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
  acknowledged
}
