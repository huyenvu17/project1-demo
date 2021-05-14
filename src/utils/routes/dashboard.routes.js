import Dashboard from "../../containers/Dashboard";
import Users from "../../containers/Users/index";

const dashboardRoutes = [
    {
        exact: true,
        path: '/',
        component: Dashboard
    },
    {
        exact: true,
        path: '/pets',
        component: Dashboard
    },
    {
        exact: true,
        path: '/users',
        component: Users
    }
];

export default dashboardRoutes;