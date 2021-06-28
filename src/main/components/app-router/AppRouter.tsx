import * as React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Pods, UserMenu} from "../";
import Drawer from "../drawer/Drawer";
import {useSelector} from "react-redux";
import {selectLoggedIn, selectUser} from "../../store/selectors/coreSelectors";
import {LoginPage} from "../../pages";

export const AppRouter = () => {

    const user = useSelector(selectUser);
    const loggedIn = useSelector(selectLoggedIn);

    const User = () => {
        return (
            <React.Fragment>
                <p>{user?.userEmail}</p>
                <p>{user?.userPassword}</p>
            </React.Fragment>
        )
    }
    return (
        <Router>{
            !loggedIn ? <Route path={"/login"} component={LoginPage}/> : (
                <Drawer>
                    <Route path={"/"} exact={true} component={() => <User/>}/>
                    <Route path={"/user-menu"} exact={true} component={UserMenu}/>
                    <Route path={"/pods"} exact={true} component={Pods}/>
                </Drawer>
            )
        }
        </Router>
    )
}
