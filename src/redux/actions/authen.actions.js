
import * as userConst from '../constants/users.const';

export const signUpUser = (payload) => ({
    type: userConst.SIGNUP_USER,
    payload
})

export const signUpUserSuccess = (payload) => ({
    type: userConst.SIGNUP_USER_SUCCESS,
    payload
})

export const signUpUserFail = (error) => ({
    type: userConst.SIGNUP_USER_FAIL,
    error
})

export const signInUser = (payload) => ({
    type: userConst.SIGNIN_USER,
    payload
})

export const signInUserSuccess = (payload) => ({
    type: userConst.SIGNIN_USER_SUCCESS,
    payload
})

export const signInUserFail = (error) => ({
    type: userConst.SIGNIN_USER_FAIL,
    error
})

