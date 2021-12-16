import React from "react";
import styled from "styled-components";
import { MapEditorContext } from "../MapEditorContext";
import SelectedHexDetails from "./SelectedHexDetails";
import ColourPicker from "./editor/ColourPicker";
import MapInfo from "./editor/MapInfo";
import RepresentElectedOfficial from "./RepresentElectedOfficial";



const LeftPanel = () => {

    const { selectedGeoDistrict, editorPanel, selectedHex, legislature, currentMapUUID, currentMap, setCurrentMap, editorMode, setEditorMode} = React.useContext(MapEditorContext);

    return (
    <Wrapper>
        <h2>hexMapper</h2>
        <h3>Editor mode</h3>
        <ul>
            <ListItem>
                <button 
                disabled={editorMode === "select"}
                onClick={() => setEditorMode("select")}>
                    select</button>
            </ListItem>
            <ListItem>
                <button 
                disabled={editorMode === "add"}
                onClick={() => setEditorMode("add")}>
                    add</button>
            </ListItem>
            <ListItem>
                <button 
                disabled={editorMode === "remove"}
                onClick={() => setEditorMode("remove")}>remove</button>
            </ListItem>
        </ul>
        {legislature !== null &&
        <>
            <MapInfo />
            { editorPanel === "hex" && <SelectedHexDetails />}
            {editorPanel === "geomap" && selectedGeoDistrict !== null &&
                <RepresentElectedOfficial districtName={selectedGeoDistrict} />
                }
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

const ListItem = styled.li` 
list-style: none;


`;