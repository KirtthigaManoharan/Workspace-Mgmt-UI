import React, { Component } from 'react';
import Image from '../../Assets/Images/office.jpg';
const axios = require('axios');

class Setup extends Component {
    constructor(props){
        super(props);
        this.state={
          companyname:"",
          location:"",
          empcount:"",
          domainname:"",
          errorMessage:false
        }
    }
    inputs(event){
        this.setState({[event.target.name] : event.target.value});
    }
    confirmSetup(){
      let companyname = this.state.companyname;
      let location = this.state.location;
      let empcount = this.state.empcount;
      let domainname = this.state.domainname;
      if(companyname === "" && location === "" && empcount === "" && domainname ===""){ 
        this.setState({ errorMessage : true })
      }
      else {
        axios({
            method : 'post',
            url : 'http://localhost:8082/setup',
            data :{
              companyname: companyname,
              location: location,
              empcount: empcount,
              domainname: domainname
          },
        headers : {'content-type' : "application/json" }
        })
        window.location.href = '/password';
     }
      }
    render() { 
        return (  
            <div className="center-div">
                <div className="div1">
                    <img className="image-align" src={Image} alt="snapoff" />
                </div>
                <div className="division2">
                    <h1 className="intro-header alignment">Setup your Application</h1>
                    <span className="intro-subheader subheaders alignment">To make a workspace from scratch, please confirm your email address.</span>
                    <div>
                    {(this.state.errorMessage === true) ? (
                        <p className="error"> Please fill all the fields.</p>) : ( <div></div> )}
                    </div>
                    <br></br>
                    <div className="intro-dataa subheaders alignment">
                        Company Name
                    </div>
                    <div className="alignment">
                        <input type="text" className="inputdata" name="companyname" placeholder="Enter your company name" autoComplete="off" value={this.state.companyname} onChange={(event)=>{this.inputs(event)}} />
                    </div>

                    <div className="intro-dataa subheaders alignment">
                        Location
                    </div>
                    <div className="alignment">
                        <input type="text" className="inputdata" name="location" placeholder="Enter your location" autoComplete="off" value={this.state.location} onChange={(event)=>{this.inputs(event)}} />
                    </div>

                    <div className="intro-dataa subheaders alignment">
                        No. of employees
                    </div>
                    <div className="alignment">
                        <input type="number" className="inputdata" name="empcount" placeholder="Enter employee count" autoComplete="off" value={this.state.empcount} onChange={(event)=>{this.inputs(event)}} />
                    </div>

                    <div className="intro-dataa subheaders alignment">
                        Domain Name
                    </div>
                    <div className="alignment">
                        <input type="text" className="inputdata" name="domainname" placeholder="Customize your domain name" autoComplete="off" value={this.state.domainname} onChange={(event)=>{this.inputs(event)}} />
                    </div>

                    <button onClick={() => this.confirmSetup()} type="button" className="submit-data alignment">Next</button>
                </div>
            </div>
        );
    }
}
 
export default Setup;