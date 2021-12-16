import React from "react";
import { MapEditorContext } from "../MapEditorContext";
import Editor from "./editor/Editor";
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