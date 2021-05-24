import * as userConst from '../constants/users.const';
const initialState = {
    isSignedin: false,
    isSignedup: false,
    user: {
        fullname: null,
        username: null,
        password: null,
        role: null,
        token: null,
    },
    error: null
}

const authenReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case userConst.SIGNUP_USER: {
            return {
                ...state,
                user: action.user,
            }
        }
        case userConst.SIGNUP_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                isSignedup: true
            }
        }
        case userConst.SIGNUP_USER_FAIL: {
            return {
                ...state,
                isSignedup: false,
                error: action.error

            }
        }
        case userConst.SIGNIN_USER: {
            return {
                ...state,
                user: action.user,
            }
        }
        case userConst.SIGNIN_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                isSignedin: true
            }
        }
        case userConst.SIGNUP_USER_FAIL: {
            return {
                ...state,
                isSignedin: false,
                error: action.error

            }
        }
        default:
            return state;
    }

}

export default authenReducer;