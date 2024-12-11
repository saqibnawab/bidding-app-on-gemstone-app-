import { TextField, Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {




    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSubmitRegistration = (data) => {

        axios.post('http://localhost:5000/createuser', data)
            .then((res) => {
                console.log(res);
                toast.success(res.data.message);
            })
            .catch((err) => {

                toast.error(err.response.data.message);

            });
    };

    return (
        <div className="container">
            <div className="row">
               
                <div className="col-7 mx-auto  mt-5">
                    <form onSubmit={handleSubmit(handleSubmitRegistration)}>
                        {/* Image Section at the Top */}
                        {/* <Box mb={2} textAlign="center">
                            <Typography variant="h6" gutterBottom>
                                Profile Image
                            </Typography>
                            <Box
                                component="img"
                                src={image ? URL.createObjectURL(image) : 'https://via.placeholder.com/150'}
                                alt="Profile"
                                sx={{ width: 150, height: 150, borderRadius: '50%', mb: 2 }}
                                onLoad={() => URL.revokeObjectURL(image)}
                            />
                            <Box>
                                <input
                                    type="file"
                                    onChange={handleimage}
                                    accept="image/*"
                                />
                            </Box>
                        </Box> */}

                        {/* Form Section */}
                        <Box mb={2}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                {...register("name", { required: "Name is required" })}
                                fullWidth
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                {...register("email", { required: "Email is required" })}
                                fullWidth
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                {...register("password", { required: "Password is required" })}
                                fullWidth
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                label="Phone"
                                variant="outlined"
                                {...register("phone", { required: "Phone number is required" })}
                                fullWidth
                                error={!!errors.phone}
                                helperText={errors.phone?.message}
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                label="Address"
                                variant="outlined"
                                {...register("Address", { required: "Address is required" })}
                                fullWidth
                                error={!!errors.Address}
                                helperText={errors.Address?.message}
                            />
                        </Box>

                        {/* Buttons for Submit and Navigation */}
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            mt={4}
                        >
                            <Box display="flex" gap={2}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                                <NavLink to='/login'>

                                    <Button
                                        variant="contained"
                                        color="primary"

                                    >
                                        Go to Login
                                    </Button>
                                </NavLink>

                            </Box>
                        </Box>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Registration;
