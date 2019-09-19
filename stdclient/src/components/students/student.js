import React, { Component } from 'react';
import './student.css';
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
            {/* <CardList students={filteredStudents}/>  */}
            {filteredStudents.map(students => (
                    <h1 key={ students.studentid }> { students.firstname }{ students.lastname } {students.email} </h1>
          ))}
                
            {/* </CardList> */}
            
        </div>
    );
  }  
    
}

export default Student;
