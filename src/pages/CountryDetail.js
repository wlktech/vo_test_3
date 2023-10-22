import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';

export default function CountryDetail() {
    let param = useParams();
    let navigate = useNavigate();
    let url = "http://localhost:3002/countries/"+param.id;
    let { data: country, loading, error } = useFetch(url);

    useEffect(() => {
        if(error){
            setTimeout(() => {
                navigate('/about')
            }, 2000)
        }
    }, [error])

  return (
    <div>
        {error && <div>{error}</div>}
        {loading && (<div>loading...</div>)}
        <div className="container my-4">
            <div className="card w-25 shadow">
                <img src={country.img} alt="" className="card-img-top" />
                <div className="card-body">
                    <h3>Country - {country.name}</h3>
                    <p>Capital City - {country.capital}</p>
                </div>
            
            </div>
        </div>
       

    </div>
  )
}
