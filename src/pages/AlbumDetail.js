import React, { useEffect } from 'react'
import useFetch1 from '../hooks/useFetch1';
import { useNavigate, useParams } from 'react-router-dom';

export default function AlbumDetail() {
    let param = useParams();
    let navigate = useNavigate();
    let url = "https://theaudiodb.com/api/v1/json/2/album.php?m="+param.id;
    let { data: album, loading, error } = useFetch1(url);

    useEffect(() => {
        if(error){
            setTimeout(() => {
                navigate('/')
            }, 2000)
        }
    }, [error])

  return (
    <>
        {error && <div>{error}</div>}
        {loading && (<div>loading...</div>)}
        {album && album.map(a => (
          <div className="my-4" key={a.id}>
            <div className="text-center">
                <img src={a.strAlbumThumb} className='w-25' alt="" />
            </div>

            <div className="text-center mt-3">
                <span className='d-block'>Artist - {a.strArtist}</span>
                <span className='d-block'>Album - {a.strAlbum}</span>
                <span className='d-block'>Style - {a.strStyle}</span>
                <span className='d-block'>Genre - {a.strGenre}</span>
                <span className='d-block'>Published - {a.intYearReleased}</span>
                <div align="justify" className='container'>
                  <h4>Description</h4>
                  <p>
                    {a.strDescriptionEN}
                  </p>
                </div>
            </div>
            
            {/* <Link to={`album/`+a.idAlbum}>Read More</Link> */}
          </div>
        ))}
    </>
  )
}
