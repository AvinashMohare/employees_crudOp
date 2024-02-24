const express = require("express");
router = express.Router();

const db = require("../db");

const service = require("../services/employee.service");

//Retrieve all the employees
router.get("/", async (req, res) => {
    const employees = await service.getAllEmployees();
    res.send(employees);
});

//Retrieve the employee based on Id
router.get("/:id", async (req, res) => {
    const employee = await service.getEmployeeById(req.params.id);

    if (employee.length == 0) {
        res.status(404).json(
            "no record found with given id : " + req.params.id
        );
    } else {
        res.send(employee);
    }
});

//Delete the employee based on Id
router.delete("/:id", async (req, res) => {
    const affectedRows = await service.deleteEmployee(req.params.id);

    if (affectedRows == 0) {
        res.status(404).json(
            "no record found with given id : " + req.params.id
        );
    } else {
        res.send("Deleted Successfully");
    }
});

//Add or Edit the employee based on Id using stored procedure
router.post("/", async (req, res) => {
    await service.addOrEditEmployee(req.body);
    res.status(201).send("User Created Successfully");
});

router.put("/:id", async (req, res) => {
    const affectedRows = await service.addOrEditEmployee(
        req.body,
        req.params.id
    );
    if (affectedRows == 0) {
        res.status(404).json(
            "no record found with given id : " + req.params.id
        );
    } else {
        res.send("Updated Successfully");
    }
});

module.exports = router;
