import { useState } from "react";

const FindEmployee = () => {
    const [empId, setEmpId] = useState("");
    const [empData, setEmpData] = useState(null);

    const fetchEmpData = async () => {
        console.log("Clickes");
        try {
            const response = await fetch(
                `http://localhost:8000/api/employees/${empId}`
            );
            const data = await response.json();
            setEmpData(data[0]);
        } catch (error) {
            console.log(error);
        }
    };

    console.log(empData);

    return (
        <div>
            <h1>Find Employee based on Id</h1>

            <input type="number" onChange={(e) => setEmpId(e.target.value)} />
            <button onClick={fetchEmpData}>Find</button>

            {empData && (
                <>
                    <h2>Employee Details</h2>
                    <p>Name: {empData.name}</p>
                    <p>Employee Code: {empData.employee_code}</p>
                    <p>Salary: {empData.salary}</p>
                </>
            )}
        </div>
    );
};

export default FindEmployee;
