import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify'

import { Bounce } from 'react-toastify';

const Mycontext = createContext()
const Appcontext = ({ children }) => {
    const name = "saqibnawab"
    const number = 34455
    const [wishlist, setwishlist] = useState([]);
       console.log("in context",wishlist)
    const addtowishlist = (item) => {
         if(item){
            setwishlist([...wishlist, item])
            toast.success("Item added to wishlist",{
                
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    
            })
         }
    }

    const deletewishlist = (id) => {
        const newwishlist = wishlist.filter((item) => item.id !== id)
        setwishlist(newwishlist)
    }

    return (
        <Mycontext.Provider value={{ name, number, addtowishlist, wishlist , deletewishlist }}>
            {children}
        </Mycontext.Provider>
    )
}

export default Appcontext
export { Mycontext }