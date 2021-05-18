import * as notificationConst from '../constants/notification.const';

const initialState = {
    isVisible: false,
    options: {
        type: notificationConst.STATUS_INFO,
        message: '',
        description: ''
    }
}
const notificationReducer = (state = initialState, action) => {
    const { type } = action
    switch(type){
        case notificationConst.NOTIFICATION_INFO:{
            return {
                ...state,
                isVisible: true,
                options: action.payload
            }
        }
        case notificationConst.NOTIFICATION_SUCCESS:{
            return {
                ...state,
                isVisible: true,
                options: action.payload
            }
        }
        case notificationConst.NOTIFICATION_SUCCESS:{
            return {
                ...state,
                isVisible: true,
                options: action.payload
            }
        }
        case notificationConst.NOTIFICATION_ERROR:{
            return {
                ...state,
                isVisible: true,
                options: action.payload
            }
        }
        case notificationConst.NOTIFICATION_WARNING:{
            return {
                ...state,
                isVisible: true,
                options: action.payload
            }
        }
        default:
            return state
    }
}

export default notificationReducer;