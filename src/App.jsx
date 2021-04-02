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
