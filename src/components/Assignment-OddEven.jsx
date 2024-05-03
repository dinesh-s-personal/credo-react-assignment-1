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

        {count%2 === 0 ? "Number is even" : "Number is odd"}
    </div>
}