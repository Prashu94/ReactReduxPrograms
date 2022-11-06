import './App.css';
import React, {Component} from 'react';
import {Route, Navigate, Routes} from 'react-router-dom';

import EditEmployee from './components/EmployeeEdit';
import Card from './components/Card';

class App extends Component{
  render = () => {
    return(
      <div>
        <Routes>
          <Route exact path="/" element = {<Navigate to="/card" />} />
          <Route path="/card" element={<Card/>} />    
          <Route path="/edit/:id" element={<EditEmployee/>} />
        </Routes>
      </div>
    );
  }
}
export default App;