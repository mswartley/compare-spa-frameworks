import {useState} from 'react';

const Counter = ({initialCount = 0}) => {
    const [count, setCount] = useState(initialCount);
    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={() => setCount(count + 1)}>&nbsp;+&nbsp;</button>
            <button style={{marginLeft: 4}} onClick={() => setCount(count - 1)}>&nbsp;-&nbsp;</button>
        </div>
    );
}

export default Counter;
