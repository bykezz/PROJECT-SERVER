import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from "../config/firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const sampleData = [
  { name: "Alice", age: 25, bloodGroup: "A" },
  { name: "Bob", age: 30, bloodGroup: "B" },
  { name: "Charlie", age: 22, bloodGroup: "AB" },
  { name: "David", age: 35, bloodGroup: "O" },
  { name: "Eve", age: 28, bloodGroup: "A" },
  { name: "Frank", age: 40, bloodGroup: "B" },
  { name: "Grace", age: 18, bloodGroup: "AB" },
  { name: "Hank", age: 50, bloodGroup: "O" },
  { name: "Ivy", age: 27, bloodGroup: "A" },
  { name: "Jack", age: 32, bloodGroup: "B" },
  { name: "Kate", age: 24, bloodGroup: "AB" },
  { name: "Leo", age: 29, bloodGroup: "O" },
  { name: "Mia", age: 21, bloodGroup: "A" },
  { name: "Noah", age: 34, bloodGroup: "B" },
  { name: "Olivia", age: 26, bloodGroup: "AB" },
  { name: "Paul", age: 33, bloodGroup: "O" },
  { name: "Quinn", age: 20, bloodGroup: "A" },
  { name: "Ryan", age: 45, bloodGroup: "B" },
  { name: "Sophia", age: 23, bloodGroup: "AB" },
  { name: "Tom", age: 31, bloodGroup: "O" },
];

export const populateFirestore = async () => {
  for (const person of sampleData) {
    try {
      await addDoc(collection(db, "people"), person);
      console.log(`Added: ${person.name}`);
    } catch (error) {
      console.error(`Error adding ${person.name}: `, error);
    }
  }
};
