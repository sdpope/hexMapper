import React from "react";

export const MapEditorContext = React.createContext(null);

export const MapEditorProvider = ({children}) => {

    const [selectedHex, setSelectedHex] = React.useState(null);
    const [hoverHex, setHoverHex] = React.useState(null);
    const [currentMap, setCurrentMap] = React.useState(null);
    const [editorMode, setEditorMode] = React.useState(null);
    const [cursorCoordinates, setCursorCoordinates] = React.useState(null);
    const [workingArray, setWorkingArray] = React.useState([]);

    return (
        <MapEditorContext.Provider 
        value={{selectedHex, setSelectedHex,
            hoverHex, setHoverHex,
            currentMap, setCurrentMap,
            editorMode, setEditorMode,
            cursorCoordinates, setCursorCoordinates,
            workingArray, setWorkingArray }} >
            {children}
        </MapEditorContext.Provider>
    );
};