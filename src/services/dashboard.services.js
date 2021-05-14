import axios from "axios";
import { DOMAIN, MAIN_DOMAIN } from "../utils/config";
import API from '../services/api/apiSrevice';


export const getDashboardList = () => {
  // return fetch(`https://dog.ceo/api/breeds/list/all`)
  // .then(response => {
  //     return response.json();
  // });
  // return function(dispatch){
  //   axios.get(`${domain}/pets`).then(res=>{
  //     console.log(res)
  //   }).catch(err=>{
  //     console.log(error)
  //   })
  // }
  //return axios.get(`${MAIN_DOMAIN}/pets`);
  // return axios({
  //   method: "GET",
  //   url: `${MAIN_DOMAIN}/pets`,
  // });
  return axios ({
    method: 'get',
    url: `${MAIN_DOMAIN}/pets`
}).then( resp => resp );
};
