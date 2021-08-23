import React, { Component } from 'react';
import {Home, Work, Users, AddUser, VacationList} from '../pages';
import { Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/work" component={Work} />
                <Route exact path="/user" component={Users} />
                <Route exact path="/add-user" component={AddUser} />
                <Route exact path="/vacation-list" component={VacationList} />
            </div>
        );
    }
}

export default App;