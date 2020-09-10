import React, { Component } from 'react';
import '../../Assets/CSS/App.css';
import Firstcontent from '../Content/firstPage';
class Frontpage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="header">
                <span className="title">SA-INTRANET</span>
                <a href="/login" className="login-align">Login</a>
                <span className="mailalign">
                    <i className="fa fa-envelope" style={{color:'grey'}}></i> &nbsp;&nbsp;
                    support@squashapps.com
                </span>
                </div>
                <Firstcontent />
            </div>
         );
    }
}
 
export default Frontpage;