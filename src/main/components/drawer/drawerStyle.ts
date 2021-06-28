import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";

export const ToolbarWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`

export const UserIconWrapper = styled.svg`
  width: 50px;
  height: 50px;
`

export const useStyles = makeStyles((theme) => {
    const drawerWidth = 240;

    return ({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: "transparent",
            padding: theme.spacing(3),
        },
    })
});
