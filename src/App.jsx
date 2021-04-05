import { React } from "react";
import "./App.css";
import { EmployeeStatusCard } from "./EmployeeCard/EmployeeStatusCard";
import { EmployeeDescription } from "./EmployeeDescription/EmployeeDescription";
import { EmployeeStatusProvider, useEmployeeStatus } from "./EmployeesContext";

const EmployeeList = () => {
  const { employees } = useEmployeeStatus();
  
  return (
    <>
      {employees.map((employee, i) => {
        return (
          <div className="employee-container" key={i}>
            <EmployeeDescription
              firstName={employee.name.first}
              lastName={employee.name.last}
              avatar={employee.picture.thumbnail}
              email={employee.email}
              country={employee.location.country}
              phone={employee.phone}
              nat={employee.nat}
            />
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
