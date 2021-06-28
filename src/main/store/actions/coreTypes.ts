import {createAction} from "typesafe-actions";
import {User} from "../../types/classes";

const LOAD_USER = "Load User";
const LOAD_USER_SUCCESS = "Load User Success";
const LOAD_USER_FAIL = "Load User Fail";

export const LoadUser = createAction(LOAD_USER)<void>();
export const LoadUserSuccess = createAction(LOAD_USER_SUCCESS, (user: User) => {
    return user;
})<User>();
export const LoadUserFail = createAction(LOAD_USER_FAIL, (error: any) => {
    return error.message
})<string>();

const LOGIN = "Login";
const LOGIN_SUCCESS = "Login Success";
const LOGIN_FAIL = "Login Fail";

export const Login = createAction(LOGIN)<void>();
export const LoginSuccess = createAction(LOGIN_SUCCESS)<void>();
export const LoginFail = createAction(LOGIN_FAIL)<void>();

const LOGOUT = "Logout";

export const Logout = createAction(LOGOUT)<void>();
