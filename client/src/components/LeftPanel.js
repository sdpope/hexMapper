import React from "react";
import styled from "styled-components";
import { MapEditorContext } from "../MapEditorContext";


const LeftPanel = () => {

    const {selectedHex, hoverHex, currentMap, setCurrentMap, editorMode, setEditorMode} = React.useContext(MapEditorContext);

    return (
    <Wrapper>
        Panel content here
        <p>SelectedHex: {selectedHex !== null && selectedHex}</p>
        <p>HoverHex: {hoverHex !== null && hoverHex}</p>    
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
    
        
    </Wrapper>
    );
}

export default LeftPanel;


const Wrapper = styled.div` 
width: 20%;

`;