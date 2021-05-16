import React, { Component } from 'react'
import './assets/styles/main.scss';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './containers/PageNotFound/index';
import dashboardRoutes from './utils/routes/dashboard.routes';
import authenRoutes from './utils/routes/authen.routes';
import DashboardTemplate from './templates/DashboardTemplate';
import AuthenTemplate from './templates/AuthenTemplate';
export default class App extends Component {
    render() {

        const renderDashboardLayout = (routes) => {
            if (routes && routes.length > 0) {
                return routes.map((route, index) => {
                    return <DashboardTemplate key={index} exact={route.exact} path={route.path} Component={route.component} />
                })
            }
        }
        const renderAuthenLayout = (routes) => {
            if (routes && routes.length > 0) {
                return routes.map((route, index) => {
                    return <AuthenTemplate key={index} exact={route.exact} path={route.path} Component={route.component} />
                })
            }
        }
        return (
            <div>
                <Switch>
                    {renderDashboardLayout(dashboardRoutes)}
                    {renderAuthenLayout(authenRoutes)}
                    <Route path="" component={PageNotFound} />
                </Switch>

            </div>
        )
    }
}
