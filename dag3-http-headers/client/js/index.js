const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    const body = {
        username: username,
        password: password
    };

    fetch('http://localhost:5050', {
        method: 'POST',
        body: JSON.stringify(body),
    });

})