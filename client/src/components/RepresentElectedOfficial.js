import React from "react";
import { MapEditorContext } from "../MapEditorContext";



const RepresentElectedOfficial = ({districtName}) => {

    const {districts, representElecteds} = React.useContext(MapEditorContext);

    const districtRep = representElecteds.filter((rep) => {
        return rep["district_name"] === districtName;
    })

    let districtVacant = districtRep.length < 1;





    return (
        <>
        {districtName}
        {!districtVacant &&
        <ul>
        <li>{districtRep[0].name}</li>
        <li>{districtRep[0].party_name}</li>
        </ul>
        }
        </>
        );
}

export default RepresentElectedOfficial;