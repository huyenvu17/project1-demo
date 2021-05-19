import React, {Component, Fragment,useState, useEffect} from 'react';
import { notification } from 'antd';
import { connect, useSelector } from 'react-redux';
import * as notificationConst from '../../redux/constants/notification.const';

function Notification() {
    const {options, isVisible} = useSelector(state => state.notificationReducer);
    console.log('notificationType', options, 'isVisible', isVisible);
    
    const openNotificationWithIcon = (options) => {
        notification[options.type]({
          message: options.message,
          description: options.description,
        });
    };

    useEffect(() => {
        if(isVisible) {
            let optionDefault = {
                type: 'success',
                message: 'default!',
                description: 'default info'
            }
            let optionItems = options ? options : optionDefault 
            openNotificationWithIcon(optionItems)
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


