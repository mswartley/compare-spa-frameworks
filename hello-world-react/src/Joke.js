import { useState, useEffect } from 'react';

const Joke = () => {
    const [counter, setCounter] = useState(0);
    const [setup, setSetup] = useState('');
    const [punchLine, setPunchLine] = useState('');

    useEffect(() => {
        setSetup('Loading next joke...');
        setPunchLine('Wait for it...');
        fetch('https://v2.jokeapi.dev/joke/Any?type=twopart')
            .then(response => response.json())
            .then(joke => {
                setSetup(joke.setup);
                setTimeout(() => setPunchLine(joke.delivery), 5000);
            });
    }, [counter]);

    return <>
        <h3>Setup</h3>
        <p>{setup}</p>
        <h3>Punch Line</h3>
        <p>{punchLine}</p>
        <button onClick={() => setCounter(counter + 1)}>Next Joke</button>
    </>
};

export default Joke;
