import React from "react";
import { useEmployeeStatus } from "../EmployeesContext";
import { EMPLOYEE_STATUSES } from "../constants/constants";
import "./EmployeeStatusCard.css";

export const EmployeeStatusCard = ({ status, id }) => {
  const { employees, setEmployees } = useEmployeeStatus();

  const updateEmployeeStatus = (employeeStatus, id) => {
    let newEmployees = [...employees];
    newEmployees = newEmployees.find((employee) => employee.id.value === id);
    newEmployees.status = employeeStatus;
    employees.forEach((employee) => {
      if (employee.id.value === id) employee = newEmployees;
    });
    const updatedEmployees = [...employees];
    setEmployees(updatedEmployees);
  };

  return (
    <>
      <ul className="step-menu">
        {EMPLOYEE_STATUSES.map((employeeStatus, i) => {
          return (
            <li
              key={i}
              role="button"
              className={employeeStatus === status ? "current" : ""}
              onClick={() => {
                updateEmployeeStatus(employeeStatus, id);
              }}
            >
              {employeeStatus}
            </li>
          );
        })}
      </ul>
    </>
  );
};
