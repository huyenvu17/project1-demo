import Patients from "../../containers/Patients";
import Members from "../../containers/Members/index";
import Flow from "../../containers/Flow";
import Schedule from "../../containers/Schedule";
import Clients from "../../containers/Clients";

const dashboardRoutes = [
    {
        exact: true,
        path: '/',
        component: Patients
    },
    {
        exact: true,
        path: '/patients',
        component: Patients
    },
    {
        exact: false,
        path: '/members',
        component: Members
    },
    {
      exact: false,
      path: '/flow',
      component: Flow
    },
    {
      exact: false,
      path: '/schedule',
      component: Schedule
    },
    {
      exact: false,
      path: '/clients',
      component: Clients
    }
];

export default dashboardRoutes;
