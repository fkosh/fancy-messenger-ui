import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import Logo from './Logo';
import ContactsList from './ContactsList';

import UserMenu from './UserMenu';

import Contact from './Contact';
import History from './History';
import Editor from './Editor';

import { fetchContacts, fetchConversationMessages, addConversationMessage } from '../actions';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    },
    logo: {
        padding: '12px',
        backgroundColor: '#0E3169'
    },
    contacts: {
        backgroundColor: '#1E3F73'
    },
    userMenu: {
        padding: '4px 4px 4px 12px',
        backgroundColor: '#2E4C7D'
    },
    splashScreen: {
        backgroundColor: '#DFE4EB',
        color: '#9FADC3'
    },
    contact: {
        padding: '16px 12px 10px',
        boxSizing: 'border-box',
        backgroundColor: '#385583',
        color: '#EFF1F5'
    },
    history: {
        padding: '12px',
        backgroundColor: '#DFE4EB'
    },
    editor: {
        padding: '4px 4px 4px 12px',
        backgroundColor: '#FFF'
    }
}));

const Messenger = ({ currentUser, contacts = [], conversation, selectedContact, getContacts, getConversation, addConversationMessage }) => {
    const classes = useStyles();

    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => { getContacts(); }, [ getContacts ]);

    return (
        <Box className={classes.root} display="flex">
            <Box display="flex" flexDirection="column">
                <Box className={classes.logo}>
                    <Logo inverted collapsible collapsed={collapsed} onClick={setCollapsed} />
                </Box>
                <Box className={classes.contacts} flexGrow={1}>
                    <ContactsList
                        contacts={contacts}
                        collapsed={collapsed}
                        onSelectionChange={getConversation}
                    />
                </Box>
                <Box className={classes.userMenu}>
                    <UserMenu currentUser={currentUser} collapsed={collapsed} />
                </Box>
            </Box>
            <Box flexGrow={1} display="flex" flexDirection="column">
                {!conversation.interlocutorId
                    ? (
                        <Box className={classes.splashScreen} flexGrow={1} display="flex" justifyContent="center" alignItems="center">
                            <Typography>
                                Select the person on the left
                            </Typography>
                        </Box>
                    ) : (
                        <>
                            <Box className={classes.contact}>
                                <Contact contact={selectedContact} />
                            </Box>
                            <Box className={classes.history} flexGrow={1}>
                                <History messages={conversation.messages.items} />
                            </Box>
                            <Box className={classes.editor}>
                                <Editor onMessageSend={message => addConversationMessage(selectedContact.id, message)} />
                            </Box>
                        </>
                    )}
            </Box>
        </Box>
    );
};

const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(fetchContacts()),
    getConversation: contactId => dispatch(fetchConversationMessages(contactId)),
    addConversationMessage: (contactId, message) => dispatch(addConversationMessage(contactId, message))
});

const mapStateToProps = state => ({
    contacts: state.contacts.items,
    conversation: state.conversation,
    selectedContact: state.contacts.items.find(
        contact => contact.id === state.conversation.interlocutorId
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);