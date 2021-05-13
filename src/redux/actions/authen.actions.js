import { GET_NEW, FETCH_NEWS_SUCESS, FETCH_NEWS_FAIL, FETCH_NEWS_BEGIN, FETCH_NEWS } from "../constants/index";

export const getNews = () => ({
    type: GET_NEW
})

export const fetchNews = () => ({
    type: FETCH_NEWS
})

export const fetchNewsSuccess = (data) => ({
    type: FETCH_NEWS_SUCCESS,
    payload: data
})

export const fetchNewsFail = (error) => ({
    type: FETCH_NEWS_FAIL,
    payload: error
})
