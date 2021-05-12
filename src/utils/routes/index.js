import Landing from "../../containers/Landing/index";
import SignIn from "../../containers/Auth/SignIn/index";
import SignUp from "../../containers/Auth/SignUp/index";

const routes = [
    {
        exact: true,
        path: '/',
        component: Landing
    },
    {
        exact: true,
        path: '/home',
        component: Landing
    },
    {
        exact: false,
        path: '/signin',
        component: SignIn
    },
    {
        exact: false,
        path: '/signup',
        component: SignUp
    }
];

export default routes;