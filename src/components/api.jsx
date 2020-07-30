//! eslint is disabled because it complains about SWR not being a recognized react hook
/* eslint-disable */
import useSWR from 'swr'
import * as vars from '../data/vars'

const fetcher = (url) => fetch(url).then((res) => res.json())

// TODO: Write logic to check if alert has been acknowledgeds
function serviceOk() {
  const { data, error } = useSWR(
    vars.URL + vars.SERVICE + vars.APIKEY + vars.OK,
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
    vars.URL + vars.HOST + vars.APIKEY + vars.OK,
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
    vars.URL + vars.SERVICE + vars.APIKEY + vars.WARNING,
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
    vars.URL + vars.HOST + vars.APIKEY + vars.WARNING,
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
    vars.URL + vars.SERVICE + vars.APIKEY + vars.CRITICAL,
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
    vars.URL + vars.HOST + vars.APIKEY + vars.CRITICAL,
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

export {
  serviceOk,
  hostOk,
  serviceWarn,
  hostWarn,
  serviceCritical,
  hostCritical,
}
