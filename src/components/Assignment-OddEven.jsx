import React from "react";

export const AssignmentOddEven = () => {

    const [count, setCount] = React.useState(0);

    return <div>
        <h1>Assignment SubTask 2 - Odd or Even</h1>

        Count: {count}
        <br />
        <button onClick={() => {setCount(count + 1)}}>+</button>
        <button onClick={() => {setCount(count - 1)}}>-</button>

        <br />

        {count%2 === 0 ? "Result: Number is even" : "Result: Number is odd"}
    </div>
}