import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        lineHeight: '30px'
    }
});

const Contact = ({ contact }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root} display="flex" alignItems="stretch">
            <Box flexGrow={1}>
                {contact.username}
            </Box>
            <Box>{contact.id}</Box>
        </Box>
    );
};

export default Contact;