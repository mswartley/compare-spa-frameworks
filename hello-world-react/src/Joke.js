import {useState, useEffect} from 'react';
import SpinButton from './SpinButton';
import ErrorDialog from "./ErrorDialog";

const Joke = () => {
    const [joke, setJoke] = useState(null);
    const [error, setError] = useState(null);
    const [waitingForPunchline, setWaitingForPunchline] = useState(false);
    const punchlineIsReady = joke && !waitingForPunchline;

    const fetchJoke = async () => {
        setJoke(null);
        setWaitingForPunchline(true);
        fetch('https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart')
            .then(response => response.json())
            .then(joke => {
                if (joke.error) {
                    throw joke;
                }
                setJoke(joke)
            })
            .catch(error => {
                console.error('Error fetching the next joke', error);
                setError(error);
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
            <h3 className="ml-3 text-lg font-normal text-gray-800">{joke ? joke.setup : 'Loading a joke...'}</h3>
            <h3 className={`ml-3 text-lg${!punchlineIsReady ? ' text-gray-500 animate-pulse' : ' font-medium' }`}>{punchlineIsReady ? joke.delivery : 'Calculating the optimal comedic timing'}</h3>
        </div>
        <SpinButton onClick={() => fetchJoke()} waiting={waitingForPunchline}>{waitingForPunchline ? 'Wait for it...' : 'Next Joke'}</SpinButton>
        <ErrorDialog open={error !== null} onClose={() => setError(null)} error={error}/>
    </>
};

export default Joke;
