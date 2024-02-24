import EmployeeList from "./components/employeeList";
import FindEmployee from "./components/findEmployee";
import DeleteEmployee from "./components/deleteEmployee";
import "./App.css";
import AddEmployee from "./components/addEmployee";
import EditEmployee from "./components/editEmployee";

function App() {
    return (
        <div className="App">
            <EmployeeList />
            <FindEmployee />
            <DeleteEmployee />
            <AddEmployee />
            <EditEmployee />
        </div>
    );
}

export default App;
