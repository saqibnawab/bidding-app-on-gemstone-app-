// MyOffCanvas.js
import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Auctionoffer from './Auctionoffer';


const MyOffCanvas = ({ show, handleClose, product }) => {
    console.log("offcanvs" , product?.subcategory)
    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Bid on {product?.name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div>
                    <p>{product?.description?.length > 400
                        ? `${product?.description.substring(0, 390)}...`
                        : product?.description}</p>
                    <p>Current bid: {product?.bidprice} PKR</p>
                    {/* Additional content related to bidding can go here */}
                    <div className="offcanvsbid d-flex justify-content-center">
                        <TextField id="outlined-basic" label="place your bid" variant="outlined" size="small" />
                        <Button variant="contained">bid</Button>
                    </div>
                </div>
                <Auctionoffer/>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default MyOffCanvas;
