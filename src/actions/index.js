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
                    'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1MWFjOWE4Zi04MzAxLTRlZTgtYTg2My0zMzdlMzM3MjVlN2UiLCJqdGkiOiJlYjQ2NDE0YS1iOTBjLTQ3OTItYmNmNS04ZjQzZmVkNmYwY2QiLCJleHAiOjE1ODk0MDIzNTF9.HxDRdmZXukXJ5HTurkrBkHsvHbVw5lhY-G-IwOSO0pU'
                }
            }
        ).then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        ).then(json => dispatch(receiveContacts(json)))
    }
}

export const SELECT_CONVERSATION = 'SELECT_CONVERSATION'
export function selectConversation(interlocutorId) {
    return {
        type: SELECT_CONVERSATION,
        interlocutorId
    }
}

export const REQUEST_CONVERSATION_MESSAGES = 'REQUEST_CONVERSATION_MESSAGES'
function requestConversationMessages() {
    return {
        type: REQUEST_CONVERSATION_MESSAGES
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
                    'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1MWFjOWE4Zi04MzAxLTRlZTgtYTg2My0zMzdlMzM3MjVlN2UiLCJqdGkiOiJlYjQ2NDE0YS1iOTBjLTQ3OTItYmNmNS04ZjQzZmVkNmYwY2QiLCJleHAiOjE1ODk0MDIzNTF9.HxDRdmZXukXJ5HTurkrBkHsvHbVw5lhY-G-IwOSO0pU'
                }
            }
        ).then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        ).then(json => dispatch(receiveConversationMessages(json)))
    }
}