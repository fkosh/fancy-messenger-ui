import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Logo from './Logo';
import SignIn from './SignIn';
import SignUp from './SignUp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        maxWidth: '340px',
        marginTop: theme.spacing(1),
        padding: theme.spacing(3),
        boxSizing: 'border-box'
    },
    submit: {
        margin: theme.spacing(1, 0, 1),
    },
    divider: {
        textAlign: 'center',
        color: '#757575',
        fontSize: '14px'
    }
}));

const Authorization = () => {
    const [signInMode, setSignInMode] = useState(false);

    const classes = useStyles();

    return (
        <Grid container justify="center" className={classes.root}>
            <Grid item>
                <Logo large />
                <Paper className={classes.paper} elevation={0} square>
                    {signInMode ? <SignIn /> : <SignUp />}
                    <Grid container justify="flex-end">
                        <Grid item xs={12}>
                            <Typography className={classes.divider}>Or</Typography>
                        </Grid>
                        <Button type="submit" fullWidth variant="outlined" color="secondary" className={classes.submit} onClick={() => setSignInMode(!signInMode)}>
                            {signInMode ? "Sign Up" : "Sign In"}
                        </Button>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Authorization;