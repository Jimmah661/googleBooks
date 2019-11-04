import React from "react";
import API from "../utils/API"

class Search extends React.Component {
// handleSearch() = 

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h3>Book Search</h3>
                    <form>
                        <div className="form-group">
                            <label>Book</label>
                            <input type="text" className="form-control" placeholder="Enter a book title to search" />
                        </div>
                        <button type="submit">submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Search;
