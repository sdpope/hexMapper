import React from "react";
import {  Polygon } from '@react-google-maps/api';
import { boundaryToPolygon } from "./editor/utilities";
import { MapEditorContext } from "../MapEditorContext";


const DistrictPolygon = ({districtShape, districtName, }) => {


    const {selectedHex, currentMap, selectedGeoDistrict, setSelectedGeoDistrict, districts, representElecteds, colourRules, partyByDistrict } = React.useContext(MapEditorContext);
     // first we find the rep:

    let fillColour = "white";

    if (partyByDistrict !== null) {
        colourRules.forEach((party) => {
            if (party.name === partyByDistrict[districtName]) {
                fillColour = party.colour;
                //console.log(party.name, districtName, party.colour)
            }
        }) 
    }

    const onClickHandler = (event) => {
        console.log(districtName);
        //setSelectedGeoDistrict(districtName);
    }

    let isSelectedHex = false;

    /* if (selectedHex !== null && currentMap.hexes[selectedHex].hasOwnProperty("district")) {
        if (currentMap.hexes[selectedHex]["district"] === districtName ) {
            isSelectedHex = true;
        }
    } */


    let opacity = 0.4;
    let strokeWeight = 1;


    return (
        <>
            {districtShape.coordinates.map((polygon) => {
                const convertedPolygon = boundaryToPolygon(polygon);
                return (
                    <Polygon
                        onClick={onClickHandler}
                        path={convertedPolygon}
                        options={{
                        fillColor: fillColour,
                        fillOpacity: opacity,
                        strokeColor: fillColour,
                        strokeOpacity: 0.8,
                        strokeWeight: strokeWeight,
        }} />
                );
            })}
        </>
    );
}

export default DistrictPolygon;