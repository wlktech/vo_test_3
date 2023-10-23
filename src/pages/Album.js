import React from 'react'
import useFetch1 from '../hooks/useFetch1';
import { Link } from 'react-router-dom';

export default function Album() {
  let url = "https://theaudiodb.com/api/v1/json/2/album.php?i=112024";
  let { data: albums, loading, error } = useFetch1(url);

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
        {albums && (
            <h2 className="text-center my-4">ALL ALBUMS</h2>
        )}
        <div className="row">
        {albums && albums.map(album => (
          <div className="col-md-4 mb-3" key={album.idAlbum}>
            <div className="card shadow">
            <img src={album.strAlbumThumb} className='card-img-top' alt="" />
                <div className="card-body mt-3">
                    <span className='d-block'>Artist - {album.strArtist}</span>
                    <span className='d-block'>Album - {album.strAlbum}</span>
                    <span className='d-block'>Published - {album.intYearReleased}</span>
                </div>
                <div className='text-end'>
                  <Link className='btn btn-sm btn-outline-secondary me-3 mb-3' to={`album/`+album.idAlbum}>Read More</Link>
                </div>
                
            </div>
          </div>
        ))}
        </div>
      </div>

    </>
  )
}
