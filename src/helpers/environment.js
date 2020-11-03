let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '':
        APIURL = 'http://localhost:3500';
        break;
    case 'ajaaspaceclient.herokuapp.com':
        APIURL = 'https://ajaaspaceclient.herokuapp.com'
}

export default APIURL;