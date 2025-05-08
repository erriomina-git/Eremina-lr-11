import React, { useState, useEffect } from 'react';

function Counter() {

    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(prev => prev + 1);
    }

    function decrement() {
        setCounter(prev => prev - 1);

    }

    return (
        <div>
            <button className="btn btn-danger" id='btn2' onClick={decrement}>-</button>
            <span>{counter}</span>
            <button className="btn btn-primary" id='btn1' onClick={increment}>+</button>
        </div>
    )
}

export default Counter
