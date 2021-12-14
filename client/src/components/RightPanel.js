import React from "react";
import styled from "styled-components";
import RepresentAPI from "./RepresentAPI";
import { MapEditorContext } from "../MapEditorContext";
import ColourPicker from "./editor/ColourPicker";




const RightPanel = () => {

    const {legislature, districts, representElecteds} = React.useContext(MapEditorContext);


    return (
    <Wrapper>
        {legislature !== null && 
            <p>Legislature: {legislature.name}</p>
        }

        <ColourPicker />
    </Wrapper>
    );
}

export default RightPanel;


const Wrapper = styled.div` 
width: 20%;

`;