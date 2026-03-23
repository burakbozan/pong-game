import React, { useEffect, useState } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setTime(now.toUTCString().replace(' GMT', '').replace('UTC', ''));
        };

        updateClock();
        const intervalId = setInterval(updateClock, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <div>{time}</div>;
};

export default DigitalClock;