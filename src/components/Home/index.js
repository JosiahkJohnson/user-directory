//our imports
import React, { Component } from "react";

//Home component
class Home extends Component{
    display = [];

    render () {
        return(
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdown">
                <button className="dropdown-item" type="button">All</button>
                <button className="dropdown-item" type="button">By hire Date</button>
                <button className="dropdown-item" type="button">By Username</button>
                <button className="dropdown-item" type="button">By First Name</button>
                <button className="dropdown-item" type="button">By Last Name</button>
            </div>
        </div> 
        ); 
    };
}

export default Home;