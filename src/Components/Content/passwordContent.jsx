import React, { Component } from 'react';
import Image from '../../Assets/Images/office.jpg';
const axios = require('axios');

class Passwordcontent extends Component {
    constructor(props){
        super(props);
        this.state={
          fname:"",
          lname:"",
          password:"",
          errorMessage:false,
          validPassword:""
        }
    }
    inputs(event){
        this.setState({[event.target.name] : event.target.value});
    }
    confirmPass(){
        let firstname = this.state.fname;
        let lastname = this.state.lname;
        let password = this.state.password;
        if(firstname == "" || lastname == "" || password == ""){ 
            this.setState({ errorMessage : true })
        }
        else{
        axios({
            method : 'post',
            url : 'http://localhost:8082/password',
            data :{
              firstname: firstname,
              lastname: lastname,
              password: password
          },
          headers : {'content-type' : "application/json" }
          }).then((res) => {
              this.setState({ validPassword : res.data.passValid })
          
          if(res.data.passValid == "Perfect"){
              window.location.href = '/login'
          }
          else{

          }
        })
        }
      }
    render() { 
        return ( 
            <div>
                <div className="center-div">
                <div className="div1">
                    <img className="image-align" src={Image} alt="snapoff" />
                </div>
                <div className="division2">
                    <h1 className="intro-header alignment">Create Personal Password</h1>
                    <span className="intro-subheader subheaders alignment">To make a workspace from scratch, please confirm your email address.</span>
                    <div>
                    {(this.state.errorMessage === true) ? (
                        <p className="error"> Please fill all the fields.</p>) : ( <div></div> )}
                    </div>

                    <div>
                    {(this.state.validPassword === "Not Perfect") ? (
                        <p className="error"> 
                            <p>Enter a valid Password. Make sure the password contains : </p>
                            <br></br>
                            <li>Minimum of 8 digits</li>
                            <li>Combination of Uppercase and Lowercase</li>
                            <li>Include digits</li>
                        </p>
                    ) : ( <div></div> )}
                    </div>

                    <div className="introdata subheaders alignment">
                        First Name
                    </div>
                    <div className="alignment">
                        <input type="text" className="inputdata" name="fname" placeholder="Enter first name" autoComplete="off" value={this.state.fname} onChange={(event)=>{this.inputs(event)}} />
                    </div>
                    <div className="introdata subheaders alignment">
                        Last Name
                    </div>
                    <div className="alignment">
                        <input type="text" className="inputdata" name="lname" placeholder="Enter last name" autoComplete="off" value={this.state.lname} onChange={(event)=>{this.inputs(event)}} />
                    </div>

                    <div className="introdata subheaders alignment">
                        Password
                    </div>
                    <div className="alignment">
                        <input type="password" className="inputdata" name="password" placeholder="Enter your password" value={this.state.password} onChange={(event)=>{this.inputs(event)}} />
                    </div>
                    <button onClick={() => this.confirmPass()} type="button" className="submit-data alignment">Complete</button>
                </div>
            </div>
            </div>
         );
    }
}
 
export default Passwordcontent;