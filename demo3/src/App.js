import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**Using if-else structure demo 
 * - Check if the employee can be given the loan
*/
function generateJSX(){
  const empDetails = {
    "empName": "Jack",
    "salary": 50000
  }

  if(empDetails.salary > 35000){
    return (<div>
        <span>{empDetails.empName} is qualified for loan</span><br/>
        <span>His salary is : {empDetails.salary}</span>
    </div>);
  }else{
    return (
      <h5>
        {empDetails.empName} is not qualified for Loan
      </h5>
    )
  }
}

/**
 * 
 * Demonstrate the For loop to display the required employee information
 */
function generateJSX1(){
  var jsxArr = [];
  const empDetails = [
    {"empName": "Jack", "salary": 50000},
    {"empName": "Jill", "salary": 30000},
    {"empName": "John", "salary": 15000}
  ];
  // add the required elements to jsxArr
  for(let i = 0; i<empDetails.length; i++){
    jsxArr.push(
      <div>
        <div>Employee Name: {empDetails[i].empName}</div>
        <div>Employee salary: {empDetails[i].salary}</div>
        <br/>
      </div>
    );
  }

  return jsxArr;
}

/**
 * Demo: Using Map function to display components
 */
function generateTable(){
  var aGrade = [];
  
  const students1 = [
    {sName: "Joey", marks: 42, grade: 'A'},
    {sName: "Ross", marks: 47, grade: 'A'} 
  ];

  // aGrade array is populated using for loop
  for(let i = 0; i<students1.length; i++){
    aGrade.push(
      <tr key = {i}>
        <td>{students1[i].sName}</td>
        <td>{students1[i].marks}</td>
        <td>{students1[i].grade}</td>
      </tr>
    )
  }

  return aGrade;

}

function generateTable1(){
  
  const students2 = [
    {sName: "Chan", marks: 35, grade: 'B'},
    {sName: "Ted", marks: 38, grade: 'B'}
  ];

  // var bGrade array is populated using map function
  var bGrade = students2.map((student, index) => {
    return(
      <tr key = {index}>
        <td>{student.sName}</td>
        <td>{student.marks}</td>
        <td>{student.grade}</td>
      </tr>
    )
  });

  return bGrade;
}

function getSuccessMessage(){
  console.log("You have registered successfully");
  alert("You have registered successfully");
}

function display(){
  return(
    <div className="styling">
      <span style = {{fontWeight: "bold", fontSize: "25px"}}>Welcome to React App</span>
      <button className="button1 button2">Demo Button</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h3>Employee Details </h3>
      {generateJSX()}
      {/** Demo For Loop */}
      <br/>
      {generateJSX1()}

      <div className="col-md-4 offset-4">
        <table className = "table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>Marks</td>
              <td>Grade</td>
            </tr>
            {generateTable()}
            {generateTable1()}
          </tbody>
        </table>
      </div>

      <div>
        <label>Click here to register</label>
        <input type = "button" value = "Register" onClick = {getSuccessMessage}/>
        {/*calling getSuccessMessage() will not work on click instead we need to use just getSuccessMessage*/}
      </div>

      {display()}
    </div>
  );
}

export default App;
