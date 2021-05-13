import SignIn from "../../containers/Auth/SignIn/index";
import SignUp from "../../containers/Auth/SignUp/index";

const defaultRoutes = [
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

export default defaultRoutes;