import { useState, useEffect } from 'react';

const CurrentTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
       const intervalId = setInterval(() => setTime(new Date()), 1000);
       console.log(`Started timer ${intervalId}.`);
       return () => {
           console.log(`Clearing timer ${intervalId}`);
           clearInterval(intervalId);
       }
    }, []);

    return <h3>Current Time: {time.toLocaleTimeString()}</h3>
};

export default CurrentTime;
