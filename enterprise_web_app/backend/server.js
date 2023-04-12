const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

// Database stuff
// Create a new MongoClient
const client = new MongoClient(url);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
    console.log('Start the database stuff');
    //Write databse Insert/Update/Query code here..
    console.log('End the database stuff');

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
