# MERN
Everything 🔐 MongoDB, 🏢 Express.js, 🔦 React, and 🤖 Node.js

# MongoDB
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
### Create Operations
Create or insert operations add new documents to a collection. If the collection does not currently exist, insert operations will create the collection.

MongoDB provides the following methods to insert documents into a collection:

db.collection.insertOne()

db.collection.insertMany()

In MongoDB, insert operations target a single collection. All write operations in MongoDB are atomic on the level of a single document.
### Data Modeling
Process of structuring data in a way that optimizes storage, retrieval, and scalability. Since MongoDB is schema-less, developers have the flexibility to design the database structure based on application needs.

MongoDB provides two main approaches for structuring data:

Embedding (Denormalization) - storing related data within a single document. This approach provides a more hierarchical and nested data structure. leads to Faster read operations since all related data is in a single document, Atomic Operations- All related data is stored together, making updates atomic and consistent. Although can result in large documents.

Referencing (Normalization) - storing related data in separate documents and linking them through references. This approach keeps data more modular and relational. leads Easier to manage and scale since data is stored separately, Reduced Redundancy- Avoids duplication of data, especially if the same referenced data is used in multiple documents. Although leads to Slower read operations due to the need for multiple queries to fetch related data, and Requires handling relationships between documents, which can be more complex to manage.

### Aggregation and Advanced Queries
Aggregation is the process of transforming and analyzing data by applying multiple operations in a pipeline. Instead of retrieving raw data, aggregation allows for complex computations such as summation, filtering, and grouping.


The aggregation framework processes data through a series of pipeline stages, each stage performing a specific operation. Here are some of the most commonly used stages:

$match: Filters documents based on a condition.

$group: Groups documents by a specified field and performs aggregations.

$project: Selects and reshapes fields to include in the output documents.

$sort: Sorts documents based on a specified field.

$limit: Limits the number of documents passed to the next stage.

$skip: Skips a specified number of documents.

$unwind: Deconstructs an array field from the input documents.

$lookup: Performs a left outer join with another collection.



