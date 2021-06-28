import {Api} from "./api";

export const getUser = () => {
    return Api.axiosInstance.get("/api/users")
}

export const login = (userEmail: string, userPassword: string) => {
    return Api.axiosInstance.post("/login", {
        userEmail, userPassword
    })
}

export const saveToken = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken);
}

export const removeToken = () => {
    localStorage.removeItem("accessToken");
}
