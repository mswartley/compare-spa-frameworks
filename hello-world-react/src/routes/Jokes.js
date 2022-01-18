import { useState } from "react";
import Joke from "../Joke";
import NavButton from "../NavButton";
import Section from "../Section";

const Jokes = () => {
    const [showJoke, setShowJoke] = useState(true);

    return (
        <>
            <nav>
                <NavButton onClick={() => setShowJoke(!showJoke)}>{showJoke ? 'Hide' : 'Show'} Joke</NavButton>
            </nav>
            <Section show={showJoke}>
                <Joke/>
            </Section>
        </>
    )
};

export default Jokes;
