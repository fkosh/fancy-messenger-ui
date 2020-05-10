import React from 'react';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%' 
    },
    left: {
        width: 'auto'

    }
}));


const Messenger = ({ currentUser }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Box display="flex" style={{height: '100%'}}>
                <Box className={classes.left} display="flex" flexDirection="column">
                    <Box style={{padding: '4px 8px', backgroundColor: '#0E3169', height: '48px'}}>
                        <Logo inverted />
                    </Box>
                    <Box flexGrow={1} style={{padding: '4px 8px', backgroundColor: '#1E3F73'}}>2</Box>
                    <Box style={{padding: '4px 8px', backgroundColor: '#2E4C7D', height: '36px'}}>3</Box>
                </Box>
                <Box flexGrow={1} display="flex" flexDirection="column" >
                    <Box style={{padding: '4px 8px', backgroundColor: '#4E6891', height: '48px'}}>1</Box>
                    <Box style={{padding: '4px 8px', backgroundColor: '#DFE4EB'}} flexGrow={1}>2</Box>
                    <Box style={{padding: '4px 8px', height: '36px'}}>3</Box>
                </Box>
            </Box>
        </Paper>
    );
};
 
// 0E3169 1E3F73 2E4C7D 4E6891 DFE4EB

export default Messenger;