import React, { Component } from 'react';
import Routes from './routes';
import "bootstrap/dist/css/bootstrap.min.css";
import './Assets/CSS/App.css';

class Application extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Routes />
      </div>
     );
  }
}
 
export default Application;
