import React, { Component } from 'react';
import {Home, Work, Users} from '../pages';
import { Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/work" component={Work} />
                <Route exact path="/user" component={Users} />
            </div>
        );
    }
}

export default App;