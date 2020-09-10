import React, { Component } from 'react';
import Header from '../Header/header';
import '../../Assets/CSS/App.css';
import Logincontent from '../Content/loginContent';
class Loginpage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <Logincontent />
            </div>
         );
    }
}
 
export default Loginpage;