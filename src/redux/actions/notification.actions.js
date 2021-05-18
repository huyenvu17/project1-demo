import * as notificationConst from '../constants/notification.const';

export const showNotificationInfo = (payload) => ({
    type: notificationConst.NOTIFICATION_INFO,
})

export const showNotificationSuccess = (payload) => ({
    type: notificationConst.NOTIFICATION_SUCCESS,
    payload
})

export const showNotificationWarning = (payload) => ({
    type: notificationConst.NOTIFICATION_WARNING,
    payload
})

export const showNotificationError = (payload) => ({
    type: notificationConst.NOTIFICATION_ERROR,
    payload
})