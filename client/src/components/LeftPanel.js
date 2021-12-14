import React from "react";
import styled from "styled-components";
import { MapEditorContext } from "../MapEditorContext";
import MapProperties from "./editor/MapProperties";
import SelectedHexDetails from "./SelectedHexDetails";


const LeftPanel = () => {

    const { currentMap, setCurrentMap, editorMode, setEditorMode} = React.useContext(MapEditorContext);

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
        <SelectedHexDetails />
    
        
    </Wrapper>
    );
}

export default LeftPanel;


const Wrapper = styled.div` 
width: 20%;

`;