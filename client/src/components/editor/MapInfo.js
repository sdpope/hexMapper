import React from "react";
import { MapEditorContext } from "../../MapEditorContext";

const MapInfo = () => {

    const {currentMap, districts, currentMapTitle} = React.useContext(MapEditorContext);


    return (
        <>Map Info</>
    );
}

export default MapInfo;