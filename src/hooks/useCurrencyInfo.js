import {useEffect, useState} from "react"

function useCurrencyInfo(currency)
{
    const [data,setData] = useState({})
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;
    // I want to call an api
    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((res)=> setData(res[currency]))
    },[currency])

    console.log(data)
    return data
}

export default useCurrencyInfo