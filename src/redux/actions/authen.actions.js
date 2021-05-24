
import * as userConst from '../constants/users.const';

export const signUpUser = (user) => ({
    type: userConst.SIGNUP_USER,
    user
})

export const signUpUserSuccess = (user) => ({
    type: userConst.SIGNUP_USER_SUCCESS,
    user
})

export const signUpUserFail = (error) => ({
    type: userConst.SIGNUP_USER_FAIL,
    error
})

export const signInUser = (user) => ({
    type: userConst.SIGNIN_USER,
    user
})

export const signInUserSuccess = (user) => ({
    type: userConst.SIGNIN_USER_SUCCESS,
    user
})

export const signInUserFail = (error) => ({
    type: userConst.SIGNIN_USER_FAIL,
    error
})

