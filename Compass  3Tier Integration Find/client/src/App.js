import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  let [data,setData]=useState([]);
  let getEmployeeDataFromServer = async()=>{
        let reqOptions={
          method:"GET",
        };
        let JSONData = await fetch("http://localhost:4867/employee",reqOptions);
        let JSOData = await JSONData.json();
        console.log(JSOData);
        setData(JSOData);
  }
  return (
    <div className="App">
      <button onClick={()=>{
    getEmployeeDataFromServer();

   }}>DATA</button>
      <table>
        
        <thead>
          <tr>
            <th>S.no</th>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Emial</th>
            <th>Gender</th>
            <th>ProfilePic</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
        {data.map((ele,i)=>{
          return (
              <tr>
            <td>{i+1}</td>
            <td>{ele.id}</td>
            <td>{ele.firstName}</td>
            <td>{ele.lastName}</td>
            <td>{ele.email}</td>
            <td>{ele.gender}</td>
            <td><img src={ele.profilePic}></img></td>
            <td>{ele.age}</td>
            <td>{ele.salary}</td>
            <td>{ele.country}</td>

          </tr>
      )
    })};
        </tbody>
      </table>
     
    </div>
  );
}

export default App;
