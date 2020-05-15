import React, { useState } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Identicon from 'react-identicons';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // display: 'block',
        backgroundColor: 'transparent',
        overflowX: 'hidden',
        // position: 'relative',
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: '70px',
        },
    },
    avatar: {
        backgroundColor: '#DFE4EB',
      },
}));


const ContactsList = ({ contacts, getContacts, collapsed, onSelectionChange }) => {
    const classes = useStyles();

    const [selected, setSelected] = useState();

    const handleClick = (contactId) => {
        onSelectionChange(contactId);
        
        setSelected(contactId);
    };

    return (
        <div className={classes.root} >
            <Drawer
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: !collapsed,
                    [classes.drawerClose]: collapsed,
                })}
                classes={{
                    paper: clsx(classes.root, {

                        [classes.drawerOpen]: !collapsed,
                        [classes.drawerClose]: collapsed,
                    })
                }}
                open={true}
                onClose={() => { }}
                PaperProps={{ style: { position: 'relative' } }}
                BackdropProps={{ style: { position: 'relative' } }}
                ModalProps={{
                    // container: document.getElementById('drawer-container'),
                    style: { position: 'relative', backgroundColor: 'transparent' }
                }}
                variant="persistent"
            >
                <List style={{ color: '#fff', padding: '0' }}>
                    {contacts && contacts.map((contact) => (
                        <MenuItem style={{ padding: '8px 12px' }} button key={contact.id} onClick={() => handleClick(contact.id)} selected={selected === contact.id}>
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    <Identicon palette={[ "#81c784"]} string={contact.username} size={28} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={contact.username} />
                        </MenuItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default ContactsList;