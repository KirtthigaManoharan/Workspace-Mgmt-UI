import React, { Component } from 'react';
import Header from '../Header/header';
import '../../Assets/CSS/App.css';
import Passwordcontent from '../Content/passwordContent';
class Passwordpage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <Passwordcontent />
            </div>
         );
    }
}
 
export default Passwordpage;