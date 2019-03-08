import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Home from './pages/home';
import Buttons from './pages/ui/buttons';
import NoMatch from './pages/nomatch';
import LoginForm from './pages/form/login';
import RegisterForm from './pages/form/register';
import BasicTable from './pages/table/basicTable';
import HighTable from './pages/table/highTable';


export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <App>
                        <Route path='/login' component={Login} />
                        <Route path='/admin' render={() =>
                            <Admin>
                                <Switch>
                                    <Route exact={true} path='/admin/home' component={Home} />
                                    <Route path='/admin/ui/buttons' component={Buttons} />
                                    <Route path='/admin/form/login' component={LoginForm} />
                                    <Route path='/admin/form/reg' component={RegisterForm} />
                                    <Route path='/admin/table/basic' component={BasicTable} />
                                    <Route path='/admin/table/high' component={HighTable} />
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>
                        } />
                    </App>
                </div>
            </HashRouter>
        )
    }
}