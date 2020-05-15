import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    input: {
        '& ::-webkit-scrollbar': {
            display: 'none'
        },
        padding: '6px 0'
    }
});

const Editor = ({ onMessageSend }) => {
    const classes = useStyles();

    const [messageText, setMessageText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = messageText;

        onMessageSend(message);

        setMessageText('');
    };

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Box display="flex" alignItems="stretch">
                <Box flexGrow={1} display="flex" alignItems="center">
                    <InputBase 
                        className={classes.input}
                        id="message-input" 
                        multiline 
                        rowsMax="2"
                        size="small"
                        required
                        fullWidth
                        placeholder="Type something here..." 
                        value={messageText}
                        onInput={e => setMessageText(e.target.value)}
                    />
                </Box>
                <Box>
                    <IconButton color="primary" aria-label="send" size="medium" type="submit"  disabled={!messageText}>
                        <SendIcon />
                    </IconButton>
                </Box>
            </Box>
        </form>
    );
};

export default Editor;