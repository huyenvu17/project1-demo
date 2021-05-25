import * as authenConst from '../constants/authen.const';

let userInfo = JSON.parse(localStorage.getItem('userInfo'));
const initialState = userInfo ? {
    user: userInfo,
    isSignedin: true
} : {
    isSignedin: false,
    isSignedup: false,
    user: null,
    error: null,
    userSigninInfo: {
        username: null,
        passwordd: null
    }
};

const authenReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case authenConst.SIGNUP_USER: {
            return {
                ...state,
                user: action.user,
            }
        }
        case authenConst.SIGNUP_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                isSignedup: true
            }
        }
        case authenConst.SIGNUP_USER_FAIL: {
            return {
                ...state,
                isSignedup: false,
                error: action.error

            }
        }
        case authenConst.SIGNIN_USER: {
            return {
                ...state,
                userSigninInfo: action.userSigninInfo,
            }
        }
        case authenConst.SIGNIN_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                isSignedin: true
            }
        }
        case authenConst.SIGNUP_USER_FAIL: {
            return {
                ...state,
                isSignedin: false,
                error: action.error

            }
        }
        case authenConst.SIGNOUT_USER:
        case authenConst.SIGNOUT_USER_COMPLETE: {
            return {
                ...state
            }
        }
        default:
            return state;
    }

}

export default authenReducer;