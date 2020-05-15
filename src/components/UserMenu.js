import React from 'react';

import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { makeStyles } from '@material-ui/core/styles';

import Identicon from 'react-identicons';

import { logoutUser } from '../actions';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: '#DFE4EB'
    },
    title: {
        color: '#EFF1F5',
        paddingLeft: '16px'
    }
});

const UserMenu = ({ currentUser, collapsed = false, logout }) => {
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="center">
            <Grow in={!collapsed} unmountOnExit={true}>
                <Box display="flex" alignItems="center" flexGrow={1}>
                    <Avatar className={classes.avatar}>
                        <Identicon palette={["#7E91AF"]} string={currentUser.username} size={28} />
                    </Avatar>
                    <Box className={classes.title}>
                        {currentUser.username}
                    </Box>
                </Box>
            </Grow>
            <Box>
                <IconButton aria-label="exit" size="medium" onClick={logout}>
                    <ExitToAppIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser())
});

export default connect(null, mapDispatchToProps)(UserMenu);