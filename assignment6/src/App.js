import React from 'react';

import {BrowserRouter as Router, Route, Link, Switch, Redirect, Routes, Navigate  } from 'react-router-dom';

import ViewAllBooks from './components/viewAllBooks';
import AddBook from './components/addbook';
import Contact from './components/contact';
// import the required components here

class App extends React.Component {
    render() {
        return (
          <Router>
            <React.Fragment>
              <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <a className='navbar-brand'>Learning Portal</a>
                <div className='collapse navbar-collapse' id="navbarNavDropdown">
                  <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active px-2'>
                      <Link to = "/">View All Books</Link>
                    </li>
                    <br/>
                    <li className='nav-item px-2'>
                      <Link to = "/addBook">Add a Book</Link>
                    </li>
                    <br/>
                    <li className='nav-item px-2'>
                      <Link to = "/contact">Contact US</Link>
                    </li>
                    <br/>
                  </ul>
                </div>
              </nav>
              <br/>
              <Routes>
                <Route exact path = "/" element={<Navigate to="/all"/>}/>
                <Route path = "/all" element={<ViewAllBooks/>}/>
                <Route path = "/addBook" element={<AddBook/>}/>
                <Route path = "/contact" element={<Contact/>}/>
                <Route/>
              </Routes>


            </React.Fragment>
          </Router>   
        );
    }
}
export default App;