export function headers() {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (user && user.accessToken) {
        headers['Authorization'] = 'Bearer ' + user.accessToken;
    }

    return headers;
}