import React from "react";
import styled from "styled-components";
import { MapEditorContext } from "../MapEditorContext";
import { legislatures } from "./legislatures";

const RepresentAPI = () => {


    const {legislature, setLegislature, representElecteds, setRepresentElecteds, districts, setDistricts, districtsGeo, setDistrictsGeo } = React.useContext(MapEditorContext);

    
    
//todo: 



// 1. select input for province
// 2. select input for boundary set
// 3. get button

// 4. useEffect fetch logic with api

// 5. useState variables in context

// 4. display div / table for info
// 5. filter textbox for keys

    return (
        <>
            <div>
                <form id="legislatureSelect"
                onSubmit={
                    (event) => {
                        event.preventDefault();
                        console.log(event.target[0].value);
                        if (event.target[0].value !== "nothing") {
                            //find the leg from the array and set it, 
                            // so the useEffect fires and gets the data
                            let newLegislatureName = event.target[0].value;
                            console.log(newLegislatureName);
                            let newLegislature = legislatures.filter((leg) => {
                                return leg.name === newLegislatureName;
                            });
                            console.log(newLegislature[0]);
                            setLegislature(newLegislature[0]);
                        }
                    }
                }>
                <select>
                    <option value="nothing">Pick a legislature</option>
                    {legislatures.map((leg) => {
                        return (
                            <option value={leg.name} key={leg.name}>{leg.name}</option>
                        );
                    })}
                </select>
                <button type="submit">Get data!</button>
                </form>
            </div>
            <DatasetWrapper>
            <ul>
            {districts !== null &&
            
            districts.map((object) => {
                return (<li key={object.name}>{object.name}</li> );
            })}
            </ul>
            </DatasetWrapper>
        </>
    );
}

export default RepresentAPI;

const DatasetWrapper = styled.div` 
height: 500px;
overflow-y: auto;
`