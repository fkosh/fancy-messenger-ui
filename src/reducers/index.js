import { combineReducers } from 'redux'

import {
    RECEIVE_LOGIN_USER,

    REQUEST_CONTACTS,
    RECEIVE_CONTACTS,

    SELECT_CONVERSATION,
    REQUEST_CONVERSATION_MESSAGES,
    RECEIVE_CONVERSATION_MESSAGES
} from '../actions'

const currentUser = (state = { }, action) => {
    switch (action.type) {
        case RECEIVE_LOGIN_USER:
            return Object.assign({}, state, {
                id: action.user.id,
                username: action.user.username,
                accessToken: action.user.accessToken
            })
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
        case SELECT_CONVERSATION:
            return Object.assign({}, state, { interlocutorId: action.interlocutorId })
        case REQUEST_CONVERSATION_MESSAGES:
            return Object.assign({}, state, { 
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
        default:
            return state
    }
}

export default combineReducers({ currentUser, contacts, conversation })