import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Frontpage from './Components/Layout/frontPage';
import Loginpage from './Components/Layout/loginPage';
import Setuppage from './Components/Layout/setupPage';
import Mailpage from './Components/Layout/mailPage';
import Passwordpage from './Components/Layout/passwordPage';
import Mainlayout from './Components/View Design/view';
class Routes extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Router>
                    <Switch>
                        <Route exact path ='/' component={Frontpage} />
                        <Route exact path ='/login' component={Loginpage} />
                        <Route exact path ='/setup' component={Setuppage} />
                        <Route exact path ='/mail' component={Mailpage} />
                        <Route exact path ='/password' component={Passwordpage} />
                        <Route exact path ='/layout' component={Mainlayout} />
                    </Switch>
                </Router>
            </div>
         );
    }
}
 
export default Routes;