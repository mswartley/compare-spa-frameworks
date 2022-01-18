import { useState } from "react";
import Counter from "../Counter";
import CurrentTime from "../CurrentTime";
import NavButton from "../NavButton";
import Section from "../Section";

const Simple = () => {
    const [showCounter, setShowCounter] = useState(true);
    const [showTime, setShowTime] = useState(true);

    return (
        <>
            <nav>
                <NavButton onClick={() => setShowCounter(!showCounter)}>{showCounter ? 'Hide' : 'Show'} Counter</NavButton>
                <NavButton onClick={() => setShowTime(!showTime)}>{showTime ? 'Hide' : 'Show'} Time</NavButton>
            </nav>
            <Section show={showCounter}>
                <Counter initialCount={5}/>
            </Section>
            <Section show={showTime}>
                <CurrentTime/>
            </Section>
        </>
    )
};

export default Simple;
