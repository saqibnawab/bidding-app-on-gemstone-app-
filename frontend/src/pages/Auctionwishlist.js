import React, { useContext } from 'react'
import { Mycontext } from '../context/Appcontext'
import { MdDeleteOutline } from "react-icons/md";

const Auctionwishlist = () => {
    const { wishlist, name, number, deletewishlist } = useContext(Mycontext)
    console.log("in page", wishlist, name, number)
    return (
        <>
            <div className="conatiner">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Your wishlist product </h4>
                        <p>you have total :{wishlist.length} product </p>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">image</th>
                                    <th scope="col">name</th>
                                    <th scope="col">Catagory</th>
                                    <th scope="col">Bid</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wishlist.map((item, index) => (
                                        <>
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td> <img src={item.image[0]} alt="" style={{ width: "40px ", height: "40px" }} /> </td>
                                                <td>{item.name}</td>
                                                <td>{item.category}</td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        placeholder="Enter bid"
                                                        min="0"
                                                        step="1"
                                                        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
                                                    />
                                                </td>
                                                <td>
                                                    <span>
                                                        <MdDeleteOutline className='text-danger' onClick={() => deletewishlist(item.id)} />
                                                    </span>
                                                </td>
                                            </tr>
                                        </>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Auctionwishlist
