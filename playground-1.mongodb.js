/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'moviesDB';
const collection = 'movies';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

// Insert some sample documents into the collection.
db[collection].insertMany([
    { title: "The Matrix", director: "Wachowskis", year: 1999 },
    { title: "Inception", director: "Christopher Nolan", year: 2010 },
    { title: "Interstellar", director: "Christopher Nolan", year: 2014 },
    { title: "Parasite", director: "Bong Joon-ho", year: 2019 }
  ]);

// Find all documents in the collection.
db[collection].find().pretty();

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
