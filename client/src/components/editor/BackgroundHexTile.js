import React from "react";
import styled from "styled-components";
import { MapEditorContext } from "../../MapEditorContext";

const BackgroundHexTile = ({hex}) => {

    const {editorMode, currentMap, setCurrentMap, setSelectedHex} = React.useContext(MapEditorContext);

    let hexPoints = '';
    hex.vertices.forEach((vertice) => {
        hexPoints = hexPoints + `${vertice.x + hex.x},${vertice.y + hex.y} `;
    });

    // this component needs to be written to handle the tasks of editing,
    // so a couple borders and css filters for different options would be good




    // need to move this to foreground tile component
    const onClickHandler = () => {
        //console.log("On click!");
        //setSelectedHex(hex.key);
        if (editorMode === "add") {
            if (currentMap !== null) {
                let newMap = {...currentMap};
                let tileNumber = Object.keys(newMap.hexes).length;
                let newKey = `TileQ${hex.q}R${hex.r}`;
                newMap.hexes[newKey] = {q: hex.q, r: hex.r};
                // let newMap = {...currentMap};
                setCurrentMap(newMap);
                console.log("Added new tile,", newMap.hexes[newKey]);
                setSelectedHex(newKey);
                }
            
            }
        

    }

    let colour = "white";


    return (
        <g>
            <BackHex points={hexPoints}
                    onMouseDown={onClickHandler}
                    fill={colour} stroke="black" />
        </g>
    );
}


const BackHex = styled.polygon` 
&:hover {
    fill: lightgreen;
}
`

export default BackgroundHexTile;