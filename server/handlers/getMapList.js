"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const getMapList = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db();
    
    const allMaps = await db.collection("maps").find({}).toArray();

    //console.log(allMaps);
    
    let mapList = [];

    allMaps.forEach((map) => {
        mapList.push({_id: map._id, name: map.name, legislature: map.legislature});
    })

    client.close();

    res.status(200).json({
        data: mapList
    })

}

module.exports = {getMapList};