import React, { Component } from 'react';
import Header from '../Header/header';
import '../../Assets/CSS/App.css';
import Mailcontent from '../Content/mailContent';
class Mailpage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <Mailcontent />
            </div>
         );
    }
}
 
export default Mailpage;