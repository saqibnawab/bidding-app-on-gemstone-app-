import React, { useEffect, useState } from 'react'
import Blogcard from '../components/Blogcard'
import axios from 'axios'

const Auctionblog = () => {
    const [blog, setblog] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/blog').then((response) => {
            console.log(response.data)
            setblog(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <>
            <div className="container">
                <div className="row mx-auto d-flex  justify-content-center mt-5">
                    {
                        blog.map((blog, index) => (
                            <>
                                <Blogcard key={index} blog={blog} />
                            </>

                        ))
                    }

                </div>
            </div>

        </>
    )
}

export default Auctionblog
