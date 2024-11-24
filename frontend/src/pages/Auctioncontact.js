import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Auctioncontact = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            ></Box>
            <div className="container">

                <div className="row">
                    <div className="col-md-6 col-12">

                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="To Know More"
                            defaultValue="0139542755 or 03129087423"
                            sx={{ width: 3 / 4 }} className='mb-3'
                        />

                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="Email Now"
                            defaultValue="saqibnawab@gmail.com"
                            sx={{ width: 3 / 4 }} className='mb-3'
                        />


                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="Location"
                            defaultValue="kpk / peshawar Board bazar "
                            sx={{ width: 3 / 4 }} className='mb-3'
                        />


                    </div>
                    <div className="col-md-6 col-12">
                        <TextField id="outlined-basic" label="name" variant="outlined" sx={{ width: 2 / 4 }} className='mb-3' />


                        <TextField id="outlined-basic" label="lastname" variant="outlined" sx={{ width: 2 / 4 }} className='mb-3' />
                        <TextField id="outlined-basic" label="Phone" variant="outlined" sx={{ width: 4 / 4 }} className='mb-3' />

                        <TextField id="outlined-basic" label="email" variant="outlined" sx={{ width: 4 / 4 }} className='mb-3' />

                        <TextField
                            id="outlined-multiline-static"
                            label="write your message"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                            sx={{ width: 4 / 4 }}
                        />

                        <Button
                            variant="outlined"
                            sx={{ padding: '10px 20px', margin: '10px' }}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
            <div className="map">
                <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>

        </>
    )
}

export default Auctioncontact
