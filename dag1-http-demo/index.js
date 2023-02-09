const http = require('http');
const {users} = require('./database');
const joi = require('joi');

const server = http.createServer((request, response) => {
    // Såhär hämtar vi från request body
    // I express hade det bara varit request.body
    if (request.method === 'POST') {


        request.on('data', (chunk) => {
            const javascriptObject = JSON.parse(chunk.toString());

            const postSchema = joi.object(
                {
                    username: joi.string().min(3).max(20).required(),
                    password: joi.string().min(6).max(30).required(),
                    lunch: joi.any()
                }
            );

            const isValid = postSchema.validate(javascriptObject);

            if (isValid.error) {
                response.statusCode = 400;
                console.log(isValid.error.details);
                response.end(isValid.error.details[0].message);
                return;
            }

            // const keys = Object.keys(javascriptObject);
            // if (keys.length !== 2) {
            //     response.statusCode = 400;
            //     response.end('Invalid payload/body. Expected two properties, received more/less');
            //     return;
            // }

            // if (! keys.includes('username') || ! keys.includes('password')) {
            //     response.statusCode = 400;
            //     response.end('Invalid payload/body. Expected "username" and "password", did not receive both');
            //     return;
            // }

            const {username, password} = javascriptObject;

            const user = {
                username: username,
                password: password
            };

            users.push(user);
            response.statusCode = 201;
            response.end('Vi lade till en användare i databasen!');


        })
    }

    if (request.method === 'GET') {

        response.statusCode = 200;
        const userAsJSON = JSON.stringify(users);
        response.end(userAsJSON);
    }

    if(request.method === 'PATCH') {
        request.on('data', (chunk) => {
            const body = JSON.parse(chunk.toString());

            const {username, password} = body;

            const currentUserIndex = users.findIndex((current) => {
                return current.username === username;
            });

            if (currentUserIndex === -1) {
                response.statusCode = 404;
                response.end('Hittade inte användaren');
                return;
            }

            users[currentUserIndex].password = password;
        })
    }









    // request.on('data', (chunk) => {
    //     const binaryData = chunk;
    //     const readableData = chunk.toString();
    //     const javascriptObject = JSON.parse(readableData);

    //     const username = javascriptObject.username;
    //     const password = javascriptObject.password;
    //     console.log(username)
    //     console.log(password)

    //     // const sentence = "Your username is: " + username + "Your password is: " + password;
    //     const sentence2 = `Your username is ${username}. Your password is: ${password}`;
    //     console.log(sentence2);

    //     if (username === "metin") {
    //         console.log('success');
    //         response.statusCode = 200;
    //     } else {
    //         response.statusCode = 400;
    //     }

    //     response.end(sentence2);  
    // })


});

server.listen(5050);