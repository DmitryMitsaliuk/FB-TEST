import { React } from "react";
import "./App.css";
import { EmployeeStatusCard } from "./EmployeeCard/EmployeeStatusCard";
import { EmployeeStatusProvider, useEmployeeStatus } from "./EmployeesContext";

const EmployeeList = () => {
  const { employees } = useEmployeeStatus();

  return (
    <>
      {employees.map((employee, i) => {
        return (
          <div className="employee-container" key={i}>
            <h3>{`${employee.name.first} ${employee.name.last}`}</h3>
            <div className="employee-avatar-container">
              <img
                src={employee.picture.thumbnail}
                alt="Employee avatar thumbnail"
                width={70}
                height={70}
              />
              <div className="employee-avatar-information-container">
                <span>{employee.email}</span>
                <span>{employee.location.country}</span>
                <span>{employee.phone}</span>
              </div>
            </div>
            <EmployeeStatusCard
              status={employee.status}
              id={employee.id.value}
            />
          </div>
        );
      })}
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <EmployeeStatusProvider>
        <EmployeeList />
      </EmployeeStatusProvider>
    </div>
  );
};

export default App;

// The employee have four different states including the following
// - ADDED
// - IN-CHECK
// - APPROVED
// - ACTIVE
// - INACTIVE

// Your task is to build a frontend application using React including the following features.

// - A simple UI listing the employees
//   The application need to use an API endpoint to retrieve the employee's list, Unfortunately the API endpoint isn't developed yet, We recommend using a tool to mock your API with the following specification :
//   - GET /employees/
//   - POST /employees/
//   - PATCH /employees/{employee_id}

// - In Every employee row, there should be a component as per the provided picture which will be used to display the current state of this employee and by clicking on another state e.g. APPROVED , it should persist that change to this given employee.
