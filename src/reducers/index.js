import { combineReducers } from 'redux'

import {
    REQUEST_CONTACTS,
    RECEIVE_CONTACTS
} from '../actions'

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

export default combineReducers({contacts})