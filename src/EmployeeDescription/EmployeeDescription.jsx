import React from "react";
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import "./EmployeeDescription.css"

export const EmployeeDescription = ({firstName, lastName, avatar, email, country, phone, nat}) => {
    return (
        <>
            <h3>{`${firstName} ${lastName}`}</h3>
            <div className="employee-avatar-container">
              <img
                src={avatar}
                alt="Employee avatar thumbnail"
              />
              <div className="employee-avatar-information-container">
                <span>Email: <a href={`mailto:${email}`}>{email}</a></span> 
                <span>Location: {country}{getUnicodeFlagIcon(nat)}</span>
                <span>Phone: <a href={`tel:${phone}`}>{phone}</a></span>
              </div>
            </div>
        </>
    )
};
