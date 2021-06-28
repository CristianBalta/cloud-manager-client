import {CoreState} from "../reducers/coreReducers";
import {createSelector} from "reselect";
import {AppState} from "../reducers";

const getCoreState = (state: AppState) => {
    return state.core;
}

export const selectUser = createSelector(getCoreState, (state: CoreState) => {
    return state.user;
})

export const selectLoggedIn = createSelector(getCoreState, (state: CoreState) => {
    return state.loggedIn;
})
