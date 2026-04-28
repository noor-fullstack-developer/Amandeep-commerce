import axios from "axios";

// Make sure 'export' is exactly like this:
export const myAxios = axios.create({
    baseURL: "http://localhost:3000",
});