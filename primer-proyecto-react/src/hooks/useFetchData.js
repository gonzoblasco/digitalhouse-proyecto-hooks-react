import { useEffect, useState } from 'react'
import { fetchData } from '../helpers/fetchData.js'

export const useFetchData = ({ endpoint }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    const { data, isLoading } = await fetchData({ endpoint })
    setData(data)
    setIsLoading(isLoading)
  }

  useEffect(() => {
    getData()
  }, [endpoint])

  return {
    data,
    isLoading,
  }
}
