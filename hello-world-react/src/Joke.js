import {useState, useEffect} from 'react';

const Joke = () => {
    const [joke, setJoke] = useState(null);
    const [waitingForPunchline, setWaitingForPunchline] = useState(false);
    const punchlineIsReady = joke && !waitingForPunchline;

    const fetchJoke = async () => {
        setJoke(null);
        setWaitingForPunchline(true);
        fetch('https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart')
            .then(response => response.json())
            .then(joke => setJoke(joke))
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            })
    };

    // Runs only once when the component is mounted. Sets up the first joke.
    useEffect(() => {
        fetchJoke();
    }, []);

    // Runs every time the joke changes, which happens when fetchJoke() successfully returns a joke.
    useEffect(() => {
        if (joke) {
            const timerId = setTimeout(() => setWaitingForPunchline(false), 5000);
            return () => clearTimeout(timerId);
        }
    }, [joke]);

    return <>
        <h3>Setup</h3>
        <p>{joke ? joke.setup : 'Loading a joke...'}</p>
        <h3>Punch Line</h3>
        <p>{punchlineIsReady ? joke.delivery : 'Wait for it...'}</p>
        <button onClick={() => fetchJoke()} disabled={waitingForPunchline}>Next Joke</button>
    </>
};

export default Joke;
