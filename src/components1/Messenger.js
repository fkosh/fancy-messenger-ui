import React from 'react';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import Identicon from 'react-identicons';

import { makeStyles } from '@material-ui/core/styles';

import Logo from './Logo';
import ContactsList from './ContactsList';

import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    left: {
        //width: 'auto'

    },
    avatar: {
        backgroundColor: '#DFE4EB',
    },
    editor: {

    }
}));


const defaultProps = {
   
    borderRight: 1,
  };

const Messenger = ({ currentUser }) => {
    const classes = useStyles();

    const [collapsed, setCollapsed] = React.useState(false);
    const [sectedContactId, setSelectedContactId] = React.useState();

    return (
        <Box className={classes.root} boxShadow={1} >
            <Box display="flex" style={{ height: '100%' }}>
                <Box className={classes.left} display="flex" flexDirection="column">
                    <Box style={{ padding: '4px 24px', backgroundColor: '#0E3169', }}>
                        <Logo inverted collapsible collapsed={collapsed} onClick={setCollapsed} />
                    </Box>
                    <Box flexGrow={1} style={{ padding: '4px 8px', backgroundColor: '#1E3F73' }}>
                        <ContactsList
                            currentUser={currentUser}
                            collapsed={collapsed}
                            onSelectionChange={(contactId) => setSelectedContactId(contactId)}
                        />
                    </Box>
                    <Box display="flex" alignItems="center" style={{ padding: '4px 24px', backgroundColor: '#2E4C7D', height: '46px' }}>
                        <Box >
                            <Avatar className={classes.avatar}>
                                <Identicon palette={["#7E91AF"]} string={currentUser.username} size={28} />
                            </Avatar>
                        </Box>
                        <Box flexGrow={1} style={{ color: '#EFF1F5', fontSize: '16px', paddingLeft: '16px', fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
                            {currentUser.username}
                        </Box>
                        <Box>
                            <IconButton aria-label="exit" size="small">
                                <ExitToAppIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <Box flexGrow={1} display="flex" flexDirection="column" >
                    <Box style={{ padding: '24px 24px 14px', height: '60px', boxSizing: 'border-box', fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', backgroundColor: '#425E8A', color: '#EFF1F5' }}>
                        {sectedContactId}
                    </Box>
                    <Box style={{ padding: '4px 24px', backgroundColor: '#DFE4EB' }} flexGrow={1}>2</Box>
                    <Box style={{ padding: '4px 24px', height: '54px', boxSizing: 'border-box', backgroundColor: '#F5F6F8' }}>
                        <form className={classes.editor} noValidate autoComplete="off">
                            <Box display="flex" alignItems="center">
                                <Box flexGrow={1} >
                                    <InputBase id="outlined-basic" multiline rows={1} size="small" placeholder="Write text here..." />
                                </Box>
                                <Box>
                                    <IconButton color="primary" aria-label="send message" size="small" component="span">
                                        <SendIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

// 0E3169 1E3F73 2E4C7D 4E6891 DFE4EB

export default Messenger;