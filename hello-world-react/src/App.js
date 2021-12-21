import {useState} from 'react';
import NavButton from './NavButton';
import Counter from './Counter';
import CurrentTime from './CurrentTime';
import Form from './Form';
import Joke from './Joke';
import Section from './Section';
import SuccessDialog from "./SuccessDialog";

const App = () => {
    const [showCounter, setShowCounter] = useState(true);
    const [showTime, setShowTime] = useState(true);
    const [showJoke, setShowJoke] = useState(true);
    const [showDialog, setShowDialog] = useState(false);

    return <div className="text-gray-900 mx-4 my-4 max-w-5xl lg:mx-auto">
        <nav>
            <NavButton onClick={() => setShowCounter(!showCounter)}>{showCounter ? 'Hide' : 'Show'} Counter</NavButton>
            <NavButton onClick={() => setShowTime(!showTime)}>{showTime ? 'Hide' : 'Show'} Time</NavButton>
            <NavButton onClick={() => setShowJoke(!showJoke)}>{showJoke ? 'Hide' : 'Show'} Joke</NavButton>
            <NavButton onClick={() => setShowDialog(!showDialog)}>{showDialog ? 'Hide' : 'Show'} Dialog</NavButton>
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
            <SuccessDialog open={showDialog} onClose={() => setShowDialog(false)}/>
        </main>
    </div>;
}

// const useErrorHandler = () => {
//     [error, setError] = useState();
//     [showErrorDialog, setShowErrorDialog] = useState(false);
// }

export default App;
