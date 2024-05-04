import React from "react";

const AssignmentBulb = () => {

    const [bulbState, updateState] = React.useState(true);

    const toggleButton = () => {
        updateState(!bulbState);
    }
    
    return <div>
        <h1>Assignment SubTask 1 - Bulb on/off</h1>
        <div style={{
            marginLeft: "330px",
            background: bulbState?"white":"yellow", 
            height:"100px", 
            width:"20%"}}>
        </div>

        {bulbState && <button onClick={() => toggleButton()}>Switch-On</button>}
        {!bulbState && <button onClick={() => toggleButton()}>Switch-Off</button>}
    </div>
}

export default AssignmentBulb;