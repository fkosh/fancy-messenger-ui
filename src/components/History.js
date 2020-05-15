import React from 'react';

import Box from '@material-ui/core/Box';

function Message({message}) {

    return <Box>{message.text}</Box>;
};

const History = ({ messages }) => (
    <Box>
        {messages && messages.map((message) => <Message key={message.id} message={message} />)}
    </Box>
);

export default History;