"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = process.env.PORT || 8000;
const app = express();

//handlers

const { submitMap } = require("./handlers/submitMap");
const { getMapByID } = require("./handlers/getMapByID");
const { deleteMap } = require("./handlers/deleteMap");
const { getMapList } = require("./handlers/getMapList");
const {updateMap} = require("./handlers/updateMap");




app.use(morgan("tiny"));
app.use(express.json());


/// endpoints TODO
// 1. get list of IDs/saved maps
// 2. get map data by ID DONE
// 3. save new map DONE
// 4. update existing map
// 5. delete map DONE

app.get("/getMapList", getMapList)

app.post("/submitMap", submitMap )

app.put("/updateMap", updateMap )

app.get("/getMapByID/:_id", getMapByID)

app.delete("/deleteMap/:_id", deleteMap)

app.get("*", (req, res) => {
    res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
    });
});

  // Node spins up our server and sets it to listen on port 8000.
app.listen(8000, () => console.log(`Listening on port 8000`));