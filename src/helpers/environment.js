let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '':
        APIURL = 'http://localhost:3500';
        break;
    case 'ajaaspaceclient.herokuapp.com':
        APIURL = 'https://ajaaspaceserver.herokuapp.com'
}
console.log(window.location.hostname);
export default APIURL;