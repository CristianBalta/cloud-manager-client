import * as React from "react";
import {LoginPageWrapper} from "./loginPageStyle";
import {LoginForm} from "../../components/login-form/LoginForm";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../../store/actions/coreActions";

export const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(login(email, password));
    }

    return (
        <LoginPageWrapper>
            <LoginForm
                email={email}
                password={password}
                onChangeEmail={setEmail}
                onChangePassword={setPassword}
                onSubmit={onSubmit}
            />
        </LoginPageWrapper>
    )
}