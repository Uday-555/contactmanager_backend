const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnections");
const errorHandler = require("./middleware/errorHandler");

connectDb();
const app = express();

PORT = process.env.port || 5000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactsroutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});

