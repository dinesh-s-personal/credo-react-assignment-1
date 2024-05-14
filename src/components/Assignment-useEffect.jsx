import React from "react";

export const AssignUseEffect = () => {

    const country = React.useRef();
    const state = React.useRef();

    const countryList = ['India','Pakistan','Srilanka'];
    const statePakistan = ['Karachi'];
    const stateIndia = ['Delhi','Tamil Nadu','Kerala'];
    const stateSrilnka = ['Norther Srilanka','Dumbela'];
    const [stateList, setStateList] = React.useState([]);

    React.useEffect(() => {
        if (country.current.value === 'India'){
            setStateList(stateIndia);
        }
        else if (country.current.value === 'Pakistan')
        {
            setStateList(statePakistan);
        }
        else if (country.current.value === 'Srilanka')
        {
            setStateList(stateSrilnka);
        }
    },[countryList]);

    return <div>
        <h1>Assignment Task 8 - Contry and State details using useEffect</h1>

        <label for="country" style={{margin: "5px"}}>Contry:</label>
        <select id="country"
                name="country"
                ref={country}>
            {countryList.map((item, index) => (
                <option key={index}>{item}</option> 
                ))}
        </select>
        <br></br>
        <label for="state" style={{margin: "5px"}}>State:</label>
        <select id="state"
                name="state"
                ref={state}>
            {stateList.map((item, index) => (
                <option key={index}>{item}</option> 
                ))}
        </select>
        <br></br>
    </div>
}