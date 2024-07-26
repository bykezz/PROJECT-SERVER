import { populateFirestore } from "./models/populate.js";

const start = async () => {
  console.log("Starting to populate Firestore...");
  await populateFirestore();
  console.log("Finished populating Firestore.");
};

start();
