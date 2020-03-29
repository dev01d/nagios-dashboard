import { useState, useEffect } from 'react'
import url from '../data/vars'

export default () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  async function fetchData() {
    try {
      const res = await fetch(url)
      const json = await res.json()
      setData(json)
      setLoading(false)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return [data, loading]
}
