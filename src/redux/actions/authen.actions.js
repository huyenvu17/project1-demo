
import * as authenConst from '../constants/authen.const';

export const signUpUser = (user) => ({
    type: authenConst.SIGNUP_USER,
    user
})

export const signUpUserSuccess = (user) => ({
    type: authenConst.SIGNUP_USER_SUCCESS,
    user
})

export const signUpUserFail = (error) => ({
    type: authenConst.SIGNUP_USER_FAIL,
    error
})

export const signInUser = (userSigninInfo) => ({
    type: authenConst.SIGNIN_USER,
    userSigninInfo
})

export const signInUserSuccess = (user) => ({
    type: authenConst.SIGNIN_USER_SUCCESS,
    user
})

export const signInUserFail = (error) => ({
    type: authenConst.SIGNIN_USER_FAIL,
    error
})
export const signOutUser = () => ({
    type: authenConst.SIGNOUT_USER,
})
export const signOutUserComplete = () => ({
    type: authenConst.SIGNOUT_USER_COMPLETE,
})
