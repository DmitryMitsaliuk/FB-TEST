import React, { useState, useContext, useEffect, createContext } from "react";

const EmployeeStatusContext = createContext();

export const EmployeeStatusProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        let fetchedEmployees = data.results;
        fetchedEmployees.forEach((employee) => (employee.status = "ADDED"));
        setEmployees(fetchedEmployees);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <EmployeeStatusContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeStatusContext.Provider>
  );
};

export const useEmployeeStatus = () => {
  return useContext(EmployeeStatusContext);
};
