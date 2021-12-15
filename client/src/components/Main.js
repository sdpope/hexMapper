import React from "react";
import { MapEditorContext } from "../MapEditorContext";
import GetStarted from "./GetStarted";
import Editor from "./editor/Editor";
import NavBar from "./NavBar";
import Setup from "./Setup";

const Main = () => {


    const {workingGrid} = React.useContext(MapEditorContext);

    return (
        <>
        {workingGrid === null &&
                <Setup />
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