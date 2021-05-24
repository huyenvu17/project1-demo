import React, { Component,Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import './assets/styles/main.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageNotFound from './containers/PageNotFound/index';
import dashboardRoutes from './utils/routes/dashboard.routes';
import authenRoutes from './utils/routes/authen.routes';
import DashboardTemplate from './templates/DashboardTemplate';
import AuthenTemplate from './templates/AuthenTemplate';
import {connect} from 'react-redux';
class App extends Component {

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
        // console.log(localStorage.getItem("userInfo"))
        // const user = localStorage.getItem("userInfo");

        return (
            <Fragment>
                <Switch>
                    {renderDashboardLayout(dashboardRoutes)}
                    {renderAuthenLayout(authenRoutes)}
                    {/* {user ? <Redirect exact from="/" to="/patients" /> : <Redirect to="/signin" />} */}
                    <Route path="" component={PageNotFound} />
                </Switch>
            </Fragment>
        )
    }
}

// const mapStateToProps = state => {
    
// }

// const connection = connect(null, null)(App);

// export default withRouter(connection);
export default App;