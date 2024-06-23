import axios from "axios";
import { setupInterceptors } from "./interceptors";

export const api = setupInterceptors(
    axios.create({
        baseURL: 'https://localhost:7283/api'
    })
)