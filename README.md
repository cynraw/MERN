# MERN
Everything 🔐 MongoDB, 🏢 Express.js, 🔦 React, and 🤖 Node.js

## MongoDB
NoSQL database that stores data in the form of documents rather than tables, making it more flexible and scalable than traditional SQL-based relational databases. Unlike relational databases that use rows and columns, MongoDB organizes data into collections of documents that use BSON (Binary JSON) format.

### Key Characteristics of MongoDB:

Schema-less: No predefined structure, allowing for more flexibility.

Scalable: Can handle large amounts of data efficiently.

High Performance: Optimized for fast reads and writes.

Distributed System: Supports replication and horizontal scaling.

### MORE
MongoDB is a NoSQL database that organizes data in a flexible, semi-structured format. Here's how it works:

Databases and Collections: MongoDB stores data in databases. Each database contains collections, which are analogous to tables in relational databases. However, collections are schema-less, meaning they don't require predefined structure.

Documents: Collections consist of documents. Each document is a JSON-like data structure composed of field and value pairs. Documents are the basic units of data in MongoDB.

BSON Format: Internally, MongoDB stores documents in the Binary JSON (BSON) format. BSON extends the JSON format to support more data types, such as dates and binary data. BSON is also optimized for speed and space efficiency, which enhances database performance.

Embedded Documents: Unlike relational databases, MongoDB supports embedded documents. This means you can nest documents within other documents, allowing for a more flexible and hierarchical data structure.

Example:

{
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Metropolis"
    },
    hobbies: ["reading", "cycling", "hiking"]
}

In this example, the document represents a person named Alice with fields for her name, age, address (embedded document), and hobbies (array of strings). This document would be stored in a collection, such as "users," within a MongoDB database.

MongoDB's flexibility and BSON format make it an excellent choice for applications that need to handle complex, hierarchical data structures and require high performance.


