import React, { Component } from 'react';
//import './App.css';

import Form from "./components/Form"

const API_KEY = "eHjNwqmql7skS2uyqi9ic8Wlhm2NWL6q";


class BookList extends Component {

  state = {
    books: []

  }
  getBook = async (e) => {
    const bookName = e.target.elements.bookName.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`);
    
    const data = await api_call.json();
    this.setState({ books: data.results.books});
    console.log(this.state.books);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Book Search</h1>
        </header>
        <Form getBook={this.getBook}/>
        { this.state.books.map((book) => {
          return <p key={book.title}>{ book.title }</p>
        }) }
      </div>
    );
  }
}

export default BookList;