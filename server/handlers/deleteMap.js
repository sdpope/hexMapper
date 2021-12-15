"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const deleteMap = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db();
    console.log(req.params);
    const _id = (req.params._id);
    let deletedCount = 0;
    try {
        const deleteResult = await db.collection("maps").deleteOne({ _id });
        console.log(deleteResult.deletedCount);
        deletedCount = deleteResult.deletedCount;
    }
    catch (error) { console.log (error.message );}

    
    if (deletedCount > 0) {
        res.status(200).json({
            data: `${_id} deleted.`}
            );

    }
    else {
        res.status(404).json({
            data: "Map not deleted or not found."
        });
    }
    client.close();

};

module.exports = {deleteMap};