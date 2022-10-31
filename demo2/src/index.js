import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import image1 from  './usingjsxdemoMale.png';
import image2 from  './usingjsxdemoFeMale.png';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

const emp1 = {
  "empId": 100,
  "empName": "Jack",
  "age": 30,
  "salary": 50000
}

const emp2 = {
  "empId": 101,
  "empName": "Jane",
  "age": 24,
  "salary": 40000
}

function getEmployeeDetails(){
  const element = (
    <div>
      <h3>Employee Details</h3>
      <ol>
        <li>
          <div>
            <span>Name: {emp1.empName}</span><br/>
            <span>Id: {emp1.empId}</span><br/>
            <span>Age: {emp1.age}</span><br/>
            <span>Salary: {emp1.salary}</span><br/>
            <img alt = "Employee" src = {image1} width="100px"/><br/>
            <a href='#'>Edit Details</a>
          </div>
        </li>
        <li>
          <div>
            <span>Name: {emp2.empName}</span><br/>
            <span>Id: {emp2.empId}</span><br/>
            <span>Age: {emp2.age}</span><br/>
            <span>Salary: {emp2.salary}</span><br/>
            <img alt = "Employee" src = {image2} width="100px"/><br/>
            <a href='#'>Edit Details</a>
          </div>
        </li>
      </ol>
    </div>
  );

  return element;
}

const empArray = [
  {empId: 100, empName: 'Kirk', age: 30},
  {empId: 101, empName: 'James', age: 31},
  {empId: 102, empName: 'Robert', age: 32},
  {empId: 103, empName: 'Dave', age: 50},
  {empId: 104, empName: 'Rob', age: 40},
];

function generateTable(){
  /*var rowArr = [];
  for(let i = 0; i<empArray.length ; i++){
    var row = (
      <tr>
        <td>{empArray[i].empId}</td>
        <td>{empArray[i].age}</td>
        <td>{empArray[i].empName}</td>
      </tr>
    );
    rowArr.push(row);
  }*/
  var rowArr = empArray.map((emp) => {
    return (
      <tr key={emp.empId}>
        <td>{emp.empId}</td>
        <td>{emp.empName}</td>
        <td>{emp.age}</td>
      </tr>
    );
  })
  return(
    <table className='table'>
      <thead>
        <tr>
          <th>EmpId</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {rowArr}
      </tbody>
    </table>
  );
}

//ReactDOM.render(getEmployeeDetails(), document.getElementById('root'));
ReactDOM.render(generateTable(), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
