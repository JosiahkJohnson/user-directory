//our imports
import React, { Component, useEffect, useState } from "react";
import { User } from "../User";

//our array of entries we are working with 

//Home component
function Home(){
    //the storage for our current database entries
    const [display, setList] = useState([]);
    //the current selection
    const [selection, setSelection] = useState("");
    //make sure we actually need to update something
    const [compare, setCompare] = useState("");

    //useEffect to load all of our list and store them
    useEffect(() => {
        if(selection !== compare){
            switch(selection) {
            case "username":
                callUserName();
                break;
            case "date":
                callDate();
                break;
            case "first":
                callFirst();
                break;
            case "last":
                callLast();
                break;
            default:
                break;
            }
            //this prevents a loop of updates, though I'm sure there's a better way of doing this
            setCompare(selection);
        }  
    });

    //sort the data by hiredate
    function callDate() {
        fetch("/api/users/byDate").then(function(response) {
            response.json().then(function (data) {
                console.log("sorting by username, results: ", data);
                setList(data);
            });
        });
    };

    //sort by first name function
    function callFirst() {
        fetch("/api/users/byfirstName").then(function(response) {
            response.json().then(function (data) {
                console.log("sorting by first name, results: ", data);
                setList(data);
            })
        });
    }

    //sort by last name function
    function callLast() {
        fetch("/api/users/bylastName").then(function(response) {
            response.json().then(function (data) {
                console.log("sorting by last name, results: ", data);
                setList(data);
            });
        });
    };

    //call the database and order by username
    function callUserName() {
        fetch("/api/users/byUsername").then(function(response) {
            if(response.status === 200) {
    
                response.json().then(function (data) {
                    console.log("sorting by username, results: ", data);
                    setList(data);
                });
            };
        });
    }

    //whenever a new menu option is chosen, handle the input
    function handleInputChange(event) {
        event.preventDefault();
        console.log("input change");
        const selection = event.target.value;

        setSelection(selection);
        //callUserName();
    }

    //main render function
    return (

        <div className="container">

            {/* The dropdown menu to sort the results */}
            <div className="dropdown">

                {/* Main button */}
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort
                </button>

                {/* The menu items to sort the results */}
                <div className="dropdown-menu" aria-labelledby="dropdown">
                    <button className="dropdown-item" value = "username" onClick = {handleInputChange} type="button">By username</button>
                    <button className="dropdown-item" value = "date" onClick = {handleInputChange} type="button">By hire Date</button>
                    <button className="dropdown-item" value = "first" onClick = {handleInputChange} type="button">By First Name</button>
                    <button className="dropdown-item" value = "last" onClick = {handleInputChange} type="button">By Last Name</button>
                </div>
            </div>

            {/* results container */}
            {}
            {display.length ? (
              <ul>
                {display.map(index => {
                  return (
                    <User 
                        userName = {index.userName}
                        firstName = {index.firstName}
                        lastName = {index.lastName}
                        phone = {toString(index.phoneNumber)}
                        email = {index.email}
                    >
                    </User>
                  );
                })}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
        
    ); 
};

export default Home;