
import * as dashboardConst from '../constants/dashboard.const';
export const fetchListAction = (data) => ({
    type: dashboardConst.FETCH_LIST_SUCCESS,
    data
})

// export const fetchList = (dispatch) => {
//     //type: FETCH_LIST
//     return dashboardServices.getDashboardList().then(res=>{
//         dispatch(dashboardAction)
//     }).catch(err=>{

//     })
// }