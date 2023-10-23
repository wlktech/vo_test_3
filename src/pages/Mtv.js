import React from 'react'
import useFetch3 from '../hooks/useFetch3';
import Desc from './Desc';

export default function Mtv() {
  let url = "https://theaudiodb.com/api/v1/json/2/mvid.php?i=112024";
  let { data: mtvs, loading, error } = useFetch3(url);


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
        {mtvs && (
            <h2 className="text-center my-4">ALL MTV</h2>
        )}
        <div className="row">
        {mtvs && mtvs.map(mtv => (
          <div className="col-md-6 mb-3" key={mtv.idTrack}>
            <div className="card border border-0 shadow">
                <div className="card-body">
                    
                    <div className="d-flex justify-content-between">
                      <h5>Track - {mtv.strTrack}</h5>
                      <div>
                      <a href={mtv.strMusicVid} className="btn btn-sm btn-outline-danger" target='__blank'>
                        <i className="fa-brands fa-youtube"></i>
                        <span className='ms-2 d-none d-lg-inline-block'> WATCH MTV</span>
                       
                      </a>
                      </div>
                    </div>
                    
                    <h6>Artist - {mtv.strArtist}</h6>
                    <Desc  desc={mtv.strDescriptionEN}/>
                    
                </div>
            </div>

            {/* <Link to={`country/`+country.id}>Read More</Link> */}
          </div>
        ))}
        </div>
      </div>

    </>
  )
}
