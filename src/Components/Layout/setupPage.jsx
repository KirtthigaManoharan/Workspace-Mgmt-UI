import React, { Component } from 'react';
import Header from '../Header/header';
import '../../Assets/CSS/App.css';
import Setupcontent from '../Content/setupContent';
class SetupPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <Setupcontent />
            </div>
         );
    }
}
 
export default SetupPage;