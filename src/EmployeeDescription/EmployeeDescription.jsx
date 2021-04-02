import React from "react";
import "./EmployeeDescription.css"

export const EmployeeDescription = ({firstName, lastName, avatar, email, country, phone}) => {
    return (
        <>
            <h3>{`${firstName} ${lastName}`}</h3>
            <div className="employee-avatar-container">
              <img
                src={avatar}
                alt="Employee avatar thumbnail"
                width={70}
                height={70}
              />
              <div className="employee-avatar-information-container">
                <span>{email}</span>
                <span>{country}</span>
                <span>{phone}</span>
              </div>
            </div>
        </>
    )
};
