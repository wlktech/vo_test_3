import React from 'react'
import useFetch from '../hooks/useFetch';

export default function Contact() {
  let url = "https://flutterapi.delightmyanmar.pro/api/banners";
  let { data: banners, loading, error } = useFetch(url);

  

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
      {banners && banners.map(banner => (
        <div className='container my-3' key={banner.id}>
          <div className="card w-25 bg-transparent border border-0">
            <img src={banner.image} alt="" className="card-img-top" />
          </div>
        </div>
      ))}
    </>
  )
}
