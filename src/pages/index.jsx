import React from "react";
import { Link } from "react-router-dom";




const MainPage = () => {
    return (
        <div>
            <h3>Welcome to this page</h3>
            <small>Main Page</small>
            <Link to="/Books">Add a Book to Your List</Link>
            <Link to="/BookList">View New York Times Bestseller List</Link>
        </div>

    );
}

export default MainPage;