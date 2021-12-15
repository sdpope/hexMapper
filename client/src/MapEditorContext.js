import React from "react";

export const MapEditorContext = React.createContext(null);

export const MapEditorProvider = ({children}) => {

    // blank map for initializing "currentMap" state
    const blankMap = {
        "layout":"odd-r",
        "hexes": {
        }
    };

    const [selectedHex, setSelectedHex] = React.useState(null);
    const [workingGrid, setWorkingGrid] = React.useState(null); // the hexjson background grid for editing
    const [currentMap, setCurrentMap] = React.useState(blankMap); // a full json object
    const [editorStatus, setEditorStatus] = React.useState('idle');
    const [mapSettings, setMapSettings] = React.useState(null);
    const [editorMode, setEditorMode] = React.useState(null);
    const [editorPanel, setEditorPanel] = React.useState(null);
    
    const [legislature, setLegislature] = React.useState(null);
    const [districts, setDistricts] = React.useState(null);
    const [representElecteds, setRepresentElecteds] = React.useState(null);
    const [districtsGeo, setDistrictsGeo] = React.useState(null);
    const [partyByDistrict, setPartyByDistrict] = React.useState(null);
    const [repByDistrict, setRepByDistrict] = React.useState(null);


    const [currentMapUUID, setCurrentMapUUID] = React.useState(null);
    const [currentMapTitle, setCurrentMapTitle] = React.useState("Untitled");

    
    const [colourRules, setColourRules] = React.useState(null); //maybe add some defaults



    const legislatures = [
      {name: "Quebec",
      districts: "quebec-electoral-districts-2017",
      electeds: "quebec-assemblee-nationale"
      },
      {name: "Newfoundland and Labrador",
      districts: "newfoundland-and-labrador-electoral-districts",
      electeds: "newfoundland-labrador-legislature"
      }

  ];

  React.useEffect(() => {
      //console.log("on mount");
      if (legislature !== null) {

      // first we fetch the districts

      //console.log(legislature.districts);
      fetch(`http://represent.opennorth.ca/boundaries/${legislature.districts}/?limit=400`)
      .then((res) => {return res.json(); })
      .then((res) => {
          //console.log(res.meta.total_count);
          //console.log(res);
          setDistricts(res.objects);
          });

      const testElecteds = legislature.electeds;
      console.log("legislature.electeds:", legislature.electeds);
      
      // then we fetch the electeds;
      //console.log(legislature.electeds);
      fetch(`http://represent.opennorth.ca/representatives/${testElecteds}/?limit=400`)
      .then((res) => {return res.json(); })
      .then((res) => {
          //console.log(res.meta.total_count);
          //console.log(res);
          setRepresentElecteds(res.objects);
          });
      

      }
  
  }, [legislature] );

    React.useEffect(() => {
        // this is where we get the geoJSON from the api 
        // and process it into the form we need to render it onto google maps
        
        let rawGeoJSON = null;
        if (districtsGeo !== null) {
          //console.log(districtsGeo[0]);
        }
      
        //console.log("logging districtsGeo", districtsGeo);
    
        console.log ("Getting shape file geojson");
        if (districtsGeo === null && legislature !== null) {
          fetch(`https://represent.opennorth.ca/boundaries/${legislature.districts}/simple_shape`)
        .then((res) => {return res.json();})
        .then((res) => {
          //console.log(res);
          rawGeoJSON = res.objects;
          console.log(rawGeoJSON);
          setDistrictsGeo(rawGeoJSON);
        });
        }
        
    
      
    
      }, [districtsGeo, legislature]);


      React.useEffect(() => {

        let newPartyByDistrict = {};

        if (districts !== null && representElecteds !== null) {
          districts.forEach((district) => {
            representElecteds.forEach((elected) => {
              if (district["url"] === elected["related"]["boundary_url"]) {
                newPartyByDistrict[district["name"]] = elected["party_name"];
              }
            })
          })
        }
        console.log("partyByDistrict", newPartyByDistrict);
        console.log(Object.keys(newPartyByDistrict).length);
        console.log(districts);
        console.log(representElecteds);
        console.log(newPartyByDistrict);
        setPartyByDistrict(newPartyByDistrict);


      }, [districts, representElecteds, legislature]);


    return (
        <MapEditorContext.Provider 
        value={{selectedHex, setSelectedHex,
            workingGrid, setWorkingGrid,
            currentMap, setCurrentMap,
            mapSettings, setMapSettings,
            editorStatus, setEditorStatus,
            editorMode, setEditorMode,
            editorPanel, setEditorPanel,
            representElecteds, setRepresentElecteds,
            districts, setDistricts,
            legislature, setLegislature,
            colourRules, setColourRules,
            currentMapUUID, setCurrentMapUUID,
            currentMapTitle, setCurrentMapTitle,
            districtsGeo, setDistrictsGeo,
            partyByDistrict, setPartyByDistrict,


            


            }} >
            {children}
        </MapEditorContext.Provider>
    );
};