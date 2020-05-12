//imports
import React, { Component } from "react";

//our Mongo Source port or 8080 for testing
const URL = process.env.MONGODB_URI || "http://localhost:8080";

//out Add function component, will contain a form and submit button to add another user to the directory
class Add extends Component{
    //set the initial state
    state = {
        userName: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
    };

    //any time the input fields are changed, we need to update the state stored above
    handleInputChange = event => {
        //what we need to change
        const name = event.target.name;
        //new value
        let value = event.target.value;

        //update the input state
        this.setState({
            [name]: value
        });
    };

    //after the submit button is pressed, submit the form to the database
    handleSubmit = event => {
        event.preventDefault();

        //if any of the fields are not filled in we will inform the user that they need to input all of the data
        if (!this.state.email || !this.state.firstName || !this.state.phone || !this.state.userName || !this.state.lastName) {
            alert ("Please fill in all the data on the page before submitting to the database.");
        } else {
            //create our user to post to our database
            const user = {
                userName: this.state.userName,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phoneNumber: this.state.phone,
                email: this.state.email
            };

            console.log("User created: ", user);

            //fetch it to our server with a post method
            fetch(URL + "/api/newUser", {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            }).then(console.log("we sent this: ", user));
        };
    };

    render() {
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
                        <input type="text" name = "userName" value = {this.state.userName} onChange = {this.handleInputChange} className="form-control"/>
    
                        {/* First name input box */}
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" name = "firstName" value = {this.state.firstName} onChange = {this.handleInputChange} className="form-control"/>
    
                        {/* Last name input box */}
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name = "lastName" value = {this.state.lastName} onChange = {this.handleInputChange} className="form-control"/>
    
                        {/* phone number input box */}
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="phone" name = "phone" value = {this.state.phone} onChange = {this.handleInputChange} className="form-control"/>
    
                        {/* email address input box */}
                        <label htmlFor="email">Email Address:</label>
                        <input type="text" name = "email" value = {this.state.email} onChange = {this.handleInputChange} className="form-control"/>
    
                        {/* Submit button */}
                        <button className="btn btn-primary" onClick = {this.handleSubmit} >Add User</button>
                    </div>
                </form>
            </div>
        );
    }
    
}

export default Add;