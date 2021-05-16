import * as usersConst from '../constants/users.const';

const initialState = {
    listUsers: [], 
    error: null
}
const usersReducer = (state = initialState, action) => {
    const { type } = action;
    switch(type){
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
        default:
            return state;
    }
}
export default usersReducer;
