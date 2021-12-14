import React from "react";
import MapProperties from "./editor/MapProperties";
import styled from "styled-components";
import RepresentAPI from "./RepresentAPI";

const GetStarted = () => {
    return (
        <>Welcome!
            <MainWrapper>
                <InnnerWrapper>
                    <MapProperties />
                </InnnerWrapper>
                <InnnerWrapper>
                    <RepresentAPI />
                </InnnerWrapper>

            </MainWrapper>
        </>
    );
}

export default GetStarted;

const InnnerWrapper = styled.div` 
width: 50%;
`;

const MainWrapper = styled.div` 
display: flex;
flex-direction: row;
`