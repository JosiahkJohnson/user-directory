//imports
import React from "react";

//out Add function component, will contain a form and submit button to add another user to the directory
function Add(){
    console.log("Add Page loaded");
    return(
        <div>
            {/* Title */}
            <h1 className = "text-primary border-bottom">Add new Users to the directory:</h1>
            
            {/* The Form the user has to work with to add new users */}
            <form>
                <p>Fill in the form below to add a new user to the database.</p>
                <div className="form-group">
                    
                    {/* The username input */}
                    <label htmlFor="userName">Username:</label>
                    <input type="username" className="form-control" id="userName" />

                    {/* First name input box */}
                    <label htmlFor="firstName">First Name:</label>
                    <input type="input" className="form-control" id="firstName" />

                    {/* Last name input box */}
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="input" className="form-control" id="lastName" />

                    {/* phone number input box */}
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="phone" className="form-control" id="phone" />

                    {/* email address input box */}
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" className="form-control" id="email" />
                </div>
            </form>
        </div>
    );
}

export default Add;