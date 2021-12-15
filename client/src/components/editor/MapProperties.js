import React from "react";
import styled from "styled-components";
import { MapEditorContext } from "../../MapEditorContext";
import { makeWorkingGrid } from "./utilities";


const MapProperties = () => {

    const {setCurrentMap, currentMap, workingGrid, setWorkingGrid} = React.useContext(MapEditorContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(event.target[1].value);
        let heightTile = event.target[0].value;
        let widthTile = event.target[1].value;
        let newMap = makeWorkingGrid(widthTile, heightTile);
        setWorkingGrid(newMap);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        
    
        <SettingsWrapper>
            <label for="heightTiles">Height (tiles)</label>
            <input name="heightTiles" type="number" defaultValue="20" min="1"></input>
            <label for="widthTiles">Width (tiles)</label>
            <input name="widthTiles" type="number" defaultValue="20" min="1"></input>
        </SettingsWrapper>

        <button type="submit">Get started!</button>
        </form>
    </>
    );
}

const SettingsWrapper = styled.div` 
display: flex;
flex-direction: column;
`;

export default MapProperties;


/* 
<input type="file" id="mapUpload" onChange={(event) => {
            let file = event.target.files[0];
            let testReader = new FileReader();
            testReader.addEventListener('load', (event => {
                //console.log(event.target.result)
                let mapText = event.target.result;
                try {
                    let mapObject = JSON.parse(mapText);
                    console.log(mapObject);
                    setCurrentMap(mapObject);
                }
                catch (error) { console.log(error.message); }
                
            }));
            testReader.readAsText(file);
        
    }} />

*/