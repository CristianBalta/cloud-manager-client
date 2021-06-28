import * as coreTypes from "./coreTypes"
import * as usersService from "../../services/usersService"
import {saveToken} from "../../services/usersService";

export const getUser = () => {
    return async (dispatch: any) => {
        dispatch(coreTypes.LoadUser());
        try {
            const user = await usersService.getUser();
            dispatch(coreTypes.LoadUserSuccess(user.data))
        } catch (err) {
            dispatch(coreTypes.LoadUserFail(err))
        }
    }
}

export const login = (email: string, password: string) => {
    return async (dispatch: any) => {
        dispatch(coreTypes.Login());
        try {
            const loginResponse = await usersService.login(email, password);
            saveToken(loginResponse.data.bearerToken);
            dispatch(coreTypes.LoginSuccess())
        } catch (err) {
            console.log(err);
            dispatch(coreTypes.LoginFail())
        }
    }
}