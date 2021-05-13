import axios from "axios";
import { domain } from "../utils/config";
export class DashboardServices {
  constructor() {}
  getDashboardList = () => {
    return fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(response => {
        return response.json();
    }); 
    
  };
}

export const dashboardServices = new DashboardServices();
