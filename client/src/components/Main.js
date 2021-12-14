import React from "react";
import { MapEditorContext } from "../MapEditorContext";
import GetStarted from "./GetStarted";
import Editor from "./editor/Editor";
const Main = () => {


    const {workingGrid} = React.useContext(MapEditorContext);

    return (
        <>
        {workingGrid === null &&
                <GetStarted />
        }
        {
            workingGrid !== null &&
            <>
                <Editor />
            </>
        }
        </>
    );
}

export default Main;