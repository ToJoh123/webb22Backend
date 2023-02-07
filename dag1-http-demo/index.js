const http = require('http');

const server = http.createServer((request, response) => {
    // Såhär hämtar vi från Query parameters (URL)
    // I express hade det bara varit request.query / request.params
    const sanitizedString = request.url.replace('/', '').replace('?', '');
    const parameters = new URLSearchParams(sanitizedString);
    // console.log(parameters);

    // Såhär hämtar vi från request body
    // I express hade det bara varit request.body
    request.on('data', (chunk) => {
        const binaryData = chunk;
        const readableData = chunk.toString();
        const javascriptObject = JSON.parse(readableData);
        console.log(javascriptObject);
        console.log(javascriptObject.username);
        console.log(javascriptObject.eyeColor);
    })


});

server.listen(5050);