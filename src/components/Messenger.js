import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

import Logo from './Logo';
import ContactsList from './ContactsList';

import UserMenu from './UserMenu';

import Contact from './Contact';
import History from './History';
import Editor from './Editor';

import { fetchContacts } from '../actions';

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
    contact: {
        padding: '16px 12px 10px',
        boxSizing: 'border-box',
        backgroundColor: '#425E8A',
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

const Messenger = ({ currentUser, contacts = [], getContacts }) => {
    const classes = useStyles();

    const [collapsed, setCollapsed] = useState(false);
    const [selectedContact, setSelectedContact] = useState();

    useEffect(() => { getContacts(); }, [getContacts]);

    const onContactSelectionChange = contactId => setSelectedContact(
        contacts.find(contact => contact.id === contactId)
    );

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
                        onSelectionChange={onContactSelectionChange}
                    />
                </Box>
                <Box className={classes.userMenu}>
                    <UserMenu currentUser={currentUser} collapsed={collapsed} />
                </Box>
            </Box>
            <Box flexGrow={1} display="flex" flexDirection="column">
                {selectedContact && (
                    <>
                        <Box className={classes.contact}>
                            <Contact contact={selectedContact} />
                        </Box>
                        <Box className={classes.history} flexGrow={1}>
                            <History />
                        </Box>
                        <Box className={classes.editor}>
                            <Editor />
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
};

const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(fetchContacts())
});

const mapStateToProps = state => ({
    contacts: state.contacts.items
});

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);