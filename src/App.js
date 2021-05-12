import React, { Component } from 'react'
import './assets/styles/main.scss';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './containers/PageNotFound/index';
import routes from './utils/routes';
import AdminTemplate from './templates/AdminTemplate';

export default class App extends Component {
    render() {

        const renderLayout = (routes) => {
            console.log(routes)
            if (routes && routes.length > 0) {
                return routes.map((route, index) => {
                    return <AdminTemplate key={index} exact={route.exact} path={route.path} Component={route.component} />
                })
            }
        }
        return (
            <div>
                <Switch>
                    {renderLayout(routes)}
                    <Route path="" component={PageNotFound} />
                </Switch>

            </div>
        )
    }
}
