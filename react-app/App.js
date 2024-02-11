import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

   const [students, setStudents] = useState([]);

   useEffect(() => {

    fetch('http://localhost:8080/api/students')
    .then(response => response.json())
    .then(data => setStudents(data))
    .catch(error => console.error('error while fetching data' + error));

   }, []);
  return (

    <div>

<h2>LIST OF STUDENT</h2>

{
  students.map(student => (
        <ul key={student.id}>
          <li>{student.firstName}</li>
          <li>{student.lastName}</li>
          <li>{student.department}</li>
        </ul>

  ))
}


    </div>

    
   
  );
}

export default App;
