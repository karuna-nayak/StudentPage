import React, { Component } from 'react';
// import './student.css';
import { CardList } from './card-list';




class Student extends Component {
    constructor(){
        super();
        this.state = {
            students: [],
            searchfield: ""
        }
    }

    componentDidMount(){
        fetch('/student')
        .then(res => res.json())
        .then(students => this.setState({students}, ()=>console.log("students fetched", students)));
    }

    
  render() {
    const { students, searchfield } = this.state;
    const filteredStudents = students.filter(student =>
        student.firstname.toLowerCase().includes(searchfield.toLowerCase())
        || student.studentid.toString().includes(searchfield) 
        || student.lastname.toLowerCase().includes(searchfield.toLowerCase())
        // student.studentid.includes(searchfield)
    );
    return (
        <div className="container">
            <h2 className='heading'>Students</h2>
            <label className="search-label" htmlFor="search-input">
                <input
                    type="search"
                    placeholder="search"
                    onChange={e => 
                        this.setState({searchfield: e.target.value})
                    }
                />
                
            </label>
            <table className="table table-striped">
            <thead className="thead-light">
            <tr>
              <th>studentid</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Enail</th>
              <th>Address</th>
              <th>GPA</th>
            </tr>
            </thead>
            <tbody>
                {/* {this.studentlist()} */}
                {filteredStudents.map(student =>
                <tr key={student.studentid}>
                    <td>{student.studentid}</td>
                    <td>{student.firstname}</td>
                    <td>{student.lastname}</td>
                    <td>{student.email}</td>
                    <td>{student.address}</td>
                    <td>{student.GPA}</td>
                </tr>)}

            </tbody>
            </table>
            {/* {filteredStudents.map(student => 
          <h2 key={student.studentid}>{student.firstname} {student.lastname}</h2> */}
        {/* )} */}
        </div>
    );
  }  
    
}

export default Student;
