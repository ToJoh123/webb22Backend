const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const form = document.querySelector('form');
const h2 = document.querySelector('h2');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    
    // Responsen innehåller information om hela respons objektet, såsom headers, statusKod osv...
    const response = await fetch('http://localhost:5050/authentication/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });


    // Om vi vill åt en respons body ska vi resolva den genom att anropa .text() på responsen, om responsen innehåller en text. 
    // Om responsen skickar json, använd istället
    const data = await response.text();
    console.log(data);

    h2.textContent = response.statusText;
})