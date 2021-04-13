/**********************************************************************
*    Title: Intro to React Router for Beginners (Multi-Page Apps)
*    Author: CoderOne
*    Availability: https://www.youtube.com/watch?v=hjR-ZveXBpQ
*
***********************************************************************/

import React, { Component }  from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

//pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import Books from "./pages/Books";
import BookList from "./pages/BookList";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/404" component={NotFoundPage}/>
          <Route exact path="/Books" component={Books}/>
          <Route exact path="/BookList" component={BookList}/>
          <Redirect to="/404" />
        </Switch>
      </Router>
    )
  }
}

export default App;