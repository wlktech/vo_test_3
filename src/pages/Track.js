import React from 'react'
import useFetch2 from '../hooks/useFetch2';

export default function Track() {
  let url = "https://theaudiodb.com/api/v1/json/2/track.php?m=2115888";
  let { data: tracks, loading, error } = useFetch2(url);

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
        {tracks && (
            <h2 className="text-center my-4">ALL TRACKS</h2>
        )}
        <div className="row">
        {tracks && tracks.map(track => (
          <div className="col-md-4 mb-3" key={track.idTrack}>
            <div className="card border border-0 shadow">
                <div className="card-body">
                    <h5>Track - {track.strTrack}</h5>
                    <h6>Album - {track.strAlbum}</h6>
                    <h6>Artist - {track.strArtist}</h6>
                    <h6>Genre - {track.strGenre}</h6>
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
