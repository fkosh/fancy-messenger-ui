import React, { useState } from 'react';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { fetchUserSignIn } from '../actions';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(1, 0, 1),
    }
}));

const SignIn = ({ signIn }) => {
    const classes = useStyles();


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
    
        signIn({
            username, password, remember
        });
    };

    return (
        <>
            <Typography component="h1" variant="h4" className={classes.title}>
                Sign In
            </Typography>
            <form className={classes.form} noValidate onSubmit={onSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            size="small"
                            autoComplete="username"
                            value={username}
                            onInput={ e => setUsername(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            size="small"
                            autoComplete="current-password"
                            value={password}
                            onInput={ e => setPassword(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" size="small" checked={remember} onChange={e => setRemember(e.target.checked)} />}
                            label="Remember me"
                        />
                    </Grid>
                </Grid>

                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    Sign In
                </Button>
            </form>
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    signIn: userCredentials => dispatch(fetchUserSignIn(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignIn);