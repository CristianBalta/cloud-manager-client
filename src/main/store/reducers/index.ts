import {combineReducers} from "redux";
import {coreReducer, CoreState} from "./coreReducers";

export interface AppState {
    core : CoreState;
}

export default combineReducers<AppState>({
    core: coreReducer,
});
