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

    const [colourRules, setColourRules] = React.useState(null); //maybe add some defaults

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


            


            }} >
            {children}
        </MapEditorContext.Provider>
    );
};