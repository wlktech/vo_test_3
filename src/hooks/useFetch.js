import { useEffect, useState } from 'react'

const useFetch = (url) => {
  
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);

    useEffect(()=>{
        let abortController = new AbortController();
        let signal = abortController.signal;

        setLoading(true)
        fetch(url, {
            signal
        })
        .then(res => {
            if(!res.ok){
                throw Error("Something Went Wrong!")
            }
            return res.json()
        })
        .then(data => {
            setData(data);
            setLoading(false)
        })
        .catch(e =>{
            setError(e.message)
        })

        //cleanup function
        return () =>{
            abortController.abort();
        }

    }, [url])

    return {data, loading, error}
}

export default useFetch