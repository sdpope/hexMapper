import React from "react";
import { MapEditorContext } from "../MapEditorContext";
import styled from "styled-components";
import RepresentElectedOfficial from "./RepresentElectedOfficial";

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
                {currentMap.hexes[selectedHex].hasOwnProperty("district") &&
                <>
                    <RepresentElectedOfficial districtName={currentMap.hexes[selectedHex].district} />
                </>
                }
            </div>
            <form id="districtPick" onSubmit={districtPickHandler}>
                <DistrictPicker>
                    {districts !== null && districts.map((district) => {

                        return <option key={district.name} value={district.name}>{district.name}</option>;

                    })}
                </DistrictPicker>
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
border: none;
margin: 0;
`;

const DistrictPicker = styled.select` 
width: 80%;
`;