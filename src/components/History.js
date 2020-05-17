import React from 'react';

import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import Identicon from 'react-identicons';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',

    },
    avatar: {
        backgroundColor: '#fff',
    },
}));

function Message({ message, author }) {
    const classes = useStyles();

    console.log(message);

    return (
        <Box display="flex" flexDirection="row">
            <Box>
                <Avatar className={classes.avatar}>
                    <Identicon palette={["#81c784"]} string={author.id} size={28} />
                </Avatar>
            </Box>
            <Box>
                <Box display="flex" flexDirection="row">
                    <Box>{author.username}</Box>
                    <Box>{new Date(message.createdAt).toLocaleTimeString()}</Box>
                </Box>
                <Box>{message.text}</Box>
            </Box>
        </Box>
    );
};

const History = ({ messages, contacts }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.root} direction="column" justify="flex-end">
            {messages && messages.map((message) => (
                <Message
                    key={message.id}
                    message={message}
                    author={contacts.find(contact => contact.id === message.senderId)}
                />
            ))}
        </Grid>
    );
};

const mapStateToProps = state => ({
    contacts: state.contacts.items
});

export default connect(mapStateToProps)(History);