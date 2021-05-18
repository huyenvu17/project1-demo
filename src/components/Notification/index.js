import React, {Component, Fragment,useState, useEffect} from 'react';
import { notification } from 'antd';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as notificationConst from '../../redux/constants/notification.const';

function Notification() {
    const {notificationType, isVisible} = useSelector(state => state.notificationReducer);
    console.log('notificationType', notificationType, 'isVisible', isVisible);
    
    const openNotificationWithIcon = (options) => {
        notification[options.type]({
          message: options.message,
          description: options.description,
        });
    };

    useEffect(() => {
        if(isVisible) {
            let option = {
                type: 'success',
                message: 'congrats!',
                description: 'you did it!'
            }
            openNotificationWithIcon(option)
        }
        else {
            notification.destroy()
        }
    })
    return (
        null
    )

}

export default Notification;


