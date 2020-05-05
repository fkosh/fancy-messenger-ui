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
                    'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmYWM1NzI1YS1iYTRjLTRhN2MtODUyNS0zMDlmZWFhNzE1MmUiLCJqdGkiOiI5ZGM4NDkyNC03Y2I3LTQ2MmQtYTZkMy1iYzBjZTdhMWNmZmIiLCJleHAiOjE1ODkzMDU0Mzh9.JmPPfvXshogb5-1y7Ny1ahbBKZYbNSyAOZAxaqDs8ik'
                }
            }
        ).then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        ).then(json => dispatch(receiveContacts(json)))
    }
}