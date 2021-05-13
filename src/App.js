import React, { Component } from 'react'
import './assets/styles/main.scss';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './containers/PageNotFound/index';
import dashboardRoutes from './utils/routes/dashboard.routes';
import defaultRoutes from './utils/routes/default.routes';
import DasboardTemplate from './templates/DasboardTemplate';
import DefaultTemplate from './templates/DefaultTemplate';
export default class App extends Component {
    render() {

        const renderDashboardLayout = (routes) => {
            if (routes && routes.length > 0) {
                return routes.map((route, index) => {
                    return <DasboardTemplate key={index} exact={route.exact} path={route.path} Component={route.component} />
                })
            }
        }
        const renderDefaultLayout = (routes) => {
            if (routes && routes.length > 0) {
                return routes.map((route, index) => {
                    return <DefaultTemplate key={index} exact={route.exact} path={route.path} Component={route.component} />
                })
            }
        }
        return (
            <div>
                <Switch>
                    {renderDashboardLayout(dashboardRoutes)}
                    {renderDefaultLayout(defaultRoutes)}
                    <Route path="" component={PageNotFound} />
                </Switch>

            </div>
        )
    }
}
