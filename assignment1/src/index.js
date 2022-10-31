import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.css";
import"./index.css";

const course1 = {
  title : "HTML5",
  author : "Dan Brown",
  category : "Web Development",
}

const course2 = {
  title : "CSS",
  author : "Robin Cook",
  category : "Web Development",
}
const course3 = {
  title : "JavaScript",
  author : "Dan Brown",
  category : "Programming",
}


function createCard(course, index) {
  // Code for creating a card.
  return (<div className='card' style = {{'width':200, 'height': 200}} key = {index}>
    <div className='card-body'>
      <h5 className='card-title text-center'>{course.title}</h5>
      <p className='card-text'>
        <span>Author: {course.author}</span><br/>
        <span>Category: {course.category}</span><br/>
      </p>
      <button className='btn btn-success' type = "submit">Summary</button>
    </div>
  </div>);
}

function generateTable() {
  /* Use the data provided to create a table
  */
 const courseArr = [course1, course2, course3];
 let courseElements = courseArr.map((course, index) => {
  return(
    <tr key = {index}>
      <td scope='row'>{course.title}</td>
      <td scope='row'>{course.category}</td>
      <td scope='row'>{course.author}</td>
    </tr>
  );
 })
 return(
    <table className='table table-dark'>
      <thead>
        <tr>
          <th scope='col'>Course Name</th>
          <th scope='col'>Category</th>
          <th scope='col'>Author</th>
        </tr>
      </thead>
      <tbody>
        {courseElements}
      </tbody>
    </table>
 )
}

function getCourseDetails(){

  const courseArr = [course1, course2, course3];
  const element = (
    <div>
      <h3 className="text-primary offset-3" style={{'alignItems': 'center', 'marginLeft':'400px'}}>Featured Courses</h3>
      <div className="row">
        {courseArr.map((course, index)=> {
          return (
            createCard(course, index)
          );
        })}
      </div>
      <h3 className='text-primary offset-3' style={{'alignItems': 'center', 'marginLeft':'400px'}}>Course Catalog</h3>
      <div className='row table-data'>
        {generateTable()}
      </div>
    </div>
  )
  return element;
}


ReactDOM.render(getCourseDetails(), document.getElementById('root'));