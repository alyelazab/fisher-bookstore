import React, { Component } from 'react';
import './App.css';



export default class App extends Component{
  render(){
    return (
      <div className= "App container">
        <Navbar bg= "light" expand= "lg">
          <Navbar.Brand>
            <link to ="/">Fisher Bookstore</link>
          </Navbar.Brand>
        </Navbar>
      </div>
    )
  }
};
