import {useState, useEffect} from 'react';

const Joke = () => {
    const [waiting, setWaiting] = useState(false);
    const [setup, setSetup] = useState('');
    const [punchLine, setPunchLine] = useState('');

    const fetchJoke = async () => {
        setWaiting(true);
        setSetup('Loading next joke...');
        setPunchLine('Wait for it...');
        fetch('https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart')
            .then(response => response.json())
            .then(joke => {
                setSetup(joke.setup);
                setTimeout(() => {
                    setPunchLine(joke.delivery);
                    setWaiting(false);
                }, 5000);
            });
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return <>
        <h3>Setup</h3>
        <p>{setup}</p>
        <h3>Punch Line</h3>
        <p>{punchLine}</p>
        <button onClick={() => fetchJoke()} disabled={waiting}>Next Joke</button>
    </>
};

export default Joke;
