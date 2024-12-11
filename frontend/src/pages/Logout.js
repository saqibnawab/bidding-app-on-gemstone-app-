import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Logout = () => {
    const navigate = useNavigate();


    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        

    }, []);
    const handleLogout = () => {
    
        navigate('/login');
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4">
                <h1 className="card-title text-center">You are logged out</h1>
                <p className="card-text text-center">Thank you for using our app! We hope to see you again soon.</p>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" onClick={handleLogout}>
                        Login Again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Logout;

