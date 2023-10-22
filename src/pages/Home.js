import React from 'react'
import useFetch from '../hooks/useFetch';

export default function Home() {
  let url = "https://restcountries.com/v3.1/all";
  let { data: countries, loading, error } = useFetch(url);

  return (
    <>
    {error && <div>{error}</div>}
    {loading && (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
    )}
    
      <div className='container my-3'>
        {countries && (
          <h3 className='text-center my-4'>Countries</h3>
        )}
        <div className="row">
        {countries && countries.map(country => (
          <div className="col-md-4 mb-3" key={country.id}>
            <div className="card p-3 border border-0 shadow">
              <p>Flag - {country.flag}</p>
              <h6>Country - {country.name.official}</h6>
              <p>Capital - {country.capital}</p>
              <p>Populations - {country.population}</p>
              <p>Continent - {country.continents}</p>
              <p>Timezone - {country.timezones}</p>
              {/* <Link to={`country/`+country.id}>Read More</Link> */}
            </div>
          </div>
        ))}
        </div>
      </div>

    </>
  )
}
