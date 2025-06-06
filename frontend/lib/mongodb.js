import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const options = {serverApi: { version: '1' },};

let client;
let clientPromise;

if(!process.env.MONGO_URI) {
    throw new Error("Please add your MongoDB URI to .env.local");
}

client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise;