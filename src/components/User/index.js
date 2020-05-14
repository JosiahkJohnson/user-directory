import React from "react";

export function User(props) {
return (
    <ul>
        <li className = "list-group-item">Username: {props.userName}</li>
        <li className = "list-group-item">First Name: {props.firstName}</li>
        <li className = "list-group-item">Last Name: {props.LastName}</li>
        <li className = "list-group-item">Phone #: {props.phone}</li>
        <li className = "list-group-item">Email Address: {props.email}</li>
        <br/>
    </ul>);
};