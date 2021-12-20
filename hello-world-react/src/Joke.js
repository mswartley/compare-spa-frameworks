import {useState, useEffect} from 'react';
import Button from './Button';

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
        <div className="mb-2">
            <h3 className="text-xl font-normal">Okay, Here's a Joke</h3>
            <h3 className="ml-3 text-md font-normal text-gray-700">{joke ? joke.setup : 'Loading a joke...'}</h3>
            <h3 className={`ml-3 text-lg font-normal${!punchlineIsReady ? ' text-gray-500' : '' }`}>{punchlineIsReady ? joke.delivery : 'Wait for it...'}</h3>
        </div>
        <Button onClick={() => fetchJoke()} disabled={waitingForPunchline}>Next Joke</Button>
    </>
};

export default Joke;
