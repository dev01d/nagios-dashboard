//! eslint is disabled because it complains about SWR not being a recognized react hook
/* eslint-disable */
import useSWR from 'swr'
import * as vars from '../data/vars'

const fetcher = (url) => fetch(url).then((res) => res.json())

function serviceTopOk() {
  const { data, error } = useSWR(
    vars.URL + vars.SERVICE + vars.APIKEY + vars.OK,
    fetcher,
    {
      refreshInterval: 30000,
    }
  )
  return {
    serviceTopOkData: data,
    isLoadingServiceTopOkData: !error && !data,
    isErrorServiceTopOkData: error,
  }
}
function hostTopOk() {
  const { data, error } = useSWR(
    vars.URL + vars.HOST + vars.APIKEY + vars.OK,
    fetcher,
    {
      refreshInterval: 30000,
    }
  )
  return {
    hostTopOkData: data,
    isLoadingHostTopOkData: !error && !data,
    isErrorHostTopOkData: error,
  }
}
function serviceTopWarn() {
  const { data, error } = useSWR(
    vars.URL + vars.SERVICE + vars.APIKEY + vars.WARNING,
    fetcher,
    {
      refreshInterval: 30000,
    }
  )
  return {
    serviceTopWarnData: data,
    isLoadingServiceTopWarnData: !error && !data,
    isErrorServiceTopWarnData: error,
  }
}
function hostTopWarn() {
  const { data, error } = useSWR(
    vars.URL + vars.HOST + vars.APIKEY + vars.WARNING,
    fetcher,
    {
      refreshInterval: 30000,
    }
  )
  return {
    hostTopWarnData: data,
    isLoadingHostTopWarnData: !error && !data,
    isErrorHostTopWarnData: error,
  }
}
function serviceTopCritical() {
  const { data, error } = useSWR(
    vars.URL + vars.SERVICE + vars.APIKEY + vars.CRITICAL,
    fetcher,
    {
      refreshInterval: 30000,
    }
  )
  return {
    serviceTopCriticalData: data,
    isLoadingServiceTopCriticalData: !error && !data,
    isErrorServiceTopCriticalData: error,
  }
}
function hostTopCritical() {
  const { data, error } = useSWR(
    vars.URL + vars.HOST + vars.APIKEY + vars.CRITICAL,
    fetcher,
    {
      refreshInterval: 30000,
    }
  )
  return {
    hostTopCriticalData: data,
    isLoadingHostTopCriticalData: !error && !data,
    isErrorHostTopCriticalData: error,
  }
}

export {
  serviceTopOk,
  hostTopOk,
  serviceTopWarn,
  hostTopWarn,
  serviceTopCritical,
  hostTopCritical,
}
