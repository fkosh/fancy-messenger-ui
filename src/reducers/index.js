import { combineReducers } from 'redux'

import {
    RECEIVE_LOGIN_USER,
    LOGOUT_USER,

    REQUEST_CONTACTS,
    RECEIVE_CONTACTS,

    REQUEST_CONVERSATION_MESSAGES,
    RECEIVE_CONVERSATION_MESSAGES,

    // REQUEST_CONVERSATION_MESSAGES_ADD,
    RECEIVE_CONVERSATION_MESSAGES_ADD
} from '../actions'

const currentUser = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_LOGIN_USER:
            return Object.assign({}, state, {
                id: action.user.id,
                username: action.user.username,
                accessToken: action.user.accessToken
            })
        case LOGOUT_USER:
            return {}
        default:
            return state
    }
}

const contacts = (
    state = { isFetching: false, items: [] }, action
) => {
    switch (action.type) {
        case REQUEST_CONTACTS:
            return Object.assign({}, state, { isFetching: true })
        case RECEIVE_CONTACTS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.contacts
            })
        default:
            return state
    }
}

const conversation = (
    state = { messages: { isFetching: false, items: [] } }, action
) => {
    switch (action.type) {
        case REQUEST_CONVERSATION_MESSAGES:
            return Object.assign({}, state, {
                interlocutorId: action.interlocutorId,
                messages: {
                    isFetching: true,
                    items: []
                }
            })
        case RECEIVE_CONVERSATION_MESSAGES:
            return Object.assign({}, state, {
                messages: {
                    isFetching: false,
                    items: action.messages
                }
            })
        case RECEIVE_CONVERSATION_MESSAGES_ADD:
            return Object.assign({}, state, {
                messages: {
                    items: [...state.messages.items, { text: action.message } ]
                }
            })
        default:
            return state
    }
}

export default combineReducers({ currentUser, contacts, conversation })