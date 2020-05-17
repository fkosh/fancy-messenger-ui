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

export const LOGOUT_USER = 'LOGOUT_USER'
export function logoutUser() {
    return {
        type: LOGOUT_USER
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
                    'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMzgxMTFmOS0zYWQzLTQwZDgtYjk3YS1lZDQwMGQ4ZmE3OTMiLCJqdGkiOiI5NTg2YWFjYS0zY2JiLTQyMmMtYjFmNC00ZDA4NmJkM2ZhZWEiLCJleHAiOjE1OTAzNDI1MTh9.qCF4ipYuIb24wpk3OATHsNI0_kNzriny_1bumn4aa6I'
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
                    'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMzgxMTFmOS0zYWQzLTQwZDgtYjk3YS1lZDQwMGQ4ZmE3OTMiLCJqdGkiOiI5NTg2YWFjYS0zY2JiLTQyMmMtYjFmNC00ZDA4NmJkM2ZhZWEiLCJleHAiOjE1OTAzNDI1MTh9.qCF4ipYuIb24wpk3OATHsNI0_kNzriny_1bumn4aa6I'
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
            `https://localhost:5001/api/users/${interlocutorId}/conversation/messages`,
            {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMzgxMTFmOS0zYWQzLTQwZDgtYjk3YS1lZDQwMGQ4ZmE3OTMiLCJqdGkiOiI5NTg2YWFjYS0zY2JiLTQyMmMtYjFmNC00ZDA4NmJkM2ZhZWEiLCJleHAiOjE1OTAzNDI1MTh9.qCF4ipYuIb24wpk3OATHsNI0_kNzriny_1bumn4aa6I',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
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