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
            `https://localhost:5001/api/sign-up`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
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

export function fetchUserSignIn(userCredentials) {
    return function (dispatch) {

        return fetch(
            `https://localhost:5001/api/sign-in`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
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
            `https://localhost:5001/api/users`,
            {
                mode: 'cors',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NGExYTgzMi1iMGQ1LTQ2ZmItYjczNC1mMTkyNTZkODE2ZjkiLCJqdGkiOiI0MGRiMzY4MS0yNDQyLTRhYTYtYjlkYS1mMmE5YmVjYWQ5YTYiLCJleHAiOjE1OTAxMjkwOTF9.tAJBP7e7cjbw9YT0iwqYCf2ig5dqFtD9UfbtGfT34X8'
                }
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
            `https://localhost:5001/api/users/${interlocutorId}/conversation?skip=0&take=100`,
            {
                mode: 'cors',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMjZkN2YzOS1lY2M4LTQ4ZTMtOGMxNC04Mjg4NGE2ZTJjZDgiLCJqdGkiOiI0MDBiYTEyZS0xN2FlLTQwNGUtYTZkMy03ZmI4YWQxOTUxN2EiLCJleHAiOjE1OTAxNzA2ODF9.qDS9K8ESw38jUi9Xt2NjEPW50DmlH7EaiqOcZolve10'
                }
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

export const REQUEST_CONVERSATION_MESSAGES_ADD = 'REQUEST_CONVERSATION_MESSAGES_ADD'
function requestConversationMessageAdd(message) {
    return {
        type: REQUEST_CONVERSATION_MESSAGES_ADD,
        message
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
        dispatch(requestConversationMessageAdd(message))

        console.log('add',message );

        return fetch(
            `https://localhost:5001/api/users/${interlocutorId}/conversation/messages`,
            {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMjZkN2YzOS1lY2M4LTQ4ZTMtOGMxNC04Mjg4NGE2ZTJjZDgiLCJqdGkiOiI0MDBiYTEyZS0xN2FlLTQwNGUtYTZkMy03ZmI4YWQxOTUxN2EiLCJleHAiOjE1OTAxNzA2ODF9.qDS9K8ESw38jUi9Xt2NjEPW50DmlH7EaiqOcZolve10',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    text: message
                })
            }
        ).then(
            response => {},
            error => console.log('An error occurred.', error)
        ).then(json => dispatch(receiveConversationMessageAdd(message)))
    }
}