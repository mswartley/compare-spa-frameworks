import {useState} from 'react';
import Counter from './Counter';
import CurrentTime from './CurrentTime';
import Joke from './Joke';

function App() {
    const [showCounter, setShowCounter] = useState(true);
    const [showTime, setShowTime] = useState(true);
    const [showJoke, setShowJoke] = useState(true);

    return <>
        <h1>Hello React!</h1>
        <button onClick={() => setShowCounter(!showCounter)}>{showCounter ? 'Hide' : 'Show'} Counter</button>
        <button style={{marginLeft: 4}} onClick={() => setShowTime(!showTime)}>{showTime ? 'Hide' : 'Show'} Time</button>
        <button style={{marginLeft: 4}} onClick={() => setShowJoke(!showJoke)}>{showJoke ? 'Hide' : 'Show'} Joke</button>
        {showCounter && <>
            <hr/>
            <Counter initialCount={12}/>
        </>}
        {showTime && <>
            <hr/>
            <CurrentTime/>
        </>}
        {showJoke && <>
            <hr/>
            <Joke/>
        </>}
        <hr/>
    </>;
}

export default App;
