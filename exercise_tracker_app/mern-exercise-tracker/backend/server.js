const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ensure ATLAS_URI is properly loaded
const uri = process.env.ATLAS_URI;
if (!uri) {
    console.error("❌ MongoDB connection string is missing from .env file");
    process.exit(1);
}

// Connect to MongoDB with error handling
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tlsAllowInvalidCertificates: true, // Bypass SSL certificate issues
})
.then(() => console.log("✅ MongoDB database connection established successfully"))
.catch(err => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Exit process on failure
});

// Import routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`🚀 Server is running on port: ${port}`);
});
