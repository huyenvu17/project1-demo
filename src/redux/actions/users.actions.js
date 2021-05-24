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

export const signUpUser = (user) => ({
    type: usersConst.SIGNUP_USER,
    user
})

export const signUpUserSuccess = (user) => ({
    type: usersConst.SIGNUP_USER_SUCCESS,
    user
})

export const signUpUserFail = (error) => ({
    type: usersConst.SIGNUP_USER_FAIL,
    error
})

export const signInUser = (user) => ({
    type: usersConst.SIGNIN_USER,
    user
})

export const signInUserSuccess = (user) => ({
    type: usersConst.SIGNIN_USER_SUCCESS,
    user
})

export const signInUserFail = (error) => ({
    type: usersConst.SIGNIN_USER_FAIL,
    error
})