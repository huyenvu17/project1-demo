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

export const signUpUser = (payload) => ({
    type: usersConst.SIGNUP_USER,
    payload
})

export const signUpUserSuccess = (payload) => ({
    type: usersConst.SIGNUP_USER_SUCCESS,
    payload
})

export const signUpUserFail = (error) => ({
    type: usersConst.SIGNUP_USER_FAIL,
    error
})

export const signInUser = (payload) => ({
    type: usersConst.SIGNIN_USER,
    payload
})

export const signInUserSuccess = (payload) => ({
    type: usersConst.SIGNIN_USER_SUCCESS,
    payload
})

export const signInUserFail = (error) => ({
    type: usersConst.SIGNIN_USER_FAIL,
    error
})