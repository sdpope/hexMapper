import React from "react";
import { MapEditorContext } from "../MapEditorContext";
import { useHistory } from "react-router-dom";
import { makeWorkingGrid } from "./editor/utilities";


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
        <>Manage Maps here.
            <ul>
                {mapList !== null &&
                    mapList.map((map) => {
                        return (
                            <li key={map._id}>{map.name} {map.legislature.name}
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
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default ManageMaps;