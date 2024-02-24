import { useState } from "react";

const DeleteEmployee = () => {
    const [empId, setEmpId] = useState("");
    const [message, setMessage] = useState("");

    const deleteEmp = async () => {
        try {
            const response = await fetch(
                `http://localhost:8000/api/employees/${empId}`,
                { method: "DELETE" }
            );
            if (response.status === 200) {
                setMessage("Employee deleted successfully");
            } else {
                setMessage("Failed to delete employee");
            }
        } catch (error) {
            console.log(error);
            setMessage("Failed to delete employee");
        }
    };

    return (
        <div>
            <h1>Delete Employee</h1>
            <input
                type="number"
                placeholder="Enter Id to delete"
                onChange={(e) => setEmpId(e.target.value)}
            />
            <button onClick={deleteEmp}>Delete</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteEmployee;
