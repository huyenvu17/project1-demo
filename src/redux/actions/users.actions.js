import * as usersConst from '../constants/users.const';

export const fetchUserList = () => ({
    type: usersConst.FETCH_USERS
}) 

export const fetchUserListSuccess = (payload) => ({
    type: usersConst.FETCH_USERS_SUCCESS,
    payload
}) 

export const fetchUserListFail = (error) => ({
    type: usersConst.FETCH_USERS_FAIL,
    error
}) 
