import * as scheduleConst from '../constants/schedule.const';

export const fetchSchedule = () => ({
    type: scheduleConst.FETCH_SCHEDULE
}) 
export const fetchScheduleSuccess = (scheduleList) => ({
    type: scheduleConst.FETCH_SCHEDULE_SUCCESS,
    scheduleList
}) 
export const fetchScheduleFail = (error) => ({
    type: scheduleConst.FETCH_SCHEDULE_FAIL,
    error
}) 

export const fetchScheduleDetail = (scheduleId) => ({
    type: scheduleConst.FETCH_SCHEDULE_DETAIL,
    scheduleId
}) 
export const fetchScheduleDetailSuccess = (scheduleItem) => ({
    type: scheduleConst.FETCH_SCHEDULE_DETAIL_SUCCESS,
    scheduleItem
}) 
export const fetchScheduleDetailFail = (error) => ({
    type: scheduleConst.FETCH_SCHEDULE_DETAIL_FAIL,
    error
}) 

export const addSchedule = (scheduleInput) => ({
    type: scheduleConst.ADD_SCHEDULE,
    scheduleInput
}) 
export const addScheduleSuccess = (scheduleItem) => ({
    type: scheduleConst.ADD_SCHEDULE_SUCCESS,
    scheduleItem
}) 
export const addScheduleFail = (error) => ({
    type: scheduleConst.ADD_SCHEDULE_FAIL,
    error
}) 

export const updateSchedule = () => ({
    type: scheduleConst.UPDATE_SCHEDULE
}) 
export const updateScheduleSuccess = (scheduleItem) => ({
    type: scheduleConst.UPDATE_SCHEDULE_SUCCESS,
    scheduleItem
}) 
export const updateScheduleFail = (error) => ({
    type: scheduleConst.UPDATE_SCHEDULE_FAIL,
    error
}) 

export const deleteSchedule = (scheduleId) => ({
    type: scheduleConst.DELETE_SCHEDULE
}) 
export const deleteScheduleSuccess = (scheduleItem) => ({
    type: scheduleConst.DELETE_SCHEDULE_SUCCESS,
    scheduleItem
}) 
export const deleteScheduleFail = (error) => ({
    type: scheduleConst.DELETE_SCHEDULE_FAIL,
    error
}) 