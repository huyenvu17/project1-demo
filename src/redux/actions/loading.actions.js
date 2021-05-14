import * as loadingConst from '../constants/loading.const';

export const showLoading = () => ({
    type: loadingConst.SHOW_LOADING
})

export const hideLoading = () => ({
    type: loadingConst.HIDE_LOADING
})
