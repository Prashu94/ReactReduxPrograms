import React from 'react';

import {BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';

// import required components
import ViewAllBooks from './components/viewAllBooks';
import AddBook from './components/addbook';
import Contact from './components/contact';
class App extends React.Component {
    render() {
        return (
          <Router>
            <React.Fragment>
              <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
                <div className="navbar-header">
                  <Link className="navbar-brand" to="/">Learning Portal</Link>
                </div>
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <Link className="nav-link" to="/card">View All Books</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/addBook">Add a Book</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>
                </ul>
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