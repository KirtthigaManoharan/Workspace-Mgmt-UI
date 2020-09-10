import React, { Component } from 'react';
import '../../Assets/CSS/App.css'
import $ from "jquery";
import moment from 'moment';
import Viewlayout from './displayLayout.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
const axios = require('axios');

class Mainlayout extends Component {
    constructor(props){
        super(props);
        this.state={
          search2:"",
          subject:"",
          category:"",
          expiry:"",
          eventdate:"",
          eventtime:"",
          location:"",
          description:"",
          notify:[],
          displayData:[]
        }
    }
    logout(){
        localStorage.clear();
        window.location.href = '/';
    }
    announcement() {
        this.setState({category : "announcement"})
        $("#expiry").hide();
        $("#dateandtime").hide();
    }
    event() {
        $("#datee").on("change", () => {
            this.setAttribute(
                "data-date",
                moment(this.value, "YYYY-MM-DD")
                .format( this.getAttribute("data-date-format") )
            )
        }).trigger("change")
        this.setState({category : "event"})
        $("#expiry").hide();
        $("#event").click(() => {
            $("#dateandtime").show();
        });
    }
    reminder() {
        $("#datee").on("change", () => {
            this.setAttribute(
                "data-date",
                moment(this.value, "YYYY-MM-DD")
                .format( this.getAttribute("data-date-format") )
            )
        }).trigger("change")
        this.setState({category : "reminder"})
        $("#dateandtime").hide();
        $("#reminder").click(() => {
            $("#expiry").show();
        });
    }
    inputs(event){
        this.setState({[event.target.name] : event.target.value});
    }
    announcemodal() {
        $("#expiry").hide();
        $("#dateandtime").hide();
    }
    addAnnounce() {
        let mail = JSON.parse(localStorage.getItem("loginMail")).currentUser;
        axios({
            method : 'post',
            url : 'http://localhost:8082/category',
            data :{
              userMail: mail,
              subject: this.state.subject,
              category: this.state.category,
              expiry: this.state.expiry,
              eventdate: this.state.eventdate,
              eventtime: this.state.eventdate,
              location: this.state.location,
              description: this.state.description,
              notify: this.state.notify
          },
          headers : {'content-type' : "application/json" }
          }).then(res => {
              this.setState({ displayData:res.config.data })
           });
    }
    render() { 
        return ( 
            <div className="main-div">
                <div className="sidebar">
                    <span className="title1">SA-INTRANET</span>
                    <div className="announce">
                        <i className='fas fa-bullhorn'></i> &nbsp;&nbsp;
                        Announcement
                    </div>
                    <button onClick={() => this.logout()} type="button" className="logout">
                        <i className='fas fa-user-clock'></i> &nbsp;&nbsp;
                        Logout
                    </button>
                </div>
                <div className="mainbody">

                    <div className="main-head">
                        <span className="main-head-align">
                        Announcement
                        </span> 
                    </div>

                    <div className="contentbody">
                        <button type="button" className="add-announce" onClick={() => this.announcemodal()}  data-toggle="modal" data-target="#myModal">+ Add Announcement</button>

                        <Viewlayout />
                    
                            <div className="modal" id="myModal">
                            <div className="modal-dialog">
                                <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Add New Annoucement</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>

                                <div className="modal-body">
                                    <div>Subject</div>
                                    <input type="text" className="input-group mb-3 subject"  name="subject" placeholder="Enter your subject" autoComplete="off" value={this.state.subject} onChange={(event)=>{this.inputs(event)}} />

                                    <div>Select Category</div>
                                    <button type="button" className="btn btn-light btn-outline-secondary" onClick={() => this.announcement()}>Announcement</button>&nbsp;&nbsp;
                                    <button type="button" className="btn btn-light btn-outline-secondary" id="event"  onClick={() => this.event()}>Event</button>&nbsp;&nbsp;
                                    <button type="button" className="btn btn-light btn-outline-secondary" id="reminder" onClick={() => this.reminder()}>Reminder</button>&nbsp;&nbsp;<br></br><br></br>

                                    <div className="expiry" id="expiry">
                                        <div>Expires On</div>
                                        <input type="date" data-date="" data-date-format="DD MMMM YYYY" id="#datee" className="input-group mb-3"  name="expiry" placeholder="" autoComplete="off" value={this.state.expiry} onChange={(event)=>{this.inputs(event)}} />
                                    </div>

                                    <div className="dateandtime" id="dateandtime">
                                        <div className="">Date</div>
                                        <input type="date" data-date="" data-date-format="DD MMMM YYYY" id="#datee" className="input-group mb-3"  name="eventdate" min={Date.now} placeholder="" autoComplete="off" value={this.state.eventdate} onChange={(event)=>{this.inputs(event)}} />

                                       <div className="">Time</div>
                                       <input type="time" className="input-group mb-3"  name="eventtime" min="09:00" max="18:00" placeholder="" autoComplete="off" value={this.state.eventtime} onChange={(event)=>{this.inputs(event)}} />

                                       <div className="">Location</div>
                                       <input type="text" className="input-group mb-3"  name="location" placeholder="" autoComplete="off" value={this.state.location} onChange={(event)=>{this.inputs(event)}} />
                                    </div>
                                    <br></br>

                                    <div>Description</div>
                                    <textarea className="description form-control" id="exampleFormControlTextarea1" rows="3"  name="description" placeholder="" autoComplete="off" value={this.state.description} onChange={(event)=>{this.inputs(event)}}></textarea>
                                    <br></br>
                                    <div>Notify To</div>
                                    <textarea className="notify form-control" id="exampleFormControlTextarea1" rows="3"  name="notify" placeholder="" autoComplete="off" value={this.state.notify} onChange={(event)=>{this.inputs(event)}}></textarea>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Discard</button>
                                    <button onClick={() => this.addAnnounce()} type="button" className="save-modal">Save</button>
                                </div>

                                </div>
                            </div>
                            </div>
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
export default Mainlayout;