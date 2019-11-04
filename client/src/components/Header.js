import React from "react";
import {Link} from "react-router-dom";

function Header(props) {
    return(
        <div>
            <div>
                <ul className="nav mt-2"> 
                    <li className="nav-item">
                        <button className="btn btn-link">
                            <Link to="/search">Search</Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-link">
                            <Link to="/saved">Saved</Link></button> 
                    </li>
                </ul>
            </div>
            <div className="jumbotron text-center mt-2">
                <h1>(React) Google Book Search</h1>
                <h3>Search for and save books of interest</h3>
            </div>
        </div>
    )
}

export default Header;
