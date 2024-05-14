import React from "react";

export const AssignUseEffect = () => {

    const countryList = ['India','Pakistan','Srilanka'];
    const statePakistan = ['Karachi'];
    const stateIndia = ['Delhi','Tamil Nadu','Kerala'];
    const stateSrilnka = ['Norther Srilanka','Dumbela'];
    const [stateList, setStateList] = React.useState([]);
    const [selCountry, setSelCountry] = React.useState('');

    const handleCountryChange = (e) => {
        setSelCountry(e.target.value);
    }

    React.useEffect(() => {
        if (selCountry === 'India'){
            setStateList(stateIndia);
        }
        else if (selCountry === 'Pakistan')
        {
            setStateList(statePakistan);
        }
        else if (selCountry === 'Srilanka')
        {
            setStateList(stateSrilnka);
        }
    },[selCountry]);

    return <div>
        <h1>Assignment Task 8 - Contry and State details using useEffect</h1>

        <label for="country" style={{margin: "5px"}}>Contry:</label>
        <select id="country"
                name="country"
                value={selCountry}
                onChange={handleCountryChange}>
            {countryList.map((item, index) => (
                <option key={index}>{item}</option> 
                ))}
        </select>
        <br></br>
        <label for="state" style={{margin: "5px"}}>State:</label>
        <select id="state"
                name="state">
            {stateList.map((item, index) => (
                <option key={index}>{item}</option> 
                ))}
        </select>
        <br></br>
    </div>
}