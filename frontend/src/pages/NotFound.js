import { Box, Typography, Button } from '@mui/material';
import React from 'react';

const NotFound = () => {

    const handleGoHome = () => {
       
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', textAlign: 'center', p: 3 }}
        >
            <Typography variant="h1" component="h1" color="error" mb={3}>
                404
            </Typography>
            <Typography variant="h5" component="h2" mb={2}>
                Oops! Page Not Found
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={4}>
                Sorry, the page you’re looking for doesn’t exist or has been moved.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGoHome}
            >
                Go to Homepage
            </Button>
        </Box>
    );
};

export default NotFound;
