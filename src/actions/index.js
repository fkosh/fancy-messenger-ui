import { headers } from '../_helpers';

export const RECEIVE_LOGIN_USER = 'RECEIVE_LOGIN_USER'
function receiveLoginUser(json) {
    return {
        type: RECEIVE_LOGIN_USER,
        user: json
    }
}

export function fetchUserSignUp(userCredentials) {
    return function (dispatch) {

        return fetch(
            `${process.env.REACT_APP_API_ENDPOINT}/sign-up`,
            {
                method: 'POST',
                mode: 'cors',
                headers: headers(),
                body: JSON.stringify({
                    username: userCredentials.username,
                    password: userCredentials.password
                })
            }
        ).then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        ).then(json => dispatch(receiveLoginUser(json)))
    }
}

export const LOGOUT_USER = 'LOGOUT_USER'
export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}

export function fetchUserSignIn(userCredentials) {
    return function (dispatch) {

        return fetch(
            `${process.env.REACT_APP_API_ENDPOINT}/sign-in`,
            {
                method: 'POST',
                mode: 'cors',
                headers: headers(),
                body: JSON.stringify({
                    username: userCredentials.username,
                    password: userCredentials.password
                })
            }
        ).then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        ).then(json => dispatch(receiveLoginUser(json)))
    }
}

export const REQUEST_CONTACTS = 'REQUEST_CONTACTS'
function requestContacts() {
    return {
        type: REQUEST_CONTACTS
    }
}

export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS'
function receiveContacts(json) {
    return {
        type: RECEIVE_CONTACTS,
        contacts: json.map(contact => contact)
    }
}

export function fetchContacts() {
    return function (dispatch) {
        dispatch(requestContacts())

        return fetch(
            `${process.env.REACT_APP_API_ENDPOINT}/users`,
            {
                mode: 'cors',
                headers: headers()
            }
        ).then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        ).then(json => dispatch(receiveContacts(json)))
    }
}

export const REQUEST_CONVERSATION_MESSAGES = 'REQUEST_CONVERSATION_MESSAGES'
function requestConversationMessages(interlocutorId) {
    return {
        type: REQUEST_CONVERSATION_MESSAGES,
        interlocutorId
    }
}

export const RECEIVE_CONVERSATION_MESSAGES = 'RECEIVE_CONVERSATION_MESSAGES'
function receiveConversationMessages(json) {
    return {
        type: RECEIVE_CONVERSATION_MESSAGES,
        messages: json.map(message => message)
    }
}

export function fetchConversationMessages(interlocutorId) {
    return function (dispatch) {
        dispatch(requestConversationMessages(interlocutorId))

        return fetch(
            `${process.env.REACT_APP_API_ENDPOINT}/users/${interlocutorId}/conversation?skip=0&take=100`,
            {
                mode: 'cors',
                headers: headers()
            }
        ).then(
            response => {
                if (response.status === 204) return [];

                return response.json();
            },
            error => console.log('An error occurred.', error)
        ).then(json => dispatch(receiveConversationMessages(json)))
    }
}

export const RECEIVE_CONVERSATION_MESSAGES_ADD = 'RECEIVE_CONVERSATION_MESSAGES_ADD'
function receiveConversationMessageAdd(message) {
    return {
        type: RECEIVE_CONVERSATION_MESSAGES_ADD,
        message
    }
}

export function addConversationMessage(interlocutorId, message) {
    return function (dispatch) {
        return fetch(
            `${process.env.REACT_APP_API_ENDPOINT}/users/${interlocutorId}/conversation/messages`,
            {
                mode: 'cors',
                method: 'POST',
                headers: headers(),
                body: JSON.stringify({
                    text: message
                })
            }
        ).then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        ).then(json => dispatch(receiveConversationMessageAdd(json)))
    }
}