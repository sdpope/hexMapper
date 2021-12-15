import React from "react";
import { MapEditorContext } from "../MapEditorContext";

const SubmitMapButton = () => {


    const {currentMap, colourRules, legislature, currentMapTitle, setCurrentMapUUID} = React.useContext(MapEditorContext);


    const handleClick = () => {
        const newMapToSubmit = {
            name: currentMapTitle,
            legislature: legislature,
            colourRules: colourRules,
            mapObject: currentMap,
        }
        fetch(`/submitMap`, {
            method: "POST",
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
        <div>Submit Map Button
            <button onClick={handleClick}>Let's go!</button>
        </div>
    );

}

export default SubmitMapButton;