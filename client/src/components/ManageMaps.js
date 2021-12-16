import React from "react";
import { MapEditorContext } from "../MapEditorContext";
import { useHistory } from "react-router-dom";
import { makeWorkingGrid } from "./editor/utilities";
import styled from "styled-components";


const ManageMaps = () => {


    const {setSelectedHex, setWorkingGrid, setDistrictsGeo, setCurrentMap, setColourRules, setLegislature, setCurrentMapTitle, setCurrentMapUUID} = React.useContext(MapEditorContext);

    const [mapList, setMapList] = React.useState(null);
    const [listNeedsUpdate, setListNeedsUpdate] = React.useState(false);


    let history = useHistory();

    React.useEffect(() => {
        console.log("Mount manage maps");
        fetch("/getMapList")
        .then(res => res.json())
        .then((res) => {
            console.log(res.data);
            setMapList(res.data);
        })

    },[listNeedsUpdate] );


    return (
        <><Header>Saved Maps</Header>
            <ul>
                {mapList !== null &&
                    mapList.map((map) => {
                        return (
                            <MapItem key={map._id}>
                                <MapTitle>{map.name}</MapTitle>
                                <Leg>{map.legislature.name}</Leg>
                                <Buttons>
                                <button
                                onClick={() => {
                                    console.log(map._id);
                                    fetch(`/getMapByID/${map._id}`)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        const newMap = res.data;
                                        setSelectedHex(null);
                                        setDistrictsGeo(null);
                                        setWorkingGrid(makeWorkingGrid(20, 20));
                                        setColourRules(newMap.colourRules);
                                        setLegislature(newMap.legislature);
                                        setCurrentMap(newMap.mapObject);
                                        setCurrentMapTitle(newMap.name);
                                        setCurrentMapUUID(newMap._id);
                                        history.push("/");
                                    })
                                    
                                }}>
                                    Load
                                </button>
                                <button onClick={() => {
                                    fetch(`/deleteMap/${map._id}`, 
                                    { method: "DELETE"})
                                    .then((res) => res.json())
                                    .then((res) => {
                                        console.log(res);
                                        setListNeedsUpdate(!listNeedsUpdate);
                                    })
                                }}>
                                    Delete
                                </button>
                                </Buttons>
                            </MapItem>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default ManageMaps;

const Header = styled.h2`


`;

const MapItem = styled.li` 
display: flex;
justify-content: space-between;
list-style: none;
width: 800px;
`;

const MapTitle = styled.span` 
text-decoration: underline;
`;

const Leg = styled.span` 
font-weight: bold;


`;

const Buttons = styled.div` 

`;
