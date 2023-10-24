import axios from "axios";
import {baseURL} from "../constants/URLS"

const axiosService = axios.create({baseURL})

export {
    axiosService
}
