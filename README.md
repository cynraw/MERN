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

### Read Operations
Read operations retrieve documents from a collection; i.e. query a collection for documents. MongoDB provides the following methods to read documents from a collection:

db.collection.find()

You can specify query filters or criteria that identify the documents to return.

### Comparison Query Operators
Name
Description
$eq - Matches values that are equal to a specified value.

$gt - Matches values that are greater than a specified value.

$gte - Matches values that are greater than or equal to a specified value.

$in - Matches any of the values specified in an array.

$lt - Matches values that are less than a specified value.

$lte - Matches values that are less than or equal to a specified value.

$ne - Matches all values that are not equal to a specified value.

$nin - Matches none of the values specified in an array.


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

# ExpressJs
Is a framework of NodeJs, and NodeJs is a javascript run time environment but nodejs does not support request handling functions, HTTP methods or serving files so this is where ExpressJs comes in.
ExpressJs is a light weight framework that gives node js functionality and makes node js easier.
Designed to build apis, and web apllication and cross-platform mobile apps
Unopinionated
Used as server side scripting language.

## Http request type
GET - used to request data from the server but mainly this method is used to read data./Requests data from the server (e.g., loading a webpage).

PUT - used to update the data or change/replace it.

POST - used to create new or to edit already existing data./ Sends data to the server (e.g., submitting a form).

DELETE - used to delete the data completely from the server.

## Understanding the Request-Response Cycle
When a client (browser or mobile app) sends a request to a server:

The client makes an HTTP request (e.g., GET, POST).

The server receives and processes the request.

The server sends back a response (e.g., HTML, JSON, or errors).


## REST API
Representational State Transfer - is an architecture used to create web services.
Application programming Interface(API) - is a code which allows two sw programs to communicate with each other.
REST API - is a sw that allows two applications to communicate with each other with the help of the internet and other devices. It is a standard way to send and receive data for web services. Is flexible and can handle various types of call.

### Best Practices for Building REST APIs

- Use Proper HTTP Methods - Ensure that GET, POST, PUT, and DELETE are used appropriately.

- Use Meaningful Status Codes - Return 200 OK for success, 404 Not Found for missing resources, and 400 Bad Request for incorrect input.

- Implement Request Validation - Validate incoming data before processing requests.

- Use Middleware for Authentication & Security - Protect endpoints using authentication middleware like JWT.

- Paginate Large Responses - If a database query returns large amounts of data, implement pagination.

## Basic routing
Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

app.METHOD(PATH, HANDLER)
Where:

app is an instance of express.

METHOD is an HTTP request method, in lowercase.

PATH is a path on the server.

HANDLER is the function executed when the route is matched.

## Types of Routing in Express.js

Static Routes - Predefined endpoints that always return the same response.

Dynamic Routes - Endpoints that accept variables as part of the URL.

RESTful Routes - Follow REST principles for API design, supporting CRUD operations.

Middleware-based Routing - Uses middleware functions to execute logic before handling the request. 

## Serving static files in Express
To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

The function signature is:

express.static(root, [options])

The root argument specifies the root directory from which to serve static assets. 

For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:

app.use(express.static('public'))

To use multiple static assets directories, call the express.static middleware function multiple times:

- app.use(express.static('public'))
- app.use(express.static('files'))

Express looks up the files in the order in which you set the static directories with the express.static middleware function.


## ExpressJs Assignment 
#### Step 1: Create Routes

Routes define how your application responds to client requests. We'll create two route files: userRoutes.js and productRoutes.js.

Routes act as the entry points for your API. They map HTTP methods (GET, POST, PUT, DELETE) to specific controller functions.

We'll use Express's Router to modularize routes for better organization.

#### Step 2: Implement Middleware

Middleware functions are used to process requests before they reach the route handlers. We'll create a custom middleware to log request details.

Middleware is useful for tasks like logging, authentication, and error handling.

We'll create a logger.js middleware to log the request method, URL, and timestamp.


#### Step 3: Develop Controllers

Controllers contain the business logic for handling requests and sending responses.

Controllers are responsible for processing data and returning appropriate responses.

We'll create separate controllers for users and products.

#### Step 4: Environment Variables

Use dotenv to manage environment variables like the server port.

Environment variables keep sensitive or configurable data out of your codebase.

Use the .env file to store variables like PORT.

#### Step 5: Error Handling
Implement a global error-handling middleware to catch and respond to errors.

Errors can occur anywhere in your application.

A global error handler ensures consistent error responses.


# REACTJS
- React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance.
- A component can be as small as a button, or as large as an entire page.
  




