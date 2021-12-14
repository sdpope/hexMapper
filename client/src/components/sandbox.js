import React from "react";
import {renderHexJSON, getGridForHexJSON} from "d3-hexjson";
import styled from "styled-components";
import { exampleJSON } from "./example";
import HexTile from "./editor/HexTile";
import BackgroundHexTile from "./editor/BackgroundHexTile";
import { MapEditorContext } from "../MapEditorContext";

const Sandbox = () => {
    
    const {currentMap, setCurrentMap} = React.useContext(MapEditorContext);


    const makeWorkingGrid = (width, height) => {
        const hex = {
            "layout":"odd-r",
            "hexes": {
                "Q0R0":{"q":0,"r":0},
                "Q0R1":{"q":width,"r":height},
            }
        }
        const grid = getGridForHexJSON(hex);
        const output = renderHexJSON(grid, 800, 800);

        return output;
    }

    const exampleJSON2 = {
        "layout":"odd-r",
        "hexes": {
            "Q0R0":{"q":0,"r":0},
            "Q1R1":{"q":1,"r":1},
            "Q1R2":{"q":1,"r":2},
            "Q2R3":{"q":2,"r":3}
        }
    };

    const exampleJSON3 = {
        "layout":"odd-r",
        "hexes": {
            "Q0R0":{"q":0,"r":0},
            "Q1R1":{"q":20,"r":20},

        }
    };
    
    const testHandler = () => {
        console.log("test handler!");
    }

    let example2 = renderHexJSON(exampleJSON2, 800, 800);
    let grid = getGridForHexJSON(exampleJSON3);
    let gridHexes = renderHexJSON(grid, 800, 800);

    let gridHexes2 = makeWorkingGrid(40,40);
    //console.log(gridHexes);
    //console.log(makeWorkingGrid(20,20));




    return (
        <Wrapper>
            <MapContainer id="MapContainer" >
                <SVGContainer  >
                    {gridHexes2 !== null &&
                    gridHexes2.map((hex) => {
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
            <button onClick={testHandler} >Make stuff happen</button>
        </Wrapper>
    )
}







export default Sandbox;

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
    border: 5px solid black;
    height: 100vh;
`;