import React from "react";
import styled from "styled-components";
import { MapEditorContext } from "../MapEditorContext";
import SelectedHexDetails from "./SelectedHexDetails";
import ColourPicker from "./editor/ColourPicker";
import MapInfo from "./editor/MapInfo";
import RepresentElectedOfficial from "./RepresentElectedOfficial";



const LeftPanel = () => {

    const { editorPanel, selectedHex, legislature, currentMapUUID, currentMap, setCurrentMap, editorMode, setEditorMode} = React.useContext(MapEditorContext);

    return (
    <Wrapper>
        <p>Editor mode</p>
        <ul>
            <li>
                <button 
                disabled={editorMode === "select"}
                onClick={() => setEditorMode("select")}>
                    select</button>
            </li>
            <li>
                <button 
                disabled={editorMode === "add"}
                onClick={() => setEditorMode("add")}>
                    add</button>
            </li>
            <li>
                <button 
                disabled={editorMode === "remove"}
                onClick={() => setEditorMode("remove")}>remove</button>
            </li>
        </ul>
        {legislature !== null &&
        <>
            <MapInfo />
            { editorPanel === "hex" && <SelectedHexDetails />}
            <ColourPicker />
        </>
        }
        {
            false && selectedHex !== null && currentMap.hexes[selectedHex].hasOwnProperty("district") &&
            <RepresentElectedOfficial districtName={currentMap.hexes[selectedHex].district} />
        }
        
    
    
    </Wrapper>
    );
}

export default LeftPanel;


const Wrapper = styled.div` 
width: 20%;

`;