import React from 'react'
import useFetch from '../hooks/useFetch';

export default function Artist() {
  let url = "https://theaudiodb.com/api/v1/json/2/artist.php?i=112024";
  let { data: artists, loading, error } = useFetch(url);

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
        <div className="">
        {artists && artists.map(artist => (
          <div className="" key={artist.idArtist}>
            <div className="text-center">
            <img src={artist.strArtistLogo} className='w-25' alt="" />
            </div>
            <p>Artist Name - {artist.strArtist}</p>
            <p>Gender - {artist.strGender}</p>
            <p>Country - {artist.strCountry}</p>
            <p>Born In - {artist.intBornYear}</p>
            <p>Style - {artist.strStyle}</p>
            <p>Genre - {artist.strGenre}</p>
            <p>Website - <a href={`http://` + artist.strWebsite} target='__blank'>{artist.strWebsite}</a></p>
            <p>Facebook - {artist.strFacebook}</p>
            <p align="justify">Biography(EN) - {artist.strBiographyEN}</p>
            <p align="justify">Biography(DE) - {artist.strBiographyDE}</p>
            <p align="justify">Biography(FR) - {artist.strBiographyFR}</p>
            <p align="justify">Biography(IT) - {artist.strBiographyIT}</p>
            <p align="justify">Biography(ES) - {artist.strBiographyES}</p>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <img src={artist.strArtistThumb} className='w-100' alt="" />
                </div>
                <div className="col-md-4 mb-3">
                    <img src={artist.strArtistCutout} className='w-100' alt="" />
                </div>
                <div className="col-md-4 mb-3">
                    <img src={artist.strArtistClearart} className='w-100' alt="" />
                </div>
                <div className="col-md-4 mb-3">
                    <img src={artist.strArtistWideThumb} className='w-100' alt="" />
                </div>
                <div className="col-md-4">
                    <img src={artist.strArtistFanart} className='w-100' alt="" />
                </div>
                <div className="col-md-4">
                    <img src={artist.strArtistFanart2} className='w-100' alt="" />
                </div>
                <div className="col-md-4">
                    <img src={artist.strArtistFanart3} className='w-100' alt="" />
                </div>
                <div className="col-md-4">
                    <img src={artist.strArtistFanart4} className='w-100' alt="" />
                </div>
                <div className="col-md-4">
                    <img src={artist.strArtistBanner} className='w-100' alt="" />
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
