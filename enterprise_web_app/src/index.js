import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// const { MongoClient } = require("mongodb");
// const url = "mongodb://127.0.0.1:27017";

// const client = new MongoClient(url);
// async function run() {
//   try {
//     await client.connect();
//     await client.db("admin").command({ping: 1});
//     console.log("Connected succesfully to server");
//     console.log("Start the database stuff");
//     console.log("End the database stuff");
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

