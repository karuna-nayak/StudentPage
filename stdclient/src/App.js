import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Student from './components/students/student';
// import Form from './components/students/addform';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component';
import AddStudent from './components/students/add-student.component';

// getForm  = ()=>{
//  <Form/>
// }

function App() {
  return (
    <Router>
      <div className='container'>
      <Navbar/>
      <br/>

      {/* <div className="App"> */}
      {/* <header className="App-header"> */}
      <Route path="/" exact component={Student}/>
      <Route path="/add" exact component={AddStudent}/>
        {/* <Student/> */}
        {/* <button onClick={() => <Form/>} >ADD Student </button> */}
      {/* </header> */}
    {/* </div> */}
    </div>
    </Router>
    
  );
}

export default App;
