/****************************************************************
*    Title: Using APIs in React
*    Author: Hamza
*    Availability: https://www.youtube.com/watch?v=PbJt7-a2274&t=79s
*
*    Title: The New York Times Developer Network
*    Availability: https://developer.nytimes.com/
*
*****************************************************************/

import React, { Component } from 'react';import Form from "./components/Form"

const API_KEY = "eHjNwqmql7skS2uyqi9ic8Wlhm2NWL6q";

class BookList extends Component {

  state = {
    books: []
  }
  getBook = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`);
    
    const data = await api_call.json();
    this.setState({ books: data.results.books});
    console.log(this.state.books);
  }

  render() {
    return (
      <div className="App" style={{ color: 'white' }}>
        <header className="App-header">
          <h1 className="App-title">Book Search</h1>
        </header>
        <h3 style={{ color: 'white' }}>View the Current New York Times Best Sellers List</h3>
        <Form getBook={this.getBook} />
        { this.state.books.map((book) => {
          return <p key={book.title}>{ book.title }</p>
        }) }
      </div>
    );
  }
}

export default BookList;