import React from "react";
import { MapEditorContext } from "../../MapEditorContext";

const HexTile = ({hex}) => {

    const {selectedHex, setSelectedHex, hoverHex, setHoverHex} = React.useContext(MapEditorContext);

    let hexPoints = '';
    hex.vertices.forEach((vertice) => {
        hexPoints = hexPoints + `${vertice.x + hex.x},${vertice.y + hex.y} `;
    });


    const onClickHandler = () => {
        console.log("On click!");
        setSelectedHex(hex.key);
    }

    const mouseOverHandler = () => {
        //console.log(hex.key);
        setHoverHex(hex.key);
    }

    let hexColour = "black";
    if (hex.key === hoverHex) { hexColour = "lightgreen" }
    if (hex.key === selectedHex) { hexColour = "green" }


    return (
        <g onMouseOver={mouseOverHandler} >
            <polygon points={hexPoints} fill={hexColour} onClick={onClickHandler} />
            <text x={hex.x} y={hex.y} fill="white">{hex.key}</text>
        </g>
    );



}

export default HexTile;