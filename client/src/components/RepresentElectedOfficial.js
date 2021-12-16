import React from "react";
import { MapEditorContext } from "../MapEditorContext";
import styled from "styled-components";



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
        <List>
        <Item>{districtRep[0].name}</Item>
        <Item>{districtRep[0].party_name}</Item>
        </List>
        }
        </>
        );
}

export default RepresentElectedOfficial;

const List = styled.ul` 
margin-top: 1em;


`;

const Item = styled.li` 

list-style: none;

`;