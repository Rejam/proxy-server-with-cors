// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

const WHITE_LIST = [
  "https://deezer-music-search.netlify.com/"
]

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: WHITE_LIST, // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host);