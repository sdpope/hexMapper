import React from "react";
import styled from "styled-components";
import { MapEditorContext } from "../../MapEditorContext";

const HexTile = ({hex}) => {

    const {selectedHex, setSelectedHex, editorMode, setEditorMode, currentMap, setCurrentMap, colourRules, districts, representElecteds, partyByDistrict} = React.useContext(MapEditorContext);

    let hexPoints = '';
    hex.vertices.forEach((vertice) => {
        hexPoints = hexPoints + `${vertice.x + hex.x},${vertice.y + hex.y} `;
    });


    const onClickHandler = () => {
        //console.log("On click!");


        if (editorMode === "select") {
            //setSelectedHex(hex.key);

            let keys = Object.keys(currentMap.hexes);
            keys.forEach((key) => {
                if (currentMap.hexes[key].q === hex.q && currentMap.hexes[key].r === hex.r) {
                    setSelectedHex(key);
                }
            })
        }

        if (editorMode === "remove") {
            if (currentMap !== null) {
                setSelectedHex(null);
                let newMap = {...currentMap};
                let keys = Object.keys(newMap.hexes);
                //console.log(keys);
                let keyToDelete = null;
                keys.forEach((key) => {
                    if (newMap.hexes[key].r === hex.r && newMap.hexes[key].q === hex.q) {
                        console.log(key);
                        keyToDelete = key;
                    }
                })
                delete newMap.hexes[keyToDelete];
                setCurrentMap(newMap);
            }

        }
    }



    let hexColour = "green";

    // check if the corresponding hex in the currentMap has been assigned a district,
    // and assign it a colour accordingly;

    let keys = Object.keys(currentMap.hexes);

    keys.forEach((key) => {
        if (currentMap.hexes[key].r === hex.r && currentMap.hexes[key].q === hex.q) {
            //now we check if it has a district assigned;
            if (currentMap.hexes[key].hasOwnProperty("district")) {
                //console.log(key, "has a district assigned");
                //now we find the member;
                let localDistrictName = currentMap.hexes[key]["district"];

                let districtParty = partyByDistrict[localDistrictName];
                // then finally, we assign the colour
                colourRules.forEach((party) => {
                    if (party.name === districtParty) {
                        hexColour = party.colour;
                    }
                })
            
                
            }
        }
    })


    return (
        <g >
            <Tile mode={editorMode} points={hexPoints} fill={hexColour} onClick={onClickHandler} />
        </g>
    );



}




const Tile = styled.polygon` 
cursor: pointer;
&:hover{
    fill: darkgreen;
}


`;

export default HexTile;