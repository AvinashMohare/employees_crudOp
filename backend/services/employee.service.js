const db = require("../db");

//returns all the employees
module.exports.getAllEmployees = async () => {
    const [records] = await db.query("SELECT * FROM employees");
    return records;
};

//retrieve employee based on id
module.exports.getEmployeeById = async (id) => {
    const [record] = await db.query("SELECT * FROM employees WHERE id = ?", [
        id,
    ]);
    return record;
};

//delete employee based on id
module.exports.deleteEmployee = async (id) => {
    const [{ affectedRows }] = await db.query(
        "DELETE FROM employees WHERE id = ?",
        [id]
    );
    return affectedRows;
};

//add or edit employee
module.exports.addOrEditEmployee = async (obj, id = 0) => {
    const data = await db.query("CALL usp_employee_add_or_edit(?, ?, ?, ?)", [
        id,
        obj.name,
        obj.employee_code,
        obj.salary,
    ]);
    return data[0][0].affectedRows;
};
