import React from "react";
import styled from "styled-components";
import { MapEditorContext } from "../../MapEditorContext";

const BackgroundHexTile = ({hex}) => {

    const {editorMode, selectedHex, setSelectedHex, workingArray, setWorkingArray} = React.useContext(MapEditorContext);

    let hexPoints = '';
    hex.vertices.forEach((vertice) => {
        hexPoints = hexPoints + `${vertice.x + hex.x},${vertice.y + hex.y} `;
    });
    const onClickHandler = () => {
        console.log("On click!");
        setSelectedHex(hex.key);
        if (editorMode === "add") {
            setWorkingArray([...workingArray, hex.key]);
        }

        else if (editorMode === "remove") {
            const newWorkingArray = workingArray.filter((key) => {
                return key !== hex.key;
            });

            setWorkingArray(newWorkingArray);
        }
    }

    let colour = "white";
    if (workingArray.includes(hex.key)) {
        colour = "blue";
    }

    const mouseOverHandler = () => {
        //console.log(hex.key);
        //setHoverHex(hex.key);
        //setCursorCoordinates({r: })
        //console.log(hex);
    }



    return (
        <g>
            <BackHex points={hexPoints}
                    onMouseDown={onClickHandler}
                    onMouseOver={mouseOverHandler}
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