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
              />
              <div className="employee-avatar-information-container">
                <a href={`mailto:${email}`}>{email}</a>
                <span>{country}</span>
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
            </div>
        </>
    )
};
