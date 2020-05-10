import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';

import Identicon from 'react-identicons';

import { connect } from 'react-redux';

import { fetchContacts } from '../actions';



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
            width: theme.spacing(9),
        },
    },
    avatar: {
        backgroundColor: '#DFE4EB',
      },
}));


const ContactsList = ({ currentUser, contacts, getContacts, collapsed, onSelectionChange }) => {
    const classes = useStyles();
    const theme = useTheme();

    const [hasRendered, setHasRendered] = useState(false);
    const [selected, setSelected] = useState()
    useEffect(() => {
        if (!hasRendered) { getContacts(); }

        setHasRendered(true);
    });

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
                <List style={{ color: '#fff' }}>
                    {contacts && contacts.items.map((contact) => (
                        <MenuItem button key={contact.id} onClick={() => handleClick(contact.id)} selected={selected === contact.id}>
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    <Identicon palette={[ "#7E91AF"]} string={contact.username} size={28} />
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


const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(fetchContacts())
});

const mapStateToProps = state => ({
    contacts: state.contacts
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);