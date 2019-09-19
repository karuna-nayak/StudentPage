import React, { Component } from 'react';
import axios from 'axios'; 

export default class AddStudent extends Component{
    constructor(props){
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeGpa = this.onChangeGpa.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        


        this.state={
            studentid: 0,
            firstname: "",
            lastname: "",
            email: "",
            address: "",
            GPA: 0
        }
    }





onChangeId(e){
    this.setState({studentid: e.target.value});
}
onChangeFirstname(e){
    this.setState({
        firstname: e.target.value
    });
}

onChangeLastname(e){
    this.setState({
        lastname: e.target.value
    });
}

onChangeEmail(e){
    this.setState({
        email: e.target.value
    });
}

onChangeAddress(e){
    this.setState({
        address: e.target.value
    });
}

onChangeGpa(e){
    this.setState({
        GPA: e.target.value
    });
}

onSubmit(e){
    console.log("Adding");
    e.preventDefault();
    const std = {
        studentid: this.state.studentid,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        address: this.state.address,
        GPA: this.state.GPA
    }

    // let axiosConfig = {
    //     headers: {
    //         'Content-Type': 'application/json;charset=UTF-8',
    //         "Access-Control-Allow-Origin": "*",
    //     }
    //   };
    console.log("Adding User");
    console.log(std);
    axios.post('http://localhost:5000/student/add', std)
        .then(res => console.log(res.data));
    // window.location='/';

}



    render(){
        return(
            <div>
                <h3>Add a new student</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Student Id</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.studentid}
                        onChange={this.onChangeId}/>
                    </div>
                    <div className='form-group'>
                        <label> FirstName</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.firstname}
                        onChange={this.onChangeFirstname}/>
                    </div>
                    <div className='form-group'>
                        <label> Last Name</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.lastname}
                        onChange={this.onChangeLastname}/>
                    </div>
                    <div className='form-group'>
                        <label> Email</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}/>
                    </div>
                    <div className='form-group'>
                        <label>Address</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.address}
                        onChange={this.onChangeAddress}/>
                    </div>
                    <div className='form-group'>
                        <label>GPA</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.GPA}
                        onChange={this.onChangeGpa}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>    
        )
    }
}