import * as usersConst from '../constants/users.const';

const initialState = {
    isSignedIn: true,
    signUpItems: {
        fullname: null,
        email: null,
        password: null,
        confirmPassword: null
    },
    signInItems: {
        email: null,
        password: null,
        token: null,
    },    
    listUsers: [
        {
            username: 'admin1',
            password: 'admin123'
        },
        {
            username: 'admin0',
            password: 'admin000'
        }
    ], 
    error: null
}
const usersReducer = (state = initialState, action) => {
    const { type } = action;
    switch(type) {
        case usersConst.FETCH_USERS:{
            return {
                ...state,
                listUsers: [],
                isLoading: true
            }
        }
        case usersConst.FETCH_USERS_SUCCESS: {
            return {
                ...state,
                listUsers: action.payload
            }
        }
        case usersConst.FETCH_USERS_FAIL: {
            return {
                ...state,
                error: action.error
            }
        }
        case usersConst.SIGNUP_USER: {
            return{ 
                ...state,
                signUpItems: action.payload
            } 
        }
        default:
            return state;
    }
}
export default usersReducer;
