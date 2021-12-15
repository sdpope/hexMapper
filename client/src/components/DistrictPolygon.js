import React from "react";
import { GoogleMap, useJsApiLoader, Polygon, Data } from '@react-google-maps/api';
import { boundaryToPolygon } from "./editor/utilities";
import { randomUUID } from "crypto";
import { MapEditorContext } from "../MapEditorContext";


const DistrictPolygon = ({districtShape, districtName, }) => {


    const {districts, representElecteds, colourRules, partyByDistrict } = React.useContext(MapEditorContext);
     // first we find the rep:

    let fillColour = "green";

    if (partyByDistrict !== null) {
        colourRules.forEach((party) => {
            if (party.name === partyByDistrict[districtName]) {
                fillColour = party.colour;
                //console.log(party.name, districtName, party.colour)
            }
        }) 
    }
    

    if (fillColour === "green") {
        //console.log(districtName, partyByDistrict[districtName]);
    }

    const onClickHandler = (event) => {
        console.log(districtName);
    }

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
                        fillOpacity: 0.4,
                        strokeColor: fillColour,
                        strokeOpacity: 0.8,
                        strokeWeight: 1
        }} />
                );
            })}
        </>
    );
}

export default DistrictPolygon;