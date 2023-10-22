import React from 'react'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function About() {
  let url = "http://localhost:3002/countries";
  let { data: countries, loading, error } = useFetch(url);

  return (
    <>
      {error && <div>{error}</div>}
      {loading && (<div>loading...</div>)}
      {countries && countries.map(country => (
        <div className='container my-3' key={country.id}>
          <div className="card p-3">
            <h3>Country - {country.name}</h3>
            <p>Capital City - {country.capital}</p>
            <Link to={`country/`+country.id}>Read More</Link>
          </div>
        </div>
      ))}
    </>

  )
}
