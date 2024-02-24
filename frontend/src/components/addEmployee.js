import React, { useState } from "react";

const AddEmployee = () => {
    const [name, setName] = useState("");
    const [employeeCode, setEmployeeCode] = useState("");
    const [salary, setSalary] = useState("");
    const [message, setMessage] = useState("");

    const addEmployee = async () => {
        try {
            const response = await fetch(
                "http://localhost:8000/api/employees",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        employee_code: employeeCode,
                        salary: salary,
                    }),
                }
            );
            if (response.status === 201) {
                setMessage("Employee added successfully");
                setName("");
                setEmployeeCode("");
                setSalary("");
            } else {
                setMessage("Failed to add employee");
            }
        } catch (error) {
            console.error("Error adding employee:", error);
            setMessage("Failed to add employee");
        }
    };

    return (
        <div>
            <h1>Add Employee</h1>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="employeeCode">Employee Code:</label>
            <input
                type="text"
                id="employeeCode"
                value={employeeCode}
                onChange={(e) => setEmployeeCode(e.target.value)}
            />
            <label htmlFor="salary">Salary:</label>
            <input
                type="text"
                id="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            />
            <button onClick={addEmployee}>Add Employee</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddEmployee;
