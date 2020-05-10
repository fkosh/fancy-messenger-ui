import React from 'react';


import Grow from '@material-ui/core/Grow';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    title: {
        fontFamily: "'Pacifico', cursive"
    },
    notInverted: {   
        '& > :first-letter': {
            color: '#bd0303',
            fontWeight: 'bold'
        }, 
        color: '#212121'
    },
    inverted: {
        color: '#fff'
    },
    normalSize: {
        '& > div': {
            margin: '0 2px'
        },
        fontSize: '20px',
        fontFamily: "'Pacifico', cursive",
        '& img': {
            margin: '6px 2px 0 0',
            width: '36px'
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
    root: {

    }
});

const Logo = ({ large = false, inverted = false, collapsible = false }) => {

    const [collapsed, setCollapsed] = React.useState(false);

    const classes = useStyles();

    const className = clsx(
        large ? classes.largeSize : classes.normalSize,
        inverted ? classes.inverted : classes.notInverted
    );

    const logo = (
        <Box className={className} display="flex" justifyContent="center" >
            <Box>
                <img src={inverted ? 'inverted-logo.png' : 'blue-logo.png'} alt="Fancy Messenger" />
            </Box>
            <Grow in={!collapsed} unmountOnExit={true}>
                <Box className={classes.title} display="flex" justifyContent="center" alignItems="center">
                    <Box>Fancy</Box>
                    <Box>Messenger</Box>
                </Box>
            </Grow>
        </Box>
    );

    if (collapsible) {
        return (
            <Link href="#" color="default" onClick={() => setCollapsed(!collapsed)} underline="none">
                {logo}
            </Link>
        );
    } else {
        return logo;
    }
};

export default Logo;