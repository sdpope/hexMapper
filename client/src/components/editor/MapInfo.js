import React from "react";
import { MapEditorContext } from "../../MapEditorContext";
import MapProperties from "./MapProperties";
import UpdateMapButton from "../UpdateMapButton";
import SubmitMapButton from "../SubmitMapButton";

const MapInfo = () => {

    const {currentMap, districts, currentMapTitle, currentMapUUID, setCurrentMapTitle} = React.useContext(MapEditorContext);


    return (
        <div>
            <h3>Map Info</h3>
            <ul>
                {currentMapTitle !== null &&
                <li><input type="text" value={currentMapTitle} onChange={
                    (event) => {
                        event.stopPropagation();
                        setCurrentMapTitle(event.target.value);
                        //console.log(event.target.value);
                    }
                }/></li>
                
                }
                {currentMap !== null &&
                <li>{Object.keys(currentMap.hexes).length} tiles{districts !== null && <span>, {districts.length} districts.</span> }</li>
                }
            </ul>
            <MapProperties />
            {currentMapUUID !== null ? 
            <UpdateMapButton /> :
            <SubmitMapButton />
            }
        </div>
    );
}

export default MapInfo;