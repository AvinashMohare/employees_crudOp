import React, { useState } from "react";

const EditEmployee = () => {
    const [employeeId, setEmployeeId] = useState("");
    const [name, setName] = useState("");
    const [employeeCode, setEmployeeCode] = useState("");
    const [salary, setSalary] = useState("");
    const [message, setMessage] = useState("");

    const fetchEmployeeDetails = async () => {
        try {
            const response = await fetch(
                `http://localhost:8000/api/employees/${employeeId}`
            );
            const data = await response.json();
            console.log(data);
            setName(data[0].name);
            setEmployeeCode(data[0].employee_code);
            setSalary(data[0].salary);
            setMessage("");
        } catch (error) {
            console.error("Error fetching employee details:", error);
            setMessage("Failed to fetch employee details");
        }
    };

    const updateEmployee = async () => {
        try {
            const response = await fetch(
                `http://localhost:8000/api/employees/${employeeId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        employee_code: employeeCode,
                        salary,
                    }),
                }
            );
            if (response.status === 200) {
                setMessage("Employee updated successfully");
            } else {
                setMessage("Failed to update employee");
            }
        } catch (error) {
            console.error("Error updating employee:", error);
            setMessage("Failed to update employee");
        }
    };

    return (
        <div>
            <h1>Edit Employee</h1>
            <label htmlFor="employeeId">Enter Employee ID:</label>
            <input
                type="text"
                id="employeeId"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
            />
            <button onClick={fetchEmployeeDetails}>Fetch Details</button>
            <br />
            {name && (
                <>
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
                    <button onClick={updateEmployee}>Update Employee</button>
                    {message && <p>{message}</p>}
                </>
            )}
        </div>
    );
};

export default EditEmployee;
