import React from "react";
import { MapEditorContext } from "../../MapEditorContext";
import MapProperties from "./MapProperties";
import UpdateMapButton from "../UpdateMapButton";
import SubmitMapButton from "../SubmitMapButton";
import styled from "styled-components";

const MapInfo = () => {

    const {currentMap, districts, currentMapTitle, currentMapUUID, setCurrentMapTitle} = React.useContext(MapEditorContext);


    return (
        <Wrapper>
            <h3>Map Info</h3>
            <ul>
                {currentMapTitle !== null &&
                <InfoLine>
                    <label>Title:</label><input type="text" value={currentMapTitle} onChange={
                    (event) => {
                        event.stopPropagation();
                        setCurrentMapTitle(event.target.value);
                        //console.log(event.target.value);
                    }
                }/></InfoLine>
                
                }
                {currentMap !== null &&
                <InfoLine>{Object.keys(currentMap.hexes).length} tiles{districts !== null && <span>, {districts.length} districts.</span> }</InfoLine>
                }
            </ul>
            <MapProperties />
            {currentMapUUID !== null ? 
            <UpdateMapButton /> :
            <SubmitMapButton />
            }
        </Wrapper>
    );
}

export default MapInfo;

const InfoLine = styled.li` 
list-style: none;


`;

const Wrapper = styled.div` 
display: flex;
flex-direction: column;
justify-items: center;

`;