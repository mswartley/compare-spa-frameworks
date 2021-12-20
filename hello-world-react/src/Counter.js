import {useState} from 'react';
import Button from './Button';

const Counter = ({initialCount = 0}) => {
    const [count, setCount] = useState(initialCount);
    return (
        <div>
            <h3 className="mb-1 text-xl font-normal">Counter: {count}</h3>
            <Button onClick={() => setCount(count + 1)}>Add 1</Button>
            <Button onClick={() => setCount(count - 1)}>Subtract 1</Button>
        </div>
    );
}

export default Counter;
