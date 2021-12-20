import {useState} from 'react';
import NavButton from './NavButton';
import Counter from './Counter';
import CurrentTime from './CurrentTime';
import Form from './Form';
import Joke from './Joke';
import Section from './Section';

 const App = () => {
    const [showCounter, setShowCounter] = useState(true);
    const [showTime, setShowTime] = useState(true);
    const [showJoke, setShowJoke] = useState(true);

    return <div className="text-gray-900 mx-4 my-4 max-w-5xl lg:mx-auto">
        <nav>
            <NavButton onClick={() => setShowCounter(!showCounter)}>{showCounter ? 'Hide' : 'Show'} Counter</NavButton>
            <NavButton onClick={() => setShowTime(!showTime)}>{showTime ? 'Hide' : 'Show'} Time</NavButton>
            <NavButton onClick={() => setShowJoke(!showJoke)}>{showJoke ? 'Hide' : 'Show'} Joke</NavButton>
        </nav>
        <main className="mt-4">
            <h1 className="text-4xl font-bold">Hello React!</h1>
            <Section show={showCounter}>
                <Counter initialCount={5}/>
            </Section>
            <Section show={showTime}>
                <CurrentTime/>
            </Section>
            <Section show={showJoke}>
                <Joke/>
            </Section>
            <Section>
                <Form/>
            </Section>
        </main>
    </div>;
}

export default App;
