import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

import Identicon from 'react-identicons';

const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: '#fff',
      },
}));

function Message({ message }) {
    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="row">
            <Box>
                <Avatar className={classes.avatar}>
                    <Identicon palette={["#81c784"]} string={message.text} size={28} />
                </Avatar>
            </Box>
            <Box>
                <Box>{new Date(message.createdAt).toLocaleTimeString()}</Box>
                <Box>{message.text}</Box>
            </Box>
        </Box>
    );
};

const History = ({ messages }) => (
    <Box>
        {messages && messages.map((message) => <Message key={message.id} message={message} />)}
    </Box>
);

export default History;