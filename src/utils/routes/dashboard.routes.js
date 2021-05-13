import Dashboard from "../../containers/Dashboard/index";

const dashboardRoutes = [
    {
        exact: true,
        path: '/',
        component: Dashboard
    },
    {
        exact: true,
        path: '/home',
        component: Dashboard
    }
];

export default dashboardRoutes;