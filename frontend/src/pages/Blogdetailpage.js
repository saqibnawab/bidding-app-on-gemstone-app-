import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Auctionoffer from '../components/Auctionoffer';

const Blogdetailpage = () => {
    const { id } = useParams()
    const [blog, setblog] = useState()
    useEffect(() => {
        axios.get(`http://localhost:5000/getsingleblog/${id}`).then((response) => {
            console.log(response.data)
            setblog(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-4">
                                <h4 className='mt-5 mb-5'>{blog?.title}</h4>
                                <hr />
                                <div className="d-flex align-items-center  justify-content-between">
                                    <h5 className='m-0'>saqibnawab</h5>
                                    <h5>{blog?.comment}</h5>
                                </div>
                                <h5 className='mt-5 text-danger'>pubAt:   {blog?.date}</h5>
                            </div>
                            <div className="col-md-8">
                                <img src={blog?.image} className='w-100 d-block' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 pt-3">
                                {
                                    blog?.description
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blogdetailpage
