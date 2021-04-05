import React, { useState, useContext, useEffect, createContext } from "react";
import axios from 'axios';

const EmployeeStatusContext = createContext();

export const EmployeeStatusProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/employees").then((response) => {
      const fetchedEmployees = response?.data?.data;
      setEmployees(fetchedEmployees);
    }).catch((err) => console.error(err));
  }, [])

  return (
    <EmployeeStatusContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeStatusContext.Provider>
  );
};

export const useEmployeeStatus = () => {
  return useContext(EmployeeStatusContext);
};
