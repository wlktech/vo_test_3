import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';

export default function BlogDetail() {
    let param = useParams();
    let navigate = useNavigate();
    let url = "http://localhost:3001/blogs/"+param.id;
    let { data: blog, loading, error } = useFetch(url);

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
        {blog && (
            <div className="container my-4">
                <div className="card w-25 shadow">
                    <img src={blog.img} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h3>{blog.title}</h3>
                        <p>{blog.author}</p>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}
