"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const getMapByID = async (req, res) => {

    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db();

    console.log(req.params);

    const _id = (req.params._id);

    try {
        const map = await db.collection("maps").findOne({ _id });
        map
          ? res.status(200).json({ data: map })
          : res.status(404).json({ status: 404, message: "Not Found" });
        client.close();
      } catch (err) {
        console.log(err.stack);
        res.status(500).json({ status: 500, message: err.message });
      }
    client.close();


}

module.exports = {
    getMapByID,
};