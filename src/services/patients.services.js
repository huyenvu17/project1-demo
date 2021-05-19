import axios from "axios";
import { DOMAIN, MAIN_DOMAIN } from "../utils/config";
import {apiService} from '../services/api/apiService';

const patients = 'pets'; 

// export const getPatientsList = () => {
//   return axios({
//     method: 'GET',
//     url: `${MAIN_DOMAIN}/${patients}`
//   })
// }
export const getPatientsList = () => {
  return apiService.get(`${MAIN_DOMAIN}/${patients}`);
}

export const getPatientDetail = (patientId) => {
    return apiService.get(`${MAIN_DOMAIN}/${patients}?id=${patientId}`)
}

export const addNewPatient = data => {
  return axiosService.post(`${MAIN_DOMAIN}/${patients}`, data);
};

export const updatePatient = (data, patientId) => {
  return axiosService.put(`${MAIN_DOMAIN}/${patients}/${patientId}`, data);
};

export const deletePatient = patientId => {
  return axiosService.delete(`${MAIN_DOMAIN}/${patients}/${patientId}`);
};
