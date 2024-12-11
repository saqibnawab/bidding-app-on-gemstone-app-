import { TextField, Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        console.log(data);

        axios.post('http://localhost:5000/login', data).then((res) => {
            console.log(res);
            toast.success(res.data.message);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            console.log(res.data.user);
            setTimeout(() => {
                navigate('/home');
            }, 2000);

        }).catch((err) => {
            console.log(err);
            toast.error(err.response.data.message);
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Login Form */}
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ minHeight: '100vh' }}
                        >
                            <Typography variant="h5" mb={4}>Login</Typography>

                            <Box width="100%">
                                <Box mb={2}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address",
                                            },
                                        })}
                                        error={!!errors.email}
                                        helperText={errors.email ? errors.email.message : ""}
                                    />
                                </Box>
                                <Box mb={3}>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters",
                                            },
                                        })}
                                        error={!!errors.password}
                                        helperText={errors.password ? errors.password.message : ""}
                                    />
                                </Box>
                                <Box mb={2}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        fullWidth
                                    >
                                        Login
                                    </Button>
                                </Box>
                                <Box>
                                    <NavLink to="/registration">

                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            fullWidth
                                        >
                                            Register
                                        </Button>
                                    </NavLink>
                                </Box>
                            </Box>
                        </Box>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;
