import React from "react";
import * as d3 from "d3";
import { renderHexJSON, getGridForHexJSON, getBoundaryDotsForHexJSON, getBoundarySegmentsForHexJSON } from "d3-hexjson";

import styled from "styled-components";

import example from "./example.hexjson";

const Sandbox = () => {
    console.log(example);

    //console.log(d3.json);
    const divRef = React.useRef(null);
    const svgRef = React.useRef(null);
    const testDivRef = React.useRef(null);

    const testHandler = async () => {
        console.log("test handler!");
        
    }

    React.useEffect( () => {
        console.log("nothing!");
        d3.select("#MapContainer")
            .attr("width", "800px")
        
    }, []);



    return (
        <div>
            <MapContainer ref={divRef} id="MapContainer" >
                <p>testing!</p>
                <svg ref={svgRef}> </svg>
            </MapContainer>
            <div ref={testDivRef}> </div>
            <button onClick={testHandler} >Make stuff happen</button>
        </div>
    )
}

export default Sandbox;

const MapContainer = styled.div` 
    margin: 0;
	padding: 0;
	text-align: center;
	font-family: sans-serif;
	font-size: 10pt;
    border: 5px solid black;
`;