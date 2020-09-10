import React, { Component } from 'react';
import '../../Assets/CSS/App.css';
const axios = require('axios');

class Display extends Component {
    constructor(props){
        super(props);
        this.state={
          announcement:[],
          event:[],
          reminder:[],
          user:""
        }
    }
    inputs(event){
        this.setState({[event.target.name] : event.target.value});
    }
    componentDidMount() {
        axios({
            method : 'post',
            url : 'http://localhost:8082/layout',
            data :{
              mail: JSON.parse(localStorage.getItem("loginMail")).currentUser
          },
          headers : {'content-type' : "application/json" }
          }).then(res => {
              let announce = res.data.announcement;
              let event = res.data.event;
              let reminder = res.data.reminder;
              let usercheck = res.data.user
              this.setState({ announcement:announce, event:event, reminder:reminder, user:usercheck })
           });
    }
    render() { 
        var values = this.state.announcement;
        var events = this.state.event;
        var reminder = this.state.reminder;
        return ( 
            <div className="cards">
            <div className="w3-container">
                {values.map( (a,key) => (

                <div className="w3-panel w3-card" style={{"backgroundColor": 'white'}}>
                    {(a.announcement.notify_to === JSON.parse(localStorage.getItem("loginMail")).currentUser || this.state.user === JSON.parse(localStorage.getItem("loginMail")).currentUser) ? (
                    <div>
                    <div className="top-division">
                        <span className="dot"><i className='user-icon fas fa-user-alt'></i></span>
                        <span className="card-title">{a.announcement.subject}</span>
                       
                        <span className="created-date">
                            {a.announcement.createdAt.slice(0,10)}
                        </span>
                    </div>
                    <p className="paragraph">{a.announcement.description}</p>
                    </div>
                ) : (
                    <div></div>
                )}
                </div>
                ))} 
                {events.map( (a,key) => (
                <div className="w3-panel w3-card" style={{"backgroundColor": 'white'}}>
                    {(a.event.notify_to === JSON.parse(localStorage.getItem("loginMail")).currentUser || this.state.user === JSON.parse(localStorage.getItem("loginMail")).currentUser) ? (
                    <div>
                    <div className="top-division">
                        <span className="dot"><i className='user-icon fas fa-user-alt'></i></span>
                        <span className="card-title">{a.event.subject}</span>
                        
                        <span className="created-date">
                            {a.event.createdAt.slice(0,10)}
                        </span>
                    </div>
                <p className="paragraph">{a.event.description}</p>
                    <hr className="line"></hr>
                    <span className="date">
                        <i className="fa fa-calendar icon"></i>&nbsp;&nbsp;&nbsp;
                        <span className="date-span">{a.event.date}</span>
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="location-para">
                        <i className='fas fa-map-marker-alt icon'></i>&nbsp;&nbsp;&nbsp;
                        <span className="location-span">{a.event.location}</span>
                    </span>
                    </div>
                ) : (
                    <div></div>
                )}
                </div>
                ))}
                 {reminder.map( (a,key) => (
                <div className="w3-panel w3-card" style={{"backgroundColor": 'white'}}>
                    {(a.reminder.notify_to === JSON.parse(localStorage.getItem("loginMail")).currentUser || this.state.user === JSON.parse(localStorage.getItem("loginMail")).currentUser) ? (
                    <div>
                    <div className="top-division">
                        <span className="dot"><i className='user-icon fas fa-user-alt'></i></span>
                        <span className="card-title">{a.reminder.subject}</span>
                        
                        <span className="created-date">
                            {a.reminder.createdAt.slice(0,10)}
                        </span>
                    </div>
                    <p className="paragraph">{a.reminder.description}</p>
                    <hr className="line"></hr>
                    <span className="date">
                        <i className="fa fa-calendar icon"></i>&nbsp;&nbsp;&nbsp;
                    <span className="date-span">{a.reminder.expires_on}</span>
                    </span>
                    </div>
                    ) : (
                    <div></div>
                    )}
                </div>
                ))} 
            </div>
        </div>
         );
    }
}
 
export default Display;