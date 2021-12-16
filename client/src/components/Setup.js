import React from "react";
import styled from "styled-components";
import { MapEditorContext } from "../MapEditorContext";
import { legislatures } from "./legislatures";
import { makeWorkingGrid } from "./editor/utilities";


const Setup = () => {

    const {setWorkingGrid, setLegislature } = React.useContext(MapEditorContext);

    const [selectedLeg, setSelectedLeg] = React.useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(event.target[1].value);
        let heightTile = event.target[0].value;
        let widthTile = event.target[1].value;
        let newMap = makeWorkingGrid(widthTile, heightTile);
  
        let newLegislature = legislatures.filter((leg) => {
            return leg.name === selectedLeg;
        });

        setLegislature(newLegislature[0]);

        setWorkingGrid(newMap);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        
        <SettingsWrapper>
            <h3>Grid settings</h3>
            <label for="heightTiles">Height (tiles)</label>
            <SizePicker name="heightTiles" type="number" defaultValue="20" min="1" />
            <label for="widthTiles">Width (tiles)</label>
            <SizePicker name="widthTiles" type="number" defaultValue="20" min="1" />
            <h3>Dataset</h3>
            <select
                onChange={(event) => {
                    console.log(event.target.value);
                    setSelectedLeg(event.target.value);
                }}>
                    <option value="nothing">Pick a legislature</option>
                    {legislatures.map((leg) => {
                        return (
                            <option value={leg.name} key={leg.name}>{leg.name}</option>
                        );
                    })}
                </select>
        </SettingsWrapper>

        <button 
        disabled={selectedLeg === null || selectedLeg === "nothing"}
        type="submit">Get started!</button>
        </form>
    </>
    );
   
}

export default Setup;

const SettingsWrapper = styled.div` 
display: flex;
flex-direction: column;
width: 500px;
`;

const SizePicker = styled.input` 
width: 50px;


`;