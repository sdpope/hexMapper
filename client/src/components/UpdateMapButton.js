import React from "react";
import { MapEditorContext } from "../MapEditorContext";

const UpdateMapButton = () => {


    const {currentMapUUID, currentMap, colourRules, legislature, currentMapTitle, setCurrentMapUUID} = React.useContext(MapEditorContext);


    const handleClick = () => {
        const newMapToSubmit = {
            _id: currentMapUUID,
            name: currentMapTitle,
            legislature: legislature,
            colourRules: colourRules,
            mapObject: currentMap,
        }
        fetch(`/updateMap`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                },
                body: JSON.stringify(newMapToSubmit)
        })
        .then(res => res.json())
        .then((res) => {
            setCurrentMapUUID(res);
            console.log(res);
        });

    }

    return (
        <div>
            <button onClick={handleClick}>Save changes</button>
        </div>
    );

}

export default UpdateMapButton;