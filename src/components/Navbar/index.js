//required imports
import React from "react";
import { Link } from "react-router-dom";

//our navbar function that we're going to export later to be used as a component in the App.js file
function Navbar() {
    return (
        <nav className = "navbar navbar-expand-lg navbar-primary bg-light">
            <Link className = "navbar-brand" to = "/">
                User Directory Application
            </Link>

            {/* Our links list */}
            {/* The shorthanded if statments will set the active button when the correct "page" is loaded */}
            <div>
                
                {/* Our unordered list housing our options */}
                <ul className = "navbar-nav">
                    
                    {/* Home page navbar list item */}
                    <li className = "nav-item">
                        <Link 
                            to = "/"
                            className = {
                                window.location.pathname === "/" || window.location.pathname === "/home"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Home
                        </Link>
                    </li>

                    {/* Add link, to add more users to the directory */}
                    <li className = "nav-item">
                        <Link
                            to = "/add"
                            className = {
                                window.location.pathname === "/add" ? "nav-link active" : "nav-link"
                            }
                        >
                            Add
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;