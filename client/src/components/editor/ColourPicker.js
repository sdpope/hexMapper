import React from "react";
import { MapEditorContext } from "../../MapEditorContext";
import styled from "styled-components";


const ColourPicker = () => {
    const {representElecteds, colourRules, setColourRules} = React.useContext(MapEditorContext);

    React.useEffect(() => {
        //console.log("Mount colour picker");
        //console.log(colourRules);
        
        if (representElecteds !== null && colourRules === null ) {
            //console.log("inside if statement");
            let politicalParties = [];
            representElecteds.forEach((elected) => {
                let partyName = elected.party_name;
                if (!politicalParties.includes(partyName)) {
                    politicalParties.push(partyName);
                }
                
            })
            console.log("Political Parties:", politicalParties);
            if (politicalParties.length > 0) {
                let newColourRules = [];
                politicalParties.forEach((party) => {
                    newColourRules.push({name: party, colour: "#B50FB8"});
                });
                setColourRules(newColourRules);
            }
        }


    }, [representElecteds, colourRules]);


    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(event.target[4]);

        //iterate through everything in the form EXCEPT the submit button

        let numColours = event.target.length -1;

        let newColourRules = [];

        for (let index = 0; index < numColours; index++) {
            newColourRules.push({name: event.target[index].name, colour: event.target[index].value});
        }
        //console.log("new colours", newColourRules);
        setColourRules(newColourRules);
    }


    return (
        <div>
            <ul>
                <form id="colourPicker" onSubmit={handleSubmit} >
                    {colourRules !== null && 
                    colourRules.map((party) => {
                        return (
                            <li>
                                <label>{party.name}</label>
                                <input 
                                name={`${party.name}`} 
                                type="color" defaultValue={party.colour} />
                            </li>
                        );
                    })}
                    {colourRules !== null &&
                    <button type="submit">Set Colours</button> }
                    </form>
            </ul>
        </div>
    );
}

export default ColourPicker;