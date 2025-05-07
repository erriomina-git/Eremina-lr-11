import React, { useState, useEffect } from "react" ;

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
        <h1>Counter: {counter}<h1/>
        <button className="btn btn-primary" onClick={increment}>+<button/>
        <button className="btn btn-danger" onClick={decrement}>-<button/>
    <div/>
    )
}

export default Counter