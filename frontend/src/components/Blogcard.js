import React from 'react'
import { Link } from 'react-router-dom'

const Blogcard = ({ blog, index }) => {
    console.log("blog", blog);
    return (
        <>
            <div className="col-sm-4 col-md-3 col-12">
                <div class="card">
                    <div className="image" style={{ height: "180px", width: "100%"}}>
                        <img src={blog.image} class="card-img-top mx-auto d-block" alt="..." style={{ height: "90%", width: "90%" }} />
                    </div>

                    <div class="card-body">
                        <h6 class="card-title">{blog.title}</h6>
                        <div className="blogcomments d-flex justify-content-between">
                            <div className="h4">saqibnawab</div>
                            <div className="h6">{blog.comment}</div>
                        </div>
                        <p class="card-text">Some quick example text to build on the card
                            title and make up the bulk of the card's content.......</p>
                        <Link to={`/blogdetailpage/${blog._id}`}>
                            readmore
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogcard
