"use strict";
const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const submitMap = async (req, res) => {
    console.log(req.body);

    const {name, legislature, colourRules, mapObject } = req.body;

    const _id = uuidv4();

    const newMapForDB = {
        _id: _id,
        name: name,
        legislature: legislature,
        colourRules: colourRules,
        mapObject: mapObject
    }

    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db();
    try {
        await db.collection("maps").insertOne(newMapForDB);
    }
    catch (error) {console.log(error.message); }

    res.status(200).json(_id);

    
    
    client.close();


}

module.exports = {
    submitMap,
};