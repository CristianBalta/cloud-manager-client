import Toolbar from "@material-ui/core/Toolbar";
import {ToolbarWrapper, UserIconWrapper, useStyles} from "./toolbarStyle";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React from "react";
import AppBar from "@material-ui/core/AppBar";

export const AppToolbar = () => {

    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>

            <Toolbar>
                <ToolbarWrapper>
                    <Typography variant="h6" noWrap>
                        Permanent drawer
                    </Typography>
                    <UserIconWrapper>
                        <AccountCircleIcon onClick={() => {
                        }}/>
                    </UserIconWrapper>
                </ToolbarWrapper>
            </Toolbar>
        </AppBar>)

}
