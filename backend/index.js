const express = require("express");
const cors = require("cors");
const app = express();
require("express-async-errors");

const db = require("./db");
const bodyParser = require("body-parser");
employeeRoutes = require("./controllers/employee.controller");

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use("/api/employees", employeeRoutes);

// Error Handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send("Something went wrong");
});

db.query("SELECT 1")
    .then(() => {
        console.log("DB connection succeeded");
        app.listen(8000, () => {
            console.log("Server started at port 8000");
        });
    })
    .catch((err) => console.log(`DB connection failed ${err}`));
