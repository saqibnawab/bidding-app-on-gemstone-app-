// // Auctionmodel.js
// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';


// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';


// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import { Autoplay } from 'swiper';



// const Auctionmodel = ({ show, handleClose, product }) => {
//     console.log("modelimage", product)
//     return (
//         <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//                 <Modal.Title>{product?.name || "Product Details"}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Card sx={{ maxWidth: 500 }}>
//                     <CardActionArea>
//                     <Swiper
//                             spaceBetween={10}
//                             slidesPerView={1}
//                             autoplay={{
//                                 delay: 3000, // Time between slides in ms
//                                 disableOnInteraction: false, // Keep autoplay on user interaction
//                             }}
//                             modules={[Autoplay]}
//                         >
//                               {product?.image.map((img, index) => (
//                                 <SwiperSlide key={index}>
//                                     <img
//                                         src={img}
//                                         alt={`product image ${index + 1}`}
//                                         style={{ width: '100%', height: '140px', objectFit: 'cover' }}
//                                     />
//                                 </SwiperSlide>
//                             ))}
//                             </Swiper>
//                         {/* <CardMedia
//                             component="img"
//                             height="140"
//                             image={product?.image[0]}
//                             alt="green iguana"
//                         /> */}
//                         <CardContent>
//                             <Typography gutterBottom variant="h5" component="div">
//                                 {product?.name}
//                             </Typography>
//                             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                                 {product?.description}
//                             </Typography>
//                             <Typography gutterBottom variant="h5" component="div">
//                                 {product?.color} color
//                             </Typography>
//                         </CardContent>
//                     </CardActionArea>
//                 </Card>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                     Close
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     );
// };

// export default Auctionmodel;



import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const Auctionmodel = ({ show, handleClose, product }) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{product?.name || "Product Details"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card style={{ maxWidth: 500 }}>
                    <CardActionArea>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={10}
                            slidesPerView={1}

                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}

                        >
                            {product?.image?.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={img}
                                        alt={`product image ${index + 1}`}
                                        style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product?.description?.length > 700
                                    ? `${product.description.substring(0, 700)}...`
                                    : product?.description}
                            </Typography>
                            <table class="table">
                                <thead>
                                    <tr>

                                        <th scope="col">Color</th>
                                        <th scope="col">Origin</th>
                                        <th scope="col">weight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>

                                            {product?.color} color

                                        </td>
                                        <td>

                                            {product?.origin} origin

                                        </td>
                                        <td>

                                            {product?.carat} gram
                                        </td>
                                    </tr>

                                </tbody>
                            </table>



                        </CardContent>
                    </CardActionArea>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Auctionmodel;
