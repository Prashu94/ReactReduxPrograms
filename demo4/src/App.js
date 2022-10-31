import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import image1 from './usingjsxdemoFeMale.png';
import image2 from './usingjsxdemoMale.png';

const emp1 = {
  "empId": 100,
  "empName": "Jack",
  "age": 30,
  "salary": 50000
}

const emp2 = {
  "empId": 101,
  "empName": "Jane",
  "age": 30,
  "salary": 40000
}

function getEmployeeDetails(){
  const element = (
    <div>
      <h3 className="text-center text-primary">Employee Details</h3>
      <div className="card" style = {{"width": 200}}>
        <img className="card-img-top" src = {image1} height = "200" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title text-center">{emp1.empName}</h5>
          <p className="card-text">
            <span>ID: {emp1.empId}</span><br/>
            <span>Age: {emp1.age}</span><br/>
            <span>Salary: {emp1.salary}</span><br/>
          </p>
          <button type = "button" className="btn btn-primary">Edit Details</button>
        </div>
      </div>
      <div className="card" style = {{"width": 200}}>
        <img className="card-img-top" src = {image2} height = "200" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title text-center">{emp2.empName}</h5>
          <p className="card-text">
            <span>ID: {emp2.empId}</span><br/>
            <span>Age: {emp2.age}</span><br/>
            <span>Salary: {emp2.salary}</span><br/>
          </p>
          <button type = "button" className="btn btn-primary">Edit Details</button>
        </div>
      </div>
    </div>
  );

  return element;
}

function displayBooks() {
  return <ol> 
  <li>Rich Dad, Poor Dad</li>
  <li>The Alchemist</li>
  </ol>
  {displayMoreBooks()}
}

function greet() {
return <div>
  <h2>Welcome to the library!</h2>
  <p>Explore new titles</p>
{displayBooks()}
</div>
}

function displayMoreBooks() {
return <div>
  <li>Deception</li>
  <p>The Prophet</p>
  </div>
}

function myFunction() {
  var jsxArr = []
  
  for (let i = 5; i > 0; i--) {
    jsxArr.push(<li> Hello! {i} </li>)
  }

  return <div>
  <ol>  {jsxArr}  </ol>
  </div>;
}

function App() {
  return (
    <div className="App">
      {getEmployeeDetails()}
      {greet()}
      {myFunction()}
    </div>
  );
}

export default App;
