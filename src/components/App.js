import React from 'react';

import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import Authorization from './Authorization';
import Messenger from './Messenger';

const outerTheme = createMuiTheme({
    props: {
        MuiButton: {
            size: 'medium',
        },

    },
    palette: {
        primary: {
            light: '#5069a2',
            main: '#1E3F73',
            dark: '#001a47'
        },
        secondary: {
            light: '#b2fab4',
            main: '#81c784',
            dark: '#519657'
        },
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%'
    }
}));

const App = ({ currentUser }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <ThemeProvider theme={outerTheme}>
                {currentUser.accessToken ? <Messenger currentUser={currentUser} /> : <Authorization />}
            </ThemeProvider>
        </Box>
    );
};

const mapStateToProps = state => ({
    currentUser: state.currentUser
});

export default connect(mapStateToProps)(App);