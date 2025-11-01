import { useEffect,useState } from "react"; 

function useCurrencyInfo(currency){//custom hook accepting currency as parameter
const [data,setData] = useState({});

    useEffect(()=>{//calling api here
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())//converting into json
        .then((res) => setData(res[currency]))//setting data as an object
       
    },[currency])//dependency on currency
    return data;//returning the api data
} 
export default useCurrencyInfo;