import React, { Component } from 'react';
import '../../Assets/CSS/App.css';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header">
                <span className="title">SA-INTRANET</span>
                <span className="mail-align">
                    <i className="fa fa-envelope" style={{color:'grey'}}></i> &nbsp;&nbsp;
                    support@squashapps.com
                </span>
            </div>
         );
    }
}
 
export default Header;