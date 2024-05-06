import React from "react";

export const AssignmentWeek = () => {

    //const [weekDetails, setWeekDetails] = React.useState(0);

    const [outputDtls, setOutput] = React.useState('');

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const calcDetails = (value) => {
        if (value >= 1 && value <= 7){
            setOutput('Weekday - ' + weekday[value-1]);
        }
        else{
            setOutput('Enter a valid week number');
        }
    }

    return <div>
        <h1>Assignment SubTask 3 - Show week details</h1>

        <form onSubmit={e => { // <-- form submit callback
            e.preventDefault(); // prevent default form action so page doesn't reload
            const { value } = e.target.inValue;
            calcDetails(value); // update state
            e.target.inValue.value = ''; // reset input value
          }}>

            <input id="inValue" name="day" placeholder="Enter a day" min={1} max={7} type="number"></input>
            <br />
            <button type="submit" className="button">Check Details</button>
            <br />
            <label>Week Details: {outputDtls}</label>
        </form>
    </div>
}