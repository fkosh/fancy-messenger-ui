import React from 'react';

import Grow from '@material-ui/core/Grow';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: "'Pacifico', cursive",
        marginLeft: '8px'
    },
    notInverted: {
        '& :first-letter': {
            color: '#bd0303',
            fontWeight: 'bold'
        },
        color: '#212121'
    },
    inverted: {
        color: '#EFF1F5',
        '& :first-letter': {
            color: '#9FADC3',
            fontWeight: 'bold'
        },
    },
    normalSize: {
        '& > div': {
            // margin: '0 2px'
        },
        fontSize: '18px',
        fontFamily: "'Pacifico', cursive",
        '& img': {
            margin: '0px 2px 0 0',
            width: '30px'
        }
    },
    largeSize: {
        '& > div': {
            margin: '0 2px'
        },
        fontSize: '36px',
        '& img': {
            marginRight: '8px',
            width: '64px'
        }
    },
    logoOpen: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    logoClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    }
}));

const Logo = ({ large = false, inverted = false, collapsible = false, collapsed, onClick }) => {

    const classes = useStyles();

    const className = clsx(
        large ? classes.largeSize : classes.normalSize,
        inverted ? classes.inverted : classes.notInverted
    );

    const handleClick = () => {
        onClick(!collapsed);
    };

    const logo = (
        <Box className={className} display="flex" alignItems="center">
            <img src={inverted ? 'inverted-logo.png' : 'blue-logo.png'} alt="Fancy Messenger" />
            <Grow in={!collapsed} unmountOnExit={true}>
                <Box className={classes.title} display="flex" alignItems="center">
                    <Box>Fancy</Box>
                    <Box>Messenger</Box>
                </Box>
            </Grow>
        </Box>
    );

    if (collapsible) {
        return (
            <Link href="#" color="initial" onClick={handleClick} underline="none">
                {logo}
            </Link>
        );
    } else {
        return logo;
    }
};

export default Logo;