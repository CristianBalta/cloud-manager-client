import {User} from "../../types/classes";
import {ActionType, getType} from "typesafe-actions";
import * as coreTypes from "../actions/coreTypes";

export interface CoreState {
    user: User | null,
    loadUser: boolean;
    loggedIn: boolean;
    loggingIn: boolean;
}

const initialState = {
    user: null,
    loadUser: false,
    loggedIn: false,
    loggingIn: false
}

type CoreActions = ActionType<typeof coreTypes>

export const coreReducer = (state: CoreState = initialState, action: CoreActions) => {

    switch (action.type) {
        case getType(coreTypes.LoadUser): {
            return {
                ...state,
                loadUser: true
            }
        }
        case getType(coreTypes.LoadUserSuccess): {
            return {
                ...state,
                loggedIn: true,
                user: action.payload
            }
        }
        case getType(coreTypes.LoadUserFail): {
            return {
                ...state,
                loadUser: false,
                loggedIn: false
            }
        }
        case getType(coreTypes.Login): {
            return {
                ...state,
                loggingIn: true
            }
        }
        case getType(coreTypes.LoginSuccess): {
            return {
                ...state,
                loggingIn: false,
                loggedIn: true
            }
        }
        case getType(coreTypes.LoginFail): {
            return {
                ...state,
                loggingIn: false
            }
        }
        case getType(coreTypes.Logout): {
            return {
                ...state,
                loggedIn: false
            }
        }
        default: {
            return state
        }
    }
}
