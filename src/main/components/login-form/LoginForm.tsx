import * as React from "react";
import {LoginFormWrapper} from "./loginFormStyles";
import {Button, TextField} from "@material-ui/core";
import {Strings} from "../../assets/strings"
import {BaseSyntheticEvent} from "react";

interface Props {
    email: string,
    password: string,
    onSubmit: () => void
    onChangeEmail: (email: string) => void
    onChangePassword: (password: string) => void
}

export const LoginForm = (props: Props) => {
    const onChangeEmail = (e: BaseSyntheticEvent) => props.onChangeEmail(e.target.value);
    const onChangePassword = (e: BaseSyntheticEvent) => props.onChangePassword(e.target.value);


    return (
        <LoginFormWrapper>
            <TextField label={Strings.EMAIL} onChange={onChangeEmail}/>
            <TextField label={Strings.PASSWORD} onChange={onChangePassword}/>
            <Button onClick={props.onSubmit}>{Strings.LOGIN}</Button>
        </LoginFormWrapper>
    );
}
