import React, { useEffect, useState } from "react";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/employees")
            .then((response) => response.json())
            .then((data) => setEmployees(data))
            .catch((error) => console.error("Error:", error));
    }, []);

    // console.log(employees);
    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employees.map((employee) => (
                    
                    <li key={employee.id}>
                        Id : {employee.id}
                        <br />
                        Name: {employee.name}
                        <br />
                        Employee Code: {employee.employee_code}
                        <br />
                        Salary: {employee.salary}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
