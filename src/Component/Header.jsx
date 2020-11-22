import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
    },
}));

const Button = styled.button`
 color: white;
 height: 30px;
 width: 80px;
 font-size: 14px;
 margin: 15px 20px;
 border:solid 2px white;
 border-radius: 7px;
 &:hover {
    background-color: #FFFFFF;
    color: #282c34;
 }
 background: rgba(255, 255, 255,0);0
`;

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#282c34' }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Kelompok 10
          </Typography>
                    <Button color="inherit">Link</Button>
                    <Button color="inherit">Link</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
