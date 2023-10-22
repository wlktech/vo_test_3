import React from 'react'
import useApiDetail from '../hooks/useApiDetail';
import { useParams } from 'react-router-dom';

export default function ApiBlogDetail() {
    let param = useParams();
    let url = "https://flutterapi.delightmyanmar.pro/api/blog-detail/" + param.id;
    let { data: blog, loading, error } = useApiDetail(url);

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
    <div className="container mt-4">
        <div className="card border border-0 shadow w-50">
            <img src={blog.image} alt="" className="card-img-top" />
            <div className="card-body">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                {/* <Link to={`/api/blog/`+blog.id}>Read More</Link> */}
            </div>
        </div>
    </div>


    </>
  )
}
