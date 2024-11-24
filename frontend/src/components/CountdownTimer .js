import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you import Bootstrap CSS

const CountdownTimer = ({ totalHours }) => {
    const initialTotalSeconds = totalHours * 3600;
    const [timeInSeconds, setTimeInSeconds] = useState(initialTotalSeconds);

    useEffect(() => {
        if (timeInSeconds > 0) {
            const intervalId = setInterval(() => {
                setTimeInSeconds((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [timeInSeconds]);

    const days = Math.floor(timeInSeconds / 86400);
    const remainingHours = Math.floor((timeInSeconds % 86400) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return (
        <div className="d-flex justify-content-between my-2">
            {timeInSeconds > 0 ? (
                <>
                    <div className="bg-primary text-white rounded px-2 py-1 text-center">
                        <h6 className="mb-0">{days}</h6>
                        <small>Days</small>
                    </div>
                    <div className="bg-success text-white rounded px-2 py-1 text-center">
                        <h6 className="mb-0">{remainingHours}</h6>
                        <small>Hours</small>
                    </div>
                    <div className="bg-info text-white rounded px-2 py-1 text-center">
                        <h6 className="mb-0">{minutes}</h6>
                        <small>Minutes</small>
                    </div>
                    <div className="bg-warning text-white rounded px-2 py-1 text-center">
                        <h6 className="mb-0">{seconds}</h6>
                        <small>Seconds</small>
                    </div>
                </>
            ) : (
                <p className="text-danger">Time's up!</p>
            )}
        </div>
    );
};

export default CountdownTimer;
