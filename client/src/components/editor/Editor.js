import React from "react";
import {renderHexJSON, getGridForHexJSON} from "d3-hexjson";
import styled from "styled-components";
import MapProperties from "./MapProperties";
import { MapEditorContext } from "../../MapEditorContext";
import BackgroundHexTile from "./BackgroundHexTile";
import HexTile from "./HexTile";

const Editor = () => {

    const {editorStatus, setEditorStatus, currentMap, setCurrentMap, workingGrid, setWorkingGrid} = React.useContext(MapEditorContext);


    return (        
            <Wrapper>
            {workingGrid !== null &&
                <MapContainer id="MapContainer" >
                <SVGContainer  >
                {  workingGrid.map((hex) => {
                        let tileType = "bg";
                        if (currentMap !== null) {
                            let mapHexes = Object.keys(currentMap.hexes);
                            mapHexes.forEach((tile) => {
                                if (currentMap.hexes[tile].q === hex.q && currentMap.hexes[tile].r === hex.r ) {
                                    tileType = "map";
                                }
                            })
                        }
                        
                        if (tileType === "bg") {
                            return ( <BackgroundHexTile key={hex.key} hex={hex} /> );
                        }
                        
                        else if (tileType === "map") {
                            return (<HexTile key={hex.key} hex={hex} />);
                        }

                    })
                    }
                </SVGContainer>
                </MapContainer>
            }
        </Wrapper>
    );
}

export default Editor;



const Wrapper = styled.div` 
width: 100%
`;


const SVGContainer = styled.svg`
width: 100%;
height: 100%;
`;

const MapContainer = styled.div` 
    margin: 0;
	padding: 0;
	text-align: center;
	font-family: sans-serif;
	font-size: 10pt;
    // border: 5px solid black;
    height: 100vh;
`;