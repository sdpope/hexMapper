import React from "react";
import { MapEditorContext } from "../MapEditorContext";
import styled from "styled-components";

const SelectedHexDetails = () => {

    const {currentMap, setCurrentMap, selectedHex, districts, representElecteds, partyByDistrict} = React.useContext(MapEditorContext);

    //console.log("electeds", representElecteds);

    let districtRep = null;

    if (selectedHex !== null) {
        if (representElecteds !== null) {
            districtRep = representElecteds.filter((elected) => {
                if (!currentMap.hexes[selectedHex].hasOwnProperty('district')) {
                    return false;
                }
                else if (currentMap.hexes[selectedHex].district === elected.district_name) {
                    return true;
                }
                else { return false; }
            })
        }
    
    }   
        //console.log(districtRep);
    
    

    //console.log(districtRep[0]);

    const districtPickHandler = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        //this is where we set the district value for the hex tile
        let newDistrict = event.target[0].value;

        let newMap = {...currentMap};
        newMap.hexes[selectedHex].district = newDistrict;
        setCurrentMap(newMap);
    }

    return (
        <Wrapper>
        {selectedHex !== null && selectedHex !== undefined &&
        <div>
            <p>Selected Hex: {selectedHex}</p>
            <p>Row: {currentMap.hexes[selectedHex].r}</p>
            <p>Column: {currentMap.hexes[selectedHex].q}</p>
            <div>
                {currentMap.hexes[selectedHex].district === undefined &&
            "no district selected yet"}
                {currentMap.hexes[selectedHex].district !== undefined &&
                <>
                    <p>District: {currentMap.hexes[selectedHex].district}</p>
                    {districtRep !== null && 
                    <>
                        <p>Representative: {false && districtRep[0].name} </p>
                        <p>Party Name: {false && districtRep[0].party_name}</p>
                    </>
                    }
                </>
                }
            </div>
            <form id="districtPick" onSubmit={districtPickHandler}>
                <select>
                    {districts !== null && districts.map((district) => {
                        return <option key={district.name} value={district.name}>{district.name}</option>
                    })}
                </select>
                <button type="submit">Set District</button>
            </form>
            {}
            
        </div>
        }
        
        </Wrapper>
    );
}

export default SelectedHexDetails;

const Wrapper = styled.div` 
border: 1px solid black;
margin: 0;
`;