import {Api} from './services/api';
import * as React from "react"
import * as coreActions from './store/actions/coreActions';
import {useDispatch, useSelector} from "react-redux"
import {AppRouter} from "./components";

export const App = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        Api.getInstance();
        dispatch(coreActions.getUser())
    }, [])

    return (
        <div className="App">
            <AppRouter/>
        </div>
    );
}
