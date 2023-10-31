import axios from "axios";
import {baseURL} from "../Constants/urls";

const axioService =axios.create({baseURL})

export {
    axioService
}